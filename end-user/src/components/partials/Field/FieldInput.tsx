import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Control } from "react-hook-form";

type Props = {
    control: Control<any>,
    name: string,
    label: string,
    type?: "textarea" | ""
    placeholder?: string,
    for?: string
}

export default function FieldInput({ control, name, label, type, placeholder, for: id }: Props) {
    return (
        <FormField
            name={name}
            control={control}
            render={({ field }) => (
                <FormItem>
                    <FormLabel className={id && "text-gray-700"}>{label}</FormLabel>
                    <FormControl>
                        <div className="">
                            {
                                type === "textarea"
                                    ? <Textarea placeholder={placeholder || name} {...field} className={id ? "min-h-[100px]" : "min-h-[200px]"}/>
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