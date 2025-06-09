import Image from "next/image";

import ImageMissionIcon01 from "@/assets/about-us/svg/missions.svg"
import ImageMissionIcon02 from "@/assets/about-us/svg/vision.svg"


const ListMission = [
    {
        title: "MISSION",
        desc: "To enable smart business owners scale businesses with AI digitally.",
        icon: ImageMissionIcon01,
    },
    {
        title: "VISION",
        desc: "To empower 1 million SMEs Across Asia Pacific to Scale Their Businesses with AI Digitally",
        icon: ImageMissionIcon02,
    },
]

export default function Missions() {
    return (

        <div className="py-14 px-12 md:px-10 flex justify-center items-center w-full">
            <div className="z-[5] lg:max-w-7xl flex flex-col lg:flex-row justify-between w-full items-center gap-y-5 gap-x-20 lg:mx-auto">
                <div className="flex flex-col gap-5 w-full lg:max-w-[20vw] justify-center items-center md:justify-start">
                    <h2 className={`uppercase !leading-tight text-2xl sm:text-4xl lg:max-w-[70vw] w-full text-primary text-center lg:text-left`}>
                        MISSION <br className="hidden md:block" /><span className="text-black">AND VISION</span>
                    </h2>
                    <p className="!leading-[150%] text-gray-700 text-center md:text-left text-sm md:text-base">We&apos;re here to rewrite the rules of business growth. Our mission and vision reflect a commitment to replacing outdated workflows with AI-driven solutions, helping SMEs across Asia Pacific scale smarter – not harder. By turning chaos into clarity, we&apos;re building a future where technology works with you, not against you.</p>
                </div>
                <div className="py-6 md:py-12 flex flex-col justify-center w-full gap-4 md:gap-8">
                    {
                        ListMission.map((mission, i) => {
                            const isRed = i % 2 === 0;
                            return (
                                <div key={`mission-${i + 1}`} className={`flex flex-row md:flex-col items-center md:items-start rounded-xl px-8 py-8 md:min-h-[210px] shadow-sm hover:shadow-md gap-y-2 gap-x-5 transition-all duration-300 ${isRed ? 'bg-red-700' : 'bg-white'}`}>
                                    <Image src={mission.icon} alt="mission-icon" width={100} height={100} className={`w-10 h-10 p-1 rounded-full ${isRed ? 'bg-white' : 'bg-red-700'}`} />
                                    <div className="flex flex-col gap-2">
                                        <h2 className={`text-lg md:text-xl !leading-[120%] font-semibold mt-2 ${isRed ? 'text-white' : 'text-red-700'}`}>{mission.title}</h2>
                                        <p className={`!leading-[150%] text-sm md:text-lg ${isRed ? 'text-white/80 md:text-white' : 'text-gray-700/80 md:text-gray-700'}`}>{mission.desc}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}