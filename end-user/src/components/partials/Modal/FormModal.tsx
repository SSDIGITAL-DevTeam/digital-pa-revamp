"use client"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Form } from "@/components/ui/form"
import FieldInput from "../Field/FieldInput"
import FieldPhoneInput from "../Field/FieldPhoneInput"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { axiosInstance } from "@/lib/axios"
import { toast } from "sonner"
import { failToast, successToast } from "@/config/toastConfig"
import { useRouter } from "next/navigation"
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3' //update

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

const waSVG =
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 "
    viewBox="0 0 32 32"
    fill="#FFFFFF"
  >
    <path d="M16.003 2.998c-7.285 0-13.19 5.905-13.19 13.19 0 2.325.607 4.597 1.76 6.592L2 30l7.385-2.558a13.135 13.135 0 006.618 1.73h.001c7.283 0 13.188-5.905 13.188-13.19 0-3.522-1.372-6.833-3.863-9.326A13.153 13.153 0 0016.003 2.998zm.001 23.961h-.001a11.13 11.13 0 01-5.67-1.557l-.406-.24-4.381 1.518 1.49-4.267-.266-.438a11.118 11.118 0 01-1.703-5.88c0-6.14 5-11.14 11.191-11.14 2.98 0 5.779 1.16 7.88 3.262a11.064 11.064 0 013.262 7.878c0 6.14-5.002 11.144-11.206 11.144zm6.126-8.387c-.336-.168-1.996-.984-2.307-1.096-.31-.112-.536-.168-.762.169s-.874 1.096-1.072 1.32c-.197.224-.395.252-.731.084-.336-.169-1.419-.522-2.703-1.667-1-0.893-1.674-1.994-1.87-2.33-.197-.336-.021-.518.148-.685.152-.151.336-.393.504-.589.168-.196.224-.337.336-.561.112-.224.056-.42-.028-.589-.084-.168-.762-1.841-1.043-2.52-.276-.665-.559-.576-.762-.586l-.649-.012c-.224 0-.589.084-.896.42s-1.176 1.148-1.176 2.793 1.206 3.239 1.374 3.463c.168.224 2.373 3.628 5.745 5.086.803.346 1.427.553 1.914.707.805.256 1.539.22 2.118.133.646-.096 1.996-.816 2.278-1.603.28-.785.28-1.457.196-1.603-.084-.14-.308-.224-.644-.393z" />
  </svg>

export function FormModal({ children }: { children: React.ReactNode }) {

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
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

  const { executeRecaptcha } = useGoogleReCaptcha() //update

  const { handleSubmit, control, reset } = form

  function textWhatsapp({ name, email, phone, companyName, companyWebsite, business, message, from }: Record<string, string>): string {
    const text = `*New Lead Notification*
    \n\nHi Digital PA Singapore,
    \n\nI am submitting my details for a potential collaboration. Please find my information below:
    \n\n*Name:* ${name}
    \n*Email:* ${email}
    \n*Phone:* ${phone}
    \n*Company Name:* ${companyName}
    \n*Company Website:* ${companyWebsite}
    \n*Business Industry:* ${business}
    \n*Message:* ${message}
    \n*Source:* ${from}
    \n\nLooking forward to hearing from you soon.`;

    return encodeURIComponent(text);
  }

  const handleInput = handleSubmit(async (value) => {
    setIsLoading(true)
    try {
      //  Verifikasi token reCAPTCHA
      if (!executeRecaptcha) {
        throw new Error('reCAPTCHA is not available')
      }
      const token = await executeRecaptcha('wa-submit') //update
      await axiosInstance.post("/lead",
        {
          ...value,
          phone: value.phone.replaceAll('+', ''),
          from: "Landing Page : WA Button",
          token,
        });

      router.push("/wa-success")
      toast.success(
        'Your message has been sent.',
        successToast,
      )
      const waNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.toString() || ""
      const message = textWhatsapp({ ...value, phone: value.phone.replaceAll('+', ''), from: "whatsapp" });
      const url = `https://api.whatsapp.com/send/?phone=${encodeURIComponent(waNumber)}&text=${message}&type=phone_number&app_absent=0`;
      window.open(url, '_blank');

    } catch (error: any) {
      console.error("Error:", error);
      toast.error(error.response.data.error || "Message not sent", failToast)
    }
    finally {
      setIsOpen(false)
      setIsLoading(false)
      reset()
    }
  })

  return (
    <Dialog onOpenChange={setIsOpen} open={isOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-[90%] md:max-w-[70%] lg:max-w-[50%] max-h-[90vh] overflow-y-auto rounded-xl">
        <DialogHeader>
          <DialogTitle>Fill Out This Form to Continue to WhatsApp</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-2 justify-center items-center">
          <div className="w-full pt-8 md:pt-0 px-5">
            <Form {...form}>
              <form onSubmit={handleInput} className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                <FieldInput for="form" control={control} label="Name: *" name="name" placeholder="Enter your name" />
                <FieldInput for="form" control={control} label="Email: *" name="email" placeholder="Enter your email address" />
                <FieldPhoneInput for="form" control={control} label="Contact No: *" name="phone" placeholder="Enter your phone number" />
                <FieldInput for="form" control={control} label="Company Name: *" name="companyName" placeholder="Enter your company’s name" />
                <FieldInput for="form" control={control} label="Company Website:" name="companyWebsite" placeholder="e.g.https://www.yourcompany.com" />
                <FieldInput for="form" control={control} label="Business Industry: *" name="business" placeholder="Your business industry" />
                <div className="md:col-span-2">
                  <FieldInput for="form" control={control} label="Remarks / Special Requirements" name="message" type={"textarea"} placeholder="Tell us anything specific you need help with" />
                </div>

                <div className="flex justify-end w-full md:col-span-2">
                  <button disabled={isLoading} type="submit" className=" disabled:bg-green-950/40 text-sm lg:text-base disabled:cursor-wait rounded-md border-2 text-white border-white hover:bg-green-800 py-3 px-5 lg:px-6 w-fit bg-green-600 duration-200 transition-all flex items-center gap-2">{waSVG} {isLoading ? "Redirecting..." : "Continue to WhatsApp"}</button>
                </div>
              </form>
            </Form>
          </div>
        </div >
      </DialogContent>
    </Dialog>
  )
}
