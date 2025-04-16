"use client"

import FormComponents from "@/components/layout/form/FormCategory"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { axiosInstance } from "@/lib/axios"
import { Console } from "console"
import { Dispatch, SetStateAction, useEffect, useState } from "react"

type Props = {
    children: React.ReactNode,
    refetch: Dispatch<SetStateAction<boolean>>,
    data?: any
}

export function DialogCategory({ children, refetch, data }: Props) {
    const [open, setOpen] = useState<boolean>(false)
    // console.log({data})
    return (
        <Dialog onOpenChange={setOpen} open={open}>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[40vw] gap-8">
                <DialogHeader>
                    <DialogTitle>{data ? "Edit Category" : "Add Category"}</DialogTitle>
                    <DialogDescription className="hidden">Category</DialogDescription>
                </DialogHeader>
                <FormComponents setOpen={setOpen} setRefetch={refetch} defaultValue={data}/>
            </DialogContent>
        </Dialog>
    )
}
