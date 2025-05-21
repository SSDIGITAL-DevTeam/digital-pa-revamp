import { ArrowRightIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

export default function ConsultationButton({ color, size, text }: { color?: string, size?: "small" | "large", text?: string }) {
    return (
        <Link href={"#consultation"}>
            <button className={`mt-0 w-fit text-center font-semibold rounded-2xl flex gap-2 items-center bg-primary text-white py-3 px-6 md:py-4
                ${color == "white"
                    && "border-[2px] border-white py-3 px-8"}  
                ${size == "small"
                    ? "text-xs lg:text-sm md:px-4" 
                    : "text-sm lg:text-base md:px-14"
                }  
               `}
            >
                {text ? text : "Free Consultation"} <ArrowRightIcon className="h-5 w-5" />
            </button>
        </Link>
    )
}