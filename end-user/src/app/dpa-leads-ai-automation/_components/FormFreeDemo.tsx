"use client"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { axiosInstance } from "@/lib/axios";
import { useState } from "react";
import { toast } from "sonner";
import { failToast, successToast } from "@/config/toastConfig";
import { useRouter } from "next/navigation";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import FieldInput from "@/components/partials/Field/FieldInput";
import FieldPhoneInput from "@/components/partials/Field/FieldPhoneInput";
import FieldRadio from "@/components/partials/Field/FieldRadio";

const EnumSizeCompany = [
    "1-19",
    "20-49",
    "50-499",
    "500+",
] as const

const ListSizeCompany = [
    "1-19",
    "20-49",
    "50-499",
    "500+",
]

const formData = z.object({
    name: z.string().nonempty(),
    email: z.string().email().nonempty(),
    companyName: z.string().nonempty(),
    industry: z.string().nonempty(),
    size: z.enum([...EnumSizeCompany]),
    phone: z.string().nonempty().refine((val) => {
        return val.length > 3 && /\d{4,}/.test(val.replace(/^\+\d{1,3}/, ""));
    }, {
        message: "Please enter a valid phone number",
    }),
})

type FormData = z.infer<typeof formData>

export default function FormFreeDemo() {
    const router = useRouter()
    const { executeRecaptcha } = useGoogleReCaptcha()
    const [isLoading, setIsLoading] = useState(false);
    const form = useForm<FormData>({
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            companyName: "",
            industry: "",
            size: undefined,
        },
        resolver: zodResolver(formData),
    });
    const { handleSubmit, control, reset } = form

    // const handleInputSpreadsheet = handleSubmit(async (value) => {
    //     setIsLoading(true)
    //     const dataForSpreadsheet = {
    //         "sheetName": "AI Landing Page",
    //         "Name": value.name,
    //         "Email Address": value.email,
    //         "Phone Number": value.phone.replace('+', ''),
    //         "Company Name": value.companyName,
    //         "Industry": value.industry,
    //         "Company Size": value.size,
    //     }
    //     const web = (process.env.NEXT_PUBLIC_SPREADSHEET_API)?.toString() || ""

    //     try {
    //         const response = await axios.post(web, new URLSearchParams(dataForSpreadsheet), {
    //             headers: {
    //                 'Content-Type': 'application/x-www-form-urlencoded'
    //             }
    //         });
    //         console.log(`Process is ${response.data.result}, to add row ${response.data.row} in sheet ${response.data.data}`);
    //         toast.success(
    //             'Your message has been sent.',
    //             successToast,
    //         )
    //         router.push("/thanks/free-demo");
    //     } catch (error: any) {
    //         console.error("Error:", error);
    //         toast.error(
    //             error?.message || error?.response?.data.error || "Message not sent",
    //             failToast
    //         )
    //     }
    //     finally {
    //         setIsLoading(false)
    //         reset()
    //     }
    // })

    const handleInput = handleSubmit(async (value) => {
        setIsLoading(true)
        if (!executeRecaptcha) {
            throw new Error('reCAPTCHA is not available')
        }
        const token = await executeRecaptcha('freeDemo')

        const dataForDatabase = {
            "name": value.name,
            "email": value.email,
            "phoneNumber": value.phone.replace('+', ''),
            "companyName": value.companyName,
            "industry": value.industry,
            "companySize": value.size,
            "token": token
        }

        try {
            const response = await axiosInstance.post("/free-demo", dataForDatabase);
            if (response.status === 201) {
                toast.success(
                    'Your message has been sent.',
                    successToast,
                )
                router.push("/thanks/free-demo");
            }
        } catch (error: any) {
            console.error("Error:", error);
            toast.error(
                error?.message || error?.response?.data.error || "Message not sent",
                failToast
            )
        }
        finally {
            setIsLoading(false)
            reset()
        }
    })

    return (
        <div id="consultation" className="scroll-mt-[300px] md:scroll-mt-[280px] lg:max-w-5xl w-full flex flex-col gap-2 justify-center items-center lg:gap-10 lg:mx-auto md:px-5">
            <Form {...form}>
                <form onSubmit={handleInput} className="w-full grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-6">
                    <FieldInput control={control} label="Name *" name="name" placeholder="Enter your name" />
                    <FieldInput control={control} label="Email Address *" name="email" placeholder="Enter your email address" />
                    <FieldPhoneInput control={control} label="Phone Number *" name="phone" placeholder="Enter your phone number" />
                    <FieldInput control={control} label="Company Name *" name="companyName" placeholder="Enter your company’s name" />
                    <FieldInput control={control} label="Industry *" name="industry" placeholder="Enter your industry" />
                    <FieldRadio control={control} name="size" label="Company Size *" data={ListSizeCompany} />
                    <div className="flex justify-center w-full lg:col-span-2 mt-8 md:mt-5">
                        <button disabled={isLoading} type="submit" className=" disabled:bg-red-950 text-sm md:text-lg disabled:cursor-wait rounded-lg font-bold border-2 text-white border-white hover:bg-red-800 py-3 lg:py-5 px-5 lg:px-12 w-fit bg-primary duration-200 transition-all"> {isLoading ? "Sending..." : "Submit & Book Demo"}</button>
                    </div>
                </form>
            </Form>
        </div>
    )
}
