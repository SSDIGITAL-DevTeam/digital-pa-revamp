import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css"

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Control } from "react-hook-form";

type Props = {
    control: Control<any>,
    name: string,
    label: string
}

export default function FieldPhoneInput({ control, name, label }: Props) {
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

                            inputClassName="!flex !items-center !text-base !h-12 !rounded-e-md w-full"
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