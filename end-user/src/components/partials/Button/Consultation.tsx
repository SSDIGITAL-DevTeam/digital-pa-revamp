import { ArrowRightIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

export default function ConsultationButton({ color, size }: { color?: string, size?: "small" | "large" }) {
    return (
        <Link href={"#consultation"}>
            <button className={`mt-0 w-fit text-center font-semibold rounded-lg flex gap-2 items-center bg-primary text-white py-3 px-6 md:py-4 md:px-8
                ${color == "white"
                    && "border-[2px] border-white py-3 px-8"}  
                ${size == "small"
                    && "text-xs lg:text-base"}  
               `}
            >
                Free Consultation <ArrowRightIcon className="h-5 w-5" />
            </button>
        </Link>
    )
}