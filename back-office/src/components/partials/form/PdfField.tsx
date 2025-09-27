"use client";
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { Control } from "react-hook-form";
import { Button } from "@/components/ui/button";

type PdfFieldProps = {
    name: string;
    label: string;
    control: Control<any>;
    className?: string;
    disabled?: boolean;
    setPdfFile: (file: File) => void;
    defaultPdf?: string;
};

const PdfField = ({
    control,
    name,
    label,
    className,
    setPdfFile,
    defaultPdf,
}: PdfFieldProps) => {
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    // Set default PDF jika ada
    useEffect(() => {
        if (defaultPdf) {
            setPreviewUrl(defaultPdf);
        }
    }, [defaultPdf]);

    // 🔽 fungsi download PDF
    const handleDownload = () => {
        if (!previewUrl) return;

        const link = document.createElement("a");
        link.href = previewUrl;
        link.download = `${label}.pdf`; // nama file hasil download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <FormField
            name={name}
            control={control}
            render={({ field }) => (
                <FormItem>
                    <FormLabel className="capitalize font-semibold mb-2 text-base">
                        {label}
                    </FormLabel>

                    {/* Input File */}
                    <FormControl>
                        <Input
                            type="file"
                            accept="application/pdf"
                            placeholder={label}
                            className={`w-fit h-fit rounded-sm bg-blue-700/10 border-blue-700 border-[1px] text-sm ${className}`}
                            defaultValue={undefined}
                            onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) {
                                    setPdfFile(file);
                                    field.onChange(file);
                                    setPreviewUrl(URL.createObjectURL(file));
                                }
                            }}
                            disabled={field.disabled}
                        />
                    </FormControl>

                    <FormMessage />

                    {/* Download PDF */}
                    {previewUrl ? (
                        <Button
                            type="button"
                            variant="outline"
                            className="mt-3"
                            onClick={handleDownload}
                        >
                            Download PDF
                        </Button>
                    ) : (
                        <div className="h-20 w-full flex items-center justify-center bg-gray-100 text-gray-400 mt-3">
                            No File Upload PDF
                        </div>
                    )}
                </FormItem>
            )}
        />
    );
};

export default PdfField;
