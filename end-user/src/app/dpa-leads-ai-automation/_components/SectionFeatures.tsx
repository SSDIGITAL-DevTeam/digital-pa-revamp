import Image from "next/image"
import ConsultationButton from "@/components/partials/Button/Consultation"
import ImageFeatures01 from "@/assets/services/webp/landing-page-ai/image-features-01.webp"
import ImageFeatures02 from "@/assets/services/webp/landing-page-ai/image-features-02.webp"
import ImageFeatures03 from "@/assets/services/webp/landing-page-ai/image-features-03.webp"
import ImageFeatures04 from "@/assets/services/webp/landing-page-ai/image-features-04.webp"
import ImageFeatures05 from "@/assets/services/webp/landing-page-ai/image-features-05.webp"


const ListFeatures = [
    {
        title: "Smart CRM",
        desc: "Track, segment, and manage all leads in one place",
        image: ImageFeatures01
    },
    {
        title: "WhatsApp + Email + SMS Automation",
        desc: "Track, segment, and manage all leads in one place",
        image: ImageFeatures02
    },
    {
        title: "Appointment Scheduler",
        desc: "Booking forms, reminders, confirmations — all automated",
        image: ImageFeatures03
    },
    {
        title: "AI Lead Nurturing Bot",
        desc: "Handles FAQs, sets meetings, qualifies leads",
        image: ImageFeatures04
    },
    {
        title: "Live Dashboard",
        desc: "Monitor team, campaigns, lead status — real-time",
        image: ImageFeatures05
    },
]

export default function SectionFeatures() {
    return ListFeatures.map((d, i) => {
        const isEven = i % 2 === 0
        return (
            <div key={`feature-${i}`} className={`w-full ${isEven ? 'bg-white' : 'bg-[#F5F5F5]'}`}>
                <div className={`lg:max-w-7xl lg:mx-auto w-full gap-8 md:gap-0 md:py-32 py-12 flex flex-col justify-between items-center px-10 md:px-20 lg:px-5 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="flex flex-col items-center md:items-start gap-3 md:gap-y-5 w-full md:w-[40%]">
                        <h2 className="text-center md:text-left text-2xl md:text-4xl text-primary !leading-[130%]">{d.title}</h2>
                        <p className="text-gray-700 text-center md:text-left text-sm md:text-lg !leading-[130%]">{d.desc}</p>
                        <div className='hidden md:flex md:justify-start w-full'>
                            <ConsultationButton text='See It in Action – Free Demo' className="md:px-5" />
                        </div>
                    </div>
                    <div className="w-full md:w-[55%]">
                        <Image
                            src={d.image}
                            alt={d.title}
                            priority
                            className="object-contain"
                        />
                    </div>
                    <div className='md:hidden flex justify-center w-full'>
                        <ConsultationButton text='See It in Action – Free Demo' className="md:px-5" />
                    </div>
                </div>
            </div>
        )
    })
}
