"use client"
import { ChangeEvent, FormEvent, useState } from "react";
import Header from "./Header";
import { PhoneInput } from 'react-international-phone'
import 'react-international-phone/style.css'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import FieldInput from "@/components/partials/Field/FieldInput";
import CustomPhoneInput from "@/components/partials/PhoneInput";
import FieldPhoneInput from "@/components/partials/Field/FieldPhoneInput";
import { axiosInstance } from "@/lib/axios";

const formData = z.object({
    name: z.string().nonempty(),
    email: z.string().email().nonempty(),
    phone: z.string().nonempty().min(4, "Please enter a valid phone number"),
    bussiness: z.string().nonempty(),
    message: z.string().nonempty(),
})

type FormData = z.infer<typeof formData>

export default function FormJoin() {
    const form = useForm<FormData>({
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            bussiness: "",
            message: "",
        },
        resolver: zodResolver(formData),
    });
    const { handleSubmit, control, reset, getValues } = form

    const handleInput = handleSubmit(async (value) => {
        try {
            const response = await axiosInstance.post("/leads", value);
            console.log("Success:", response.data.message);
        } catch (error) {
            console.error("Error:", error);
        }
        finally {
            reset()
        }
    })

    return (
        <div id="consultation" className="lg:max-w-7xl flex flex-col gap-4 lg:gap-8 lg:mx-auto px-5">
            <Header title="Ready to Transform Your Business Performance?" className="text-white" />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 w-full pt-12 px-10 md:px-20 lg:px-0">
                <Form {...form}>
                    <form onSubmit={handleInput} className="col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <FieldInput control={control} label="Name" name="name" />
                        <FieldInput control={control} label="Email" name="email" />
                        <FieldPhoneInput control={control} label="Phone Number" name="phone" />
                        <FieldInput control={control} label="Bussiness" name="bussiness" />
                        <div className="lg:col-span-2">
                            <FieldInput control={control} label="Message" name="message" type={"textarea"} />
                        </div>

                        <div className="flex justify-end w-full lg:col-span-2">
                            <button type="submit" className="rounded-md border-2 text-white border-white bg-primary py-3 px-5 lg:px-16 w-fit ">Send Message</button>
                        </div>
                    </form>
                </Form>
                <div className="flex flex-col gap-5 text-white">
                    <div className="flex flex-col gap-2 justify-center">
                        <h3 className="text-xl">Email</h3>
                        <p className="text-gray-300 font-light">wow@digital-pa.com.sg</p>
                    </div>
                    <div className="flex flex-col gap-2 justify-center">
                        <h3 className="text-xl">Contact</h3>
                        <p className="text-gray-300 font-light">+65 XXXXXXXXX</p>
                    </div>
                    <div className="flex flex-col gap-2 justify-center">
                        <h3 className="text-xl">Visit Us</h3>
                        <p className="text-gray-300 font-light">1100 Lower Delta Rd
                            #02-02B EPL Building
                            Singapore 169206</p>
                    </div>
                </div>
            </div>
        </div >
    )
}