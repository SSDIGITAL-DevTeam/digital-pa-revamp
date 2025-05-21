import React from "react";

type Props = {
    title: string | React.ReactNode,
    subtitle?: string,
    className?: string,
    subClassName?: string
}

export default function Header({ title, subtitle, className, subClassName }: Props) {
    return (
        <div  data-scroll className="flex flex-col gap-5 items-center lg:px-0 px-5">
            <h1  data-scroll data-scroll-speed="2" className={`uppercase !leading-tight text-3xl sm:text-4xl max-w-[70vw] text-center w-full text-primary ${className}`}>{title}</h1>
            {subtitle && <p  data-scroll data-scroll-speed="2" className={`w-full max-w-3xl text-center !leading-[150%] text-gray-700 ${subClassName}`}>{subtitle}</p>}
        </div>
    )
}