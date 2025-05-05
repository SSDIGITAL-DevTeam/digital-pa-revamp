"use client"
import {
  Dialog,
  DialogContent,
  DialogDescription,
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

const formData = z.object({
  name: z.string().nonempty(),
  email: z.string().email().nonempty(),
  companyName: z.string().nonempty(),
  companyWebsite: z.string().nonempty().min(5, "Please enter a valid website"),
  business: z.string().nonempty(),
  message: z.string(),
  phone: z.string().nonempty().refine((val) => {
    return val.length > 3 && /\d{4,}/.test(val.replace(/^\+\d{1,3}/, ""));
  }, {
    message: "Please enter a valid phone number",
  }),
})

type FormData = z.infer<typeof formData>

export function FormModal({ children }: { children: React.ReactNode }) {
  // const basePathname = usePathname();

  // const lastSegment = basePathname
  //   .split('/')
  //   .filter(Boolean)
  //   .pop() || '';

  // const pathname = lastSegment
  //   .split('-')
  //   .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  //   .join(' ');

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
  const { handleSubmit, control, reset } = form

  function textWhatsapp({ name, email, phone, companyName, companyWebsite, business, message, from }: Record<string, string>): string {
    const text = `*New Lead Notification*\n\nHi Digital PA Singapore,\n\nI am submitting my details for a potential collaboration. Please find my information below:\n\n*Name:* ${name}\n*Email:* ${email}\n*Phone:* ${phone}\n*Company Name:* ${companyName}\n*Company Website:* ${companyWebsite}\n*Business Industry:* ${business}\n*Message:* ${message}\n*Source:* ${from}\n\nLooking forward to hearing from you soon.\n\nRegards,\n*[ ${name} ]*`;

    return encodeURIComponent(text);
  }
  
  const handleInput = handleSubmit(async (value) => {
    setIsLoading(true)
    try {
      await axiosInstance.post("/lead", { ...value, phone: value.phone.replaceAll('+', ''), from: "whatsapp" });

      const waNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.toString() || ""
      const message = textWhatsapp({...value, phone: value.phone.replaceAll('+', ''), from: "whatsapp"});
      const url = `https://api.whatsapp.com/send/?phone=${encodeURIComponent(waNumber)}&text=${message}&type=phone_number&app_absent=0`;
      window.open(url, '_blank');
      
      toast.success(
        'Your message has been sent.',
        successToast,
      )

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
          <DialogTitle>Start Your Digital Journey</DialogTitle>
          <DialogDescription>
            Enter your information and we’ll schedule a free consultation with you.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-2 justify-center items-center">
          <div className="w-full pt-8 md:pt-0 px-5">
            <Form {...form}>
              <form onSubmit={handleInput} className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                <FieldInput for="form" control={control} label="Name: *" name="name" placeholder="Enter your name" />
                <FieldInput for="form" control={control} label="Email: *" name="email" placeholder="Enter your email address" />
                <FieldPhoneInput for="form" control={control} label="Contact No: *" name="phone" placeholder="Enter your phone number" />
                <FieldInput for="form" control={control} label="Company Name: *" name="companyName" placeholder="Enter your company’s name" />
                <FieldInput for="form" control={control} label="Company Website: *" name="companyWebsite" placeholder="e.g.https://www.yourcompany.com" />
                <FieldInput for="form" control={control} label="Business Industry: *" name="business" placeholder="Your business industry" />
                <div className="md:col-span-2">
                  <FieldInput for="form" control={control} label="Remarks / Special Requirements" name="message" type={"textarea"} placeholder="Tell us anything specific you need help with" />
                </div>

                <div className="flex justify-end w-full md:col-span-2">
                  <button disabled={isLoading} type="submit" className=" disabled:bg-red-950/40 text-sm lg:text-base disabled:cursor-wait rounded-md border-2 text-white border-white hover:bg-red-800 py-3 px-5 lg:px-6 w-fit bg-red-500 duration-200 transition-all"> {isLoading ? "Sending..." : "Request Consultation"}</button>
                </div>
              </form>
            </Form>
          </div>
        </div >
      </DialogContent>
    </Dialog>
  )
}
