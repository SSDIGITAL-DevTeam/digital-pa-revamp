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
import { useAuthStore } from "@/app/store/login";
import { withAuth } from "@/hoc/withAuth";
import { axiosInstance } from "@/lib/axios";

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
            content: "",
            status: "Published",
            favorite: false,
            categoryId: "",
        },
    });
    const { handleSubmit, control, reset, watch } = form;

    const [imageFile, setImageFile] = React.useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = React.useState<string>("");
    const id = useAuthStore((state) => state.id);


    useEffect(() => {
        if (defaultValue) {
            reset(defaultValue);
        }
    }, [defaultValue]);

    useEffect(() => {
        if (defaultValue?.image) {
            setPreviewUrl(`http://localhost:3006/uploads/${defaultValue.image}`);
        }
    }, [defaultValue]);


    const router = useRouter()
    const blogCategory = data
        .map((c: any) => {
            return {
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
            formData.append("roleId", id);
            if (imageFile) {
                formData.append("image", imageFile);
            }

            const url = defaultValue
                ? `/blog/${defaultValue.id}`
                : `/blog`;
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
                    {defaultValue && <RadioGroupField control={control} name="status" label="Status" data={statusList} />}
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
