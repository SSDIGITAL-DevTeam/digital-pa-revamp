"use client";
import { toast } from "sonner"

export const successToast = (message: React.ReactNode, description? : React.ReactNode, action? : () => void) => {
    toast(message, {
        description,
      }, )
}
export const failedToast = (message: React.ReactNode, description? : React.ReactNode, action? : () => void) => {
    toast(message, {
        description,
      })
}