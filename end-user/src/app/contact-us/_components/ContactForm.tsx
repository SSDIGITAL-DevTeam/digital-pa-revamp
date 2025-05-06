"use client"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import FieldInput from "@/components/partials/Field/FieldInput";
import FieldPhoneInput from "@/components/partials/Field/FieldPhoneInput";
import { axiosInstance } from "@/lib/axios";
import { useState } from "react";
import { toast } from "sonner";
import { failToast, successToast } from "@/config/toastConfig";
import { useRouter } from "next/navigation";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

const formData = z.object({
    name: z.string().nonempty(),
    email: z.string().email().nonempty(),
    companyName: z.string().nonempty(),
    companyWebsite: z.string().optional(),
    business: z.string().nonempty(),
    message: z.string(),
    phone: z.string().nonempty().refine((val) => {
        return val.length > 3 && /\d{4,}/.test(val.replace(/^\+\d{1,3}/, ""));
    }, {
        message: "Please enter a valid phone number",
    }),
})

type FormData = z.infer<typeof formData>

export default function ContactForm() {
    const router = useRouter()
    const { executeRecaptcha } = useGoogleReCaptcha()
    const [isLoading, setIsLoading] = useState(false);
    const form = useForm<FormData>({
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            companyName: "",
            companyWebsite: "",
            business: "",
            message: "",
        },
        resolver: zodResolver(formData),
    });
    const { handleSubmit, control, reset } = form

    const handleInput = handleSubmit(async (value) => {
        setIsLoading(true)
        try {
            if (!executeRecaptcha) {
                throw new Error('reCAPTCHA is not available')
            }
            const token = await executeRecaptcha('contact-submit')
            const response = await axiosInstance.post("/lead",
                {
                    ...value,
                    phone: value.phone.replaceAll('+', ''),
                    from: "Contact Us",
                    token
                });
            console.log("Success:", response.data.message);
            toast.success(
                'Your message has been sent.',
                successToast,
            )
            router.push("/success");
        } catch (error: any) {
            console.error("Error:", error);
            toast.error(error?.message || error?.response?.data.error || "Message not sent", failToast)
        }
        finally {
            setIsLoading(false)
            reset()
        }
    })

    return (
        <div id="consultation" className="lg:max-w-5xl w-full flex flex-col gap-2 justify-center items-center lg:gap-10 lg:mx-auto px-5">
            {/* <div className="w-full pt-8 md:pt-0 px-5 sm:px-10 md:px-20 lg:px-0"> */}
            <Form {...form}>
                <form onSubmit={handleInput} className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <FieldInput control={control} label="Name: *" name="name" placeholder="Enter your name" />
                    <FieldInput control={control} label="Email: *" name="email" placeholder="Enter your email address" />
                    <FieldPhoneInput control={control} label="Contact No: *" name="phone" placeholder="Enter your phone number" />
                    <FieldInput control={control} label="Company Name: *" name="companyName" placeholder="Enter your company’s name" />
                    <FieldInput control={control} label="Company Website:" name="companyWebsite" placeholder="e.g.https://www.yourcompany.com" />
                    <FieldInput control={control} label="Business Industry: *" name="business" placeholder="Your business industry" />
                    <div className="lg:col-span-2">
                        <FieldInput control={control} label="Remarks / Special Requirements" name="message" type={"textarea"} placeholder="Tell us anything specific you need help with" />
                    </div>

                    <div className="flex justify-end w-full lg:col-span-2">
                        <button disabled={isLoading} type="submit" className=" disabled:bg-red-950 text-sm md:text-base disabled:cursor-wait rounded-md border-2 text-white border-white hover:bg-red-800 py-3 lg:py-4 px-5 lg:px-12 w-fit bg-red-500 duration-200 transition-all"> {isLoading ? "Sending..." : "Submit"}</button>
                    </div>
                </form>
            </Form>
            {/* </div > */}
        </div>
    )
}
