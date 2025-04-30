// 'use client'

// import CustomPhoneInput from '@/components/partials/PhoneInput/CustomPhoneInput'
// import { failToast, successToast } from '@/config/toastConfig'
// import { axiosInstance } from '@/lib/axios'
// import { Button, Input, Textarea, Select, SelectItem } from '@nextui-org/react'
// import { FormEvent, JSX, useState } from 'react'
// import { toast } from 'sonner'

// const businessCategories = [
//     'Automotive',
//     'Business Support & Supplies',
//     'Computers & Electronics',
//     'Construction & Contractors',
//     'Education',
//     'Entertainment',
//     'Food & Dining',
//     'Health & Medicine',
//     'Home & Garden',
//     'Legal & Financial',
//     'Manufacturing, Wholesale, Distribution',
//     'Merchants (Retail)',
//     'Miscellaneous',
//     'Personal Care & Services',
//     'Real Estate',
//     'Travel & Transportation',
// ]

// type ErrorMessage = {
//     message: string
//     errors: {
//         name: string[]
//         email: string[]
//         phone: string[]
//         business_category: string[]
//         message: string[]
//     }
// }

// export default function ContactForm(): JSX.Element {
//     // states
//     const [isSending, setIsSending] = useState<boolean>(false)
//     const [errorMessages, setErrorMessages] = useState<ErrorMessage>(
//         {} as ErrorMessage,
//     )
//     const [phone, setPhone] = useState<string>('+65')

//     // for handling form contact
//     async function handleFormContact(e: FormEvent<HTMLFormElement>) {
//         e.preventDefault()

//         setIsSending(true)

//         const form = e.currentTarget as HTMLFormElement & {
//             name: HTMLInputElement
//             email: HTMLInputElement
//             business_category: HTMLSelectElement
//             message: HTMLTextAreaElement
//         }

//         const formData = {
//             name: form.name.value,
//             email: form.email.value,
//             phone: `${phone.replaceAll('+', '')}`,
//             business: form.business_category.value,
//             message: form.message.value,
//             from : "contact"
//         }
//         try {
//             const res = await axiosInstance.post("/lead", formData);

//             if (res.status !== 201) {
//                 setErrorMessages(res.data.error as ErrorMessage)

//                 toast.error('Opps, Something went wrong.', failToast)

//                 return
//             }

//             const formReset = e.target as HTMLFormElement
//             formReset.reset()

//             setPhone('+65')
//             setErrorMessages({} as ErrorMessage)

//             toast.success(
//                 'Your message has been sent.',
//                 successToast,
//             )
//         } catch (error) {
//             setErrorMessages(error as ErrorMessage)
//         } finally {
//             setIsSending(false)
//         }
//     }

//     return (
//         <form onSubmit={handleFormContact}>
//             <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8'>
//                 <Input
//                     classNames={{
//                         inputWrapper: 'border shadow-none',
//                     }}
//                     name='name'
//                     variant='bordered'
//                     radius='sm'
//                     size='lg'
//                     placeholder='Your name...'
//                     label='Name'
//                     labelPlacement='outside'
//                     isRequired
//                     isInvalid={!!errorMessages?.errors?.name}
//                     errorMessage={
//                         errorMessages?.errors?.name &&
//                         errorMessages.errors.name[0]
//                     }
//                 />

//                 <Input
//                     classNames={{
//                         inputWrapper: 'border shadow-none',
//                     }}
//                     name='email'
//                     variant='bordered'
//                     radius='sm'
//                     type='email'
//                     size='lg'
//                     placeholder='Your email...'
//                     label='Email Address'
//                     labelPlacement='outside'
//                     isRequired
//                     isInvalid={!!errorMessages?.errors?.email}
//                     errorMessage={
//                         errorMessages?.errors?.email &&
//                         errorMessages.errors.email[0]
//                     }
//                 />

//                 <div className='space-y-1.5'>
//                     <label
//                         className={`${errorMessages?.errors?.phone ? 'text-[#F31663]' : ''}`}
//                         htmlFor='phone'
//                     >
//                         Phone Number
//                     </label>

//                     <CustomPhoneInput
//                         phone={phone}
//                         setPhone={setPhone}
//                         error={
//                             errorMessages?.errors?.phone &&
//                             errorMessages.errors.phone[0]
//                         }
//                     />
//                 </div>

//                 <Select
//                     classNames={{
//                         trigger: 'border shadow-none',
//                     }}
//                     name='business_category'
//                     label='Business Category'
//                     labelPlacement='outside'
//                     placeholder='Your business...'
//                     variant='bordered'
//                     size='lg'
//                     isRequired
//                     radius='sm'
//                     isInvalid={!!errorMessages?.errors?.business_category}
//                     errorMessage={
//                         errorMessages?.errors?.business_category &&
//                         errorMessages.errors.business_category[0]
//                     }
//                 >
//                     {businessCategories.map((item: string) => (
//                         <SelectItem key={item} value={item}>
//                             {item}
//                         </SelectItem>
//                     ))}
//                 </Select>

//                 <div className='space-y-1.5 md:col-span-2'>
//                     <label htmlFor='message'>Message</label>

//                     <Textarea
//                         classNames={{
//                             inputWrapper: 'border shadow-none',
//                         }}
//                         name='message'
//                         variant='bordered'
//                         radius='sm'
//                         isRequired
//                         size='lg'
//                         placeholder='Your message...'
//                         isInvalid={!!errorMessages?.errors?.message}
//                         errorMessage={
//                             errorMessages?.errors?.message &&
//                             errorMessages.errors.message[0]
//                         }
//                     />
//                 </div>
//             </div>

//             <Button
//                 className='mt-8 font-semibold uppercase'
//                 type='submit'
//                 color='primary'
//                 size='lg'
//                 radius='sm'
//                 isLoading={isSending}
//             >
//                 Submit
//             </Button>
//         </form>
//     )
// }

"use client"
// import Header from "@/app/our-services/_components/Header";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import FieldInput from "@/components/partials/Field/FieldInput";
import FieldPhoneInput from "@/components/partials/Field/FieldPhoneInput";
import { axiosInstance } from "@/lib/axios";
import FieldSelect from "@/components/partials/Field/FieldDropdown";
import { useState } from "react";
import { toast } from "sonner";
import { failToast, successToast } from "@/config/toastConfig";

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
    // phone: z.string().nonempty().min(4, "Please enter a valid phone number"),
    companyName: z.string().nonempty(),
    companyWebsite: z.string().nonempty().startsWith("https://", { message: "Please enter a valid URL" }),
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
            const response = await axiosInstance.post("/lead", { ...value, phone: value.phone.replaceAll('+', ''), from: "contact" });
            console.log("Success:", response.data.message);
            toast.success(
                'Your message has been sent.',
                successToast,
            )
        } catch (error: any) {
            console.error("Error:", error);
            toast.error(error.response.data.error || "Message not sent", failToast)
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
                    <FieldInput control={control} label="Company Website: *" name="companyWebsite" placeholder="e.g.https://www.yourcompany.com" />
                    <FieldSelect control={control} label="Business Industry: *" name="business" value={businessCategories} placeholder="Your business industry" />
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
