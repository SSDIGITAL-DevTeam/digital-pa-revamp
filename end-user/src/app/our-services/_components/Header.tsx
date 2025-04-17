import React from "react";

export default function Header({ title, subtitle, className }: { title: string| React.ReactNode, subtitle?: string , className?: string }) {
    return (
        <div className="flex flex-col gap-5 items-center lg:px-0 px-5">
            <h1 className={`uppercase !leading-tight text-3xl sm:text-4xl max-w-[70vw] text-center w-full text-primary ${className}`}>{title}</h1>
            {subtitle && <p className="w-full max-w-3xl text-center !leading-[150%]">{subtitle}</p>}
        </div>
    )
}