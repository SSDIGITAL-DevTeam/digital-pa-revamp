import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Control } from "react-hook-form";

type Props = {
    control: Control<any>,
    name: string,
    label: string,
    type?: "textarea" | ""
    placeholder?: string
}

export default function FieldInput({ control, name, label, type, placeholder }: Props) {
    return (
        <FormField
            name={name}
            control={control}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <div className="">
                            {
                                type === "textarea"
                                    ? <Textarea placeholder={placeholder || name} {...field} />
                                    : <Input placeholder={placeholder || name} type="text"
                                        {...field} />
                            }
                        </div>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )} />
    )
}  