"use client";

import { Form } from "@/components/ui/form";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import InputField from "@/components/partials/form/InputField";
import { useRouter } from "next/navigation";
import RadioGroupField from "@/components/partials/form/RadioGroupField";
import { failedToast, successToast } from "@/utils/toast";
import BlogField from "@/components/partials/form/BlogField";
import SelectField from "@/components/partials/form/SelectField";
import ImageField from "@/components/partials/form/ImageField";
import { useAuthStore } from "@/store/login";
import { withAuth } from "@/hoc/withAuth";
import { axiosInstance } from "@/lib/axios";
import { Key } from "lucide-react";
import PdfField from "@/components/partials/form/PdfField";

const blogStatus = [
    "Published",
    "Archived",
    "Draft",
] as const;

const statusList = [
    {
        title: "Published",
        value: "Published",
    },
    {
        title: "Archived",
        value: "Archived",
    },
    {
        title: "Draft",
        value: "Draft",
    }
]

const dataSchema = z.object({
    title: z.string().nonempty("Title is required"),
    image: z
        .any()
        .refine(
            (file) => {
                if (!file) return true; // Boleh kosong
                if (typeof file === "string") return true; // Nama file lama
                if (file instanceof File) return true; // File baru
                return false;
            },
            { message: "Image must be a file" }
        )
        .optional(),

    pdf: z
        .any()
        .refine(
            (file) => {
                if (!file) return true; // Boleh kosong
                if (typeof file === "string") return true; // Nama file lama (path/url)
                if (file instanceof File && file.type === "application/pdf") return true; // Harus PDF
                return false;
            },
            { message: "PDF must be a valid .pdf file" }
        )
        .optional(),

    content: z.string().nonempty("Content is required"),
    status: z.enum([...blogStatus]),
    favorite: z.boolean(),
    categoryId: z.string().nonempty("Category is required"),
});


type DataSchema = z.infer<typeof dataSchema>;

const FormBlog = ({ defaultValue, data }: { defaultValue?: any, data: any }) => {
    const form = useForm<DataSchema>({
        resolver: zodResolver(dataSchema),
        defaultValues: {
            title: "",
            image: undefined,
            pdf: undefined,
            content: "",
            status: "Published",
            favorite: false,
            categoryId: "",
        },
    });
    const { handleSubmit, control, reset, watch } = form;

    const [imageFile, setImageFile] = React.useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = React.useState<string>("");
    const [pdfPreviewUrl, setPdfPreviewUrl] = React.useState<string>("");
    const [pdfFile, setPdfFile] = React.useState<File | null>(null);
    const id = useAuthStore((state) => state.id);


    useEffect(() => {
        if (defaultValue) {
            reset(defaultValue);
        }
    }, [defaultValue]);

    useEffect(() => {
        if (defaultValue?.image) {
            setPreviewUrl(`${process.env.NEXT_PUBLIC_IMAGE_API_URL}/${defaultValue.image}`);
        }
        if (defaultValue?.pdf) {
            setPdfPreviewUrl(`${process.env.NEXT_PUBLIC_IMAGE_API_URL}/${defaultValue.pdf}`);
        }
        console.log("=============pdfPreviewUrl ",pdfPreviewUrl)
    }, [defaultValue]);


    const router = useRouter()
    const blogCategory = data
        .map((c: any) => {
            return {
                // Key: c.id,
                value: c.id,
                title: c.name
            }
        })

    const handleInput = handleSubmit(async (value) => {
        try {
            const formData = new FormData();
            formData.append("title", value.title);
            formData.append("content", value.content);
            formData.append("status", value.status);
            formData.append("favorite", String(value.favorite));
            formData.append("categoryId", value.categoryId);
            formData.append("userId", id);
            if (imageFile) {
                formData.append("image", imageFile);
            }
            if (pdfFile) {
                formData.append("pdf", pdfFile);
            }

            const url = defaultValue
                ? `/blog/${defaultValue.id}`
                : `/blog`;

                // console.log({formData})
            const method = defaultValue ? axiosInstance.patch : axiosInstance.post;
            const response = await method(url, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            successToast(
                <p className="text-xl font-semibold text-green-900">Success</p>,
                <p className="text-xs text-green-400 mt-2">{
                    response.data.message || "Process Successfully"
                }
                </p>
            );
            router.push("/blog/blogs");
        } catch (error: any) {
            // console.log(error);
            failedToast(
                <p className="text-xl font-semibold text-red-900">Failed</p>,
                <p className="text-xs text-red-300 mt-2">{
                    error.response?.data?.error || error.response?.statusText || "Error processing data"
                }
                </p>
            );
        }
    });

    return (
        <Form {...form}>
            <form onSubmit={handleInput}>
                <div className="flex flex-col gap-4 md:gap-8 w-full">
                    <SelectField control={control} label="Add Category" name="categoryId" data={blogCategory} />
                    <ImageField defaultImage={previewUrl} setImageFile={setImageFile} control={control} label="Add Cover Image" name="image" />
                    <InputField control={control} label="Add Title" name="title" />
                    <RadioGroupField control={control} name="status" label="Status" data={statusList} />
                    {/* {defaultValue && <RadioGroupField control={control} name="status" label="Status" data={statusList} />} */}
                    <PdfField 
                        defaultPdf={pdfPreviewUrl}  // state untuk default pdf preview (optional)
                        setPdfFile={setPdfFile}     // handler simpan file ke parent
                        control={control} 
                        label="Add PDF File" 
                        name="pdf" 
                    />
                    <BlogField control={control} name="content" label="blog Content" />
                </div>
                <div className="w-full flex justify-between features-center mt-8 sm:mt-12">
                    <Button
                        type="button"
                        onClick={() => router.push("/blog/blogs")}
                        variant={"back"}
                        size={"sm"}
                    >
                        Back
                    </Button>

                    <div className="flex gap-4 justify-end features-center">
                        <Button
                            type="submit"
                            variant={"addData"}
                            size={"sm"}
                            className={`${defaultValue && "bg-[#E7BB53] hover:bg-[#E7BB53]/90 text-black"}`}

                        >
                            {defaultValue ? "Save Changes" : "Add Blog"}
                        </Button>
                    </div>
                </div>
            </form>
        </Form>
    );
};



export default withAuth(FormBlog);
