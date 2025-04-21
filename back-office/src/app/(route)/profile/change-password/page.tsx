"use client";

import { Button } from "@/components/ui/button";
import axios from "axios";
import { CirclePlus, ListFilter, MoveLeft, Pencil, Search, Star, Trash } from "lucide-react";
import Link from "next/link";
import { use, useEffect, useState } from "react";
import TableComponents from "@/components/partials/table/TableComponents";
import Header from "@/components/layout/header/Header";
import { failedToast, successToast } from "@/utils/toast";
import { axiosInstance } from "@/lib/axios";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";
import InputField from "@/components/partials/form/InputField";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";

type Pagination = {
    currentPage: number;
    perPage: number;
    total: number;
    totalPages: number;
};

const dataSchema = z.object({
    password: z.string().nonempty("Password is required"),
    newPassword: z.string().nonempty("New Password is required"),
    confirmNewPassword: z.string().nonempty("Confirm New Password is required"),
}).refine((data) => data.newPassword === data.confirmNewPassword, {
    message: "Passwords do not match",
    path: ["confirmNewPassword"],
});

type FormData = z.infer<typeof dataSchema>;

export default function ChangePasswordPage() {
    const [id, setId] = useState<string | undefined>(undefined);
    const router = useRouter()
    const form = useForm<FormData>({
        defaultValues: {
            password: "",
            newPassword: "",
            confirmNewPassword: "",
        },
        resolver: zodResolver(dataSchema),
    })

    const { handleSubmit, control } = form

    useEffect(() => {
        const fetchToken = () => {
            const token = sessionStorage.getItem("token");
            if (!token) return null
            const { id } = jwtDecode(token);
            setId(id);
        }
        fetchToken()
    }, [])

    const handleInput = handleSubmit(async (value) => {
        const { confirmNewPassword, ...rest } = value
        console.log({ rest })
        try {
            const response = await axiosInstance.patch(`/user/${id}`, rest)
            if (response.status === 200) {
                successToast(
                    <p className="text-xl font-semibold text-green-900">Success</p>,
                    <p className="text-xs text-green-400 mt-2">{
                        response.data.message || "Process Successfully"
                    }
                    </p>
                );
                router.push("/profile");
            }
        } catch (error: any) {
            failedToast(
                <p className="text-xl font-semibold text-red-900">Failed</p>,
                <p className="text-xs text-red-400 mt-2">{
                    error.response?.data?.error || error.response?.statusText || "Something went wrong"
                }
                </p>
            );
        }
    })

    return (
        <main className="w-full flex flex-col gap-6">
            <Header title={"Profile"} />
            <Button onClick={() => router.push("/profile")} size={"sm"} variant={"ghost"} className="text-red-700 hover:text-red-800 font-semibold w-fit"><MoveLeft /> Back</Button>
            <section className="flex flex-col gap-16 p-8 rounded-3xl bg-white border border-border shadow-sm w-full min-h-[50vh] items-center">
                <div className="w-full flex-col items-center">

                    <div className="flex gap-2 items-center text-sm text-gray-600 justify-between w-full">
                        <h1 className="text-4xl font-semibold text-black">Change Password</h1>
                    </div>
                </div>

                <div className="w-full flex flex-col gap-6">
                    <Form {...form}>
                        <form onSubmit={handleInput}>
                            <div className="flex flex-col gap-4 md:gap-8 w-full">
                                <InputField control={control} label="Current Password" name="password" type="password" />
                                <div className="grid grid-cols-2 gap-4">
                                    <InputField control={control} label="New Password" name="newPassword" type="password" />
                                    <InputField control={control} label="Confirm Password" name="confirmNewPassword" type="password" />
                                </div>
                            </div>
                            <div className="w-full flex justify-end gap-4 features-center mt-8 sm:mt-12">
                                <Button
                                    type="button"
                                    onClick={() => router.push("/profile")}
                                    variant={"back"}
                                    size={"sm"}
                                >
                                    Back
                                </Button>
                                <Button
                                    type="submit"
                                    variant={"addData"}
                                    size={"sm"}

                                >
                                    Set Password
                                </Button>
                            </div>
                        </form>
                    </Form>
                </div>
            </section>
        </main>
    );
}
