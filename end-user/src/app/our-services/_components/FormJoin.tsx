"use client"
import Header from "./Header";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import FieldInput from "@/components/partials/Field/FieldInput";
import FieldPhoneInput from "@/components/partials/Field/FieldPhoneInput";
import { axiosInstance } from "@/lib/axios";
import FieldSelect from "@/components/partials/Field/FieldDropdown";
import { useState } from "react";

const businessCategories = [
    'Automotive',
    'Business Support & Supplies',
    'Computers & Electronics',
    'Construction & Contractors',
    'Education',
    'Entertainment',
    'Food & Dining',
    'Health & Medicine',
    'Home & Garden',
    'Legal & Financial',
    'Manufacturing, Wholesale, Distribution',
    'Merchants (Retail)',
    'Miscellaneous',
    'Personal Care & Services',
    'Real Estate',
    'Travel & Transportation',
]

const formData = z.object({
    name: z.string().nonempty(),
    email: z.string().email().nonempty(),
    phone: z.string().nonempty().min(4, "Please enter a valid phone number"),
    business: z.string().nonempty(),
    message: z.string().nonempty(),
})

type FormData = z.infer<typeof formData>

export default function FormJoin() {
    const [isLoading, setIsLoading] = useState(false);
    const form = useForm<FormData>({
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            business: "",
            message: "",
        },
        resolver: zodResolver(formData),
    });
    const { handleSubmit, control, reset } = form

    const handleInput = handleSubmit( async(value) => {
        setIsLoading(true)
        try {
            const response = await axiosInstance.post("/lead", {...value, from : "join"});
            console.log("Success:", response.data.message);
        } catch (error :any) {
            console.error("Error:", error);
        }
        finally {
            setIsLoading(false)
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
                        <FieldSelect control={control} label="Business Category" name="business" value={businessCategories} />
                        <div className="lg:col-span-2">
                            <FieldInput control={control} label="Message" name="message" type={"textarea"} />
                        </div>

                        <div className="flex justify-end w-full lg:col-span-2">
                            <button disabled={isLoading} type="submit" className=" disabled:bg-red-950/40 disabled:cursor-wait rounded-md border-2 text-white border-white bg-primary py-3 px-5 lg:px-16 w-fit "> {isLoading ? "Sending..." : "Send Message"}</button>
                        </div>
                    </form>
                </Form>
                <div className="flex flex-col gap-5 text-white">
                    <div className="flex flex-col gap-2 justify-center">
                        <h3 className="text-xl">Email</h3>
                        <p className="text-gray-300 font-light">wow@digital-pa.com.sg</p>
                    </div>
                    {/* <div className="flex flex-col gap-2 justify-center">
                        <h3 className="text-xl">Contact</h3>
                        <p className="text-gray-300 font-light">+65 XXXXXXXXX</p>
                    </div> */}
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