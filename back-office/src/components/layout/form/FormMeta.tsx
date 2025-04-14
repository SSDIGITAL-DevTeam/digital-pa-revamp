"use client";

import { Form } from "@/components/ui/form";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import InputField from "@/components/partials/form/InputField";
import { useRouter } from "next/navigation";
import { failedToast, successToast } from "@/utils/toast";
import { useParams } from "next/navigation";
import { axiosInstance } from "@/lib/axios";


const dataSchema = z.object({
    key: z.string().nonempty(),
    value: z.string(),
    content: z.string(),
});

type DataSchema = z.infer<typeof dataSchema>;

const FormMeta = ({ defaultValue }: { defaultValue?: any }) => {
    const form = useForm<DataSchema>({
        resolver: zodResolver(dataSchema),
        defaultValues: {
            key: "",
            value: "",
            content: "",
        },
    });

    const { handleSubmit, control, reset, watch } = form;

    useEffect(() => {
        if (defaultValue) {
            reset(defaultValue);
        }
    }, [defaultValue]);

    const router = useRouter()

    const params = useParams();
    const page = params?.slug as string;

    const handleInput = handleSubmit(async (value) => {
        if (!defaultValue) {
            try {
                const response = await axiosInstance.post(
                    "/meta",
                    { ...value, page }
                );
                successToast(
                    <p className="text-xl font-semibold text-green-900">Success</p>,
                    <p className="text-xs text-green-400 mt-2">{
                        response.data.message || "Process Successfully"
                    }
                    </p>
                );
                router.push("/meta/" + page);
            } catch (error: any) {
                failedToast(
                    <p className="text-xl font-semibold text-red-900">Failed</p>,
                    <p className="text-xs text-red-300 mt-2">{
                        error.response?.data?.error || error.response?.statusText || "Error processing data"
                    }
                    </p>
                );
            }
        } else {
            try {
                const response = await axiosInstance.patch(
                    `/meta/${defaultValue.id}`,
                    value
                );
                successToast(
                    <p className="text-xl font-semibold text-green-900">Success</p>,
                    <p className="text-xs text-green-400 mt-2">{
                        response.data.message || "Process Successfully"
                    }
                    </p>
                );
                router.push("/meta/" + page);
            } catch (error: any) {
                failedToast(
                    <p className="text-xl font-semibold text-red-900">Failed</p>,
                    <p className="text-xs text-red-300 mt-2">{
                        error.response?.data?.error || error.response?.statusText || "Error processing data"
                    }
                    </p>
                );
            }
        }
    }
    )
    return (
        <Form {...form}>
            <form onSubmit={handleInput}>
                <div className="md:grid md:grid-cols-2 flex flex-col gap-4 md:gap-8 w-full">
                    <InputField control={control} label="Key" name="key" />
                    <InputField control={control} label="Value" name="value" />
                    <InputField control={control} label="Content" name="content" />
                </div>
                <div className="w-full flex justify-between features-center mt-8 sm:mt-12">
                    <Button
                        onClick={() => router.push("/meta/" + page)}
                        variant={"outline"}
                        className="h-14 px-7 rounded-full"
                    >
                        Back
                    </Button>

                    <div className="flex gap-4 justify-end features-center">
                        <Button
                            type="submit"
                            className=" bg-red-700 hover:bg-red-800 text-white font-semibold h-14 px-5 rounded-full"
                        >
                            Save Data
                        </Button>
                    </div>
                </div>
            </form>
        </Form>
    );
};



export default FormMeta;
