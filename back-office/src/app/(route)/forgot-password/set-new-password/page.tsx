"use client";

import { Form } from "@/components/ui/form";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import InputField from "@/components/partials/form/InputField";
import { useRouter } from "next/navigation";
import { failedToast} from "@/utils/toast";
import { useAuthStore } from "@/store/login";
import Image from "next/image";
import { axiosInstance } from "@/lib/axios";
import loginImage from '@/asset/logo/webp/asset-logo-with-text.webp'

const dataSchema = z.object({
    email: z.string().email().nonempty(),
});

type DataSchema = z.infer<typeof dataSchema>;

const LoginPage = () => {
    const form = useForm<DataSchema>({
        resolver: zodResolver(dataSchema),
        defaultValues: {
            email: "",
        }
    });

    const { handleSubmit, control, reset, watch } = form;

    const router = useRouter()

    const handleInput = handleSubmit(async (value) => {
        try {
            const response = await axiosInstance.post(
                `${process.env.NEXT_PUBLIC_AUTH_API_URL}/forgot-password`,
                value
            );
            router.push("/forgot-password/set-new-password/success");
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
    )
    return (
        <main className="w-full flex justify-center items-center min-h-screen bg-[#f5f5f5]">
            <section className="w-full max-w-[35%] flex flex-col justify-center gap-5 bg-white shadow-md rounded-xl p-12">
                <div className="w-full pb-8 border-b-[1px] ">
                    <Image src={loginImage} alt="login-image" width={1920} priority height={1080} quality={100} className="w-[80%] mx-auto"/>
                </div>
                <div>
                    <h1 className="text-xl font-bold text-black">Login</h1>
                    <p className="text-gray-600 text-sm">Enter your details below to login</p>
                </div>
                <Form {...form}>
                    <form onSubmit={handleInput}>
                        <div className="flex flex-col gap-4 md:gap-4 w-full">
                            <InputField control={control} label="Email" name="email" className="w-full" />
                            <InputField control={control} label="Password" name="password" type="password" className="w-full" />
                            <Button
                                type="submit"
                                className=" bg-red-700 hover:bg-red-800 text-white font-semibold h-14 w-full rounded-xl"
                            >
                                Login
                            </Button>
                        </div>
                    </form>
                </Form>
                <button
                    type="submit"
                    className=" underline text-red-800 text-base self-start"
                >
                    Forgot Your Password
                </button>
                <label className="text-gray-600 text-sm">© 2025 Digital PA</label>
            </section>
            {/* <section className="w-full max-w-[80%] h-[60vh]">
                <Image src={loginImage.src} alt="login-image" width={1920} priority height={1080} className="object-cover w-full h-full rounded-2xl" />
            </section> */}
        </main>
    );
};



export default LoginPage;
