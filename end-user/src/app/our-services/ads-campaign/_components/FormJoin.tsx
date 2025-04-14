"use client"
import { ChangeEvent, FormEvent, useState } from "react";
import Header from "./Header";
interface FormData {
    name: string;
    email: string;
    phone: string;
    bussiness: string;
    message: string;
}

export default function FormJoin() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        phone: "",
        bussiness: "",
        message: "",
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch("https://your-api-url.com/endpoint", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            console.log("Success:", result);

            setFormData({
                name: "",
                email: "",
                phone: "",
                bussiness: "",
                message: "",
            });
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div id="consultation" className="lg:max-w-7xl flex flex-col gap-4 lg:gap-8 lg:mx-auto px-5">
            <Header title="Ready to Transform Your Business Performance?" className="text-white" />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 w-full pt-12 px-10 md:px-20 lg:px-0">
                <div className="col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="name" className="text-white">Name <span>*</span></label>
                        <input type="text" name="name" className="rounded-md h-12 text-base font-body py-2 px-4" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email" className="text-white">Email Address <span>*</span></label>
                        <input type="text" name="email" className="rounded-md h-12 text-base font-body py-2 px-4" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="phone" className="text-white">Phone Number <span>*</span></label>
                        <input type="text" name="phone" className="rounded-md h-12 text-base font-body py-2 px-4" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor='bussiness' className="text-white">Bussiness Category <span>*</span></label>
                        <input type="text" name='bussiness' className="rounded-md h-12 text-base font-body py-2 px-4" />
                    </div>
                    <div className="lg:col-span-2">
                        <div className="flex flex-col gap-1">
                            <label htmlFor='message' className="text-white">Message <span>*</span></label>
                            <input type="text" name="message" className="w-full h-32 rounded-md text-base font-body py-2 px-4" />
                        </div>
                    </div>
                    <div className="flex justify-end w-full lg:col-span-2">
                        <button className="rounded-md border-2 text-white border-white bg-primary py-3 px-5 lg:px-16 w-fit ">Send Message</button>
                    </div>
                </div>
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
        </div>
    )
}