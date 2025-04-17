import { PhoneInput } from "react-international-phone";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Control } from "react-hook-form";

type Props = {
    control: Control<any>,
    name: string,
    label: string,
    type?: "textarea" | ""
}

export default function FieldPhoneInput({ control, name, label, type }: Props) {
    return (
        <FormField
            name={name}
            control={control}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>{label} <span>*</span></FormLabel>
                    <FormControl>
                        <PhoneInput
                            defaultCountry='sg'
                            value={field.value}
                            onChange={field.onChange}
                            inputClassName="!flex !items-center !text-base !h-12 !rounded-e-md w-full bg-blue-900"
                            style={
                                {
                                    '--react-international-phone-flag-width': '24px',
                                    '--react-international-phone-flag-height': '24px',
                                    '--react-international-phone-height': '48px',
                                } as React.CSSProperties
                            }
                        />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )} />
    )
}
// <div className="flex flex-col gap-1 w-full">
//     <label htmlFor="phone" className="text-white">Phone Number <span>*</span></label>
//     <PhoneInput
//         defaultCountry='sg'
//         value={getValues("phone")}
//         onChange={(value) => setValue("phone", value, { shouldValidate: true })}
//         inputClassName="!flex !items-center !text-base !h-12 !rounded-e-md w-full bg-blue-900"
//         style={
//             {
//                 '--react-international-phone-flag-width': '24px',
//                 '--react-international-phone-flag-height': '24px',
//                 '--react-international-phone-height': '48px',
//             } as React.CSSProperties
//         }
//     />

// </div>
// )
// }