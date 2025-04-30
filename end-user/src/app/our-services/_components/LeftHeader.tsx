import ConsultationButton from "@/components/partials/Button/Consultation";

export default function LeftHeader({ title, subtitle, className }: { title: string, subtitle?: string, className?: string }) {
    return (
        <div className="flex flex-col gap-5 md:gap-3 w-full px-0 md:px-10 lg:px-5">
            <div className="flex flex-col items-start lg:max-w-[50vw] w-full h-full">
                <h1 className={`uppercase !leading-tight text-3xl sm:text-4xl w-full text-primary lg:text-start text-center  ${className}`}>{title}</h1>
            </div>
            <div className="flex md:flex-row gap-5 flex-col items-center md:items-start md:justify-between w-full">
                <p className="!leading-[150%] text-left md:max-w-[40vw] lg:max-w-[45vw] text-gray-700">{subtitle}</p>
                <ConsultationButton />
            </div>
        </div>
    )
}