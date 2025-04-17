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

export default function FieldInput({ control, name, label, type }: Props) {
    return (
        <FormField
            name={name}
            control={control}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>{label} <span>*</span></FormLabel>
                    <FormControl>
                        <div className="">
                            {
                                type === "textarea"
                                    ? <Textarea placeholder={name} {...field} />
                                    : <Input placeholder={name} type="text"
                                        {...field} />
                            }
                        </div>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )} />
    )
}  