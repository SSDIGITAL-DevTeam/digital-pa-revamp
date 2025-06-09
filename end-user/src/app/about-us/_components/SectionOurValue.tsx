import { values } from "@/constants/about-us/solution";
import ImageVision from "@/assets/about-us/webp/asset-values.webp"
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

export default function SectionOurValue() {
    return (
        <div className="lg:max-w-7xl flex flex-col justify-center items-center gap-2 lg:mx-auto">
            
            <div className="flex flex-col lg:flex-row gap-x-20 gap-y-10 w-full justify-between items-center py-12">
                <div className="flex flex-col gap-5 w-full lg:max-w-[28vw]">
                    <h2 className={`uppercase !leading-tight text-2xl sm:text-4xl lg:max-w-[70vw] w-full text-black text-center lg:text-left`}>
                        VALUES
                    </h2>
                    <p className="!leading-[150%] text-gray-700 text-sm md:text-base text-center lg:text-left">From fast to last — Think Simple, Scale with AI, Compound Successes with System, Forged with Standards, and bring out the Stewardship in you. Each layer reinforces the next, turning smart actions into long-term impact.</p>
                </div>
                <Image src={ImageVision} alt="mission-icon" width={1920} height={1080} quality={100} priority className={`object-contain md:min-h-[350px] h-fit w-fit`} />
            </div>

            <div className='py-6 md:py-12'>
                <div className="flex flex-wrap gap-6 w-full justify-center items-center">
                    {values.map((value, i) => {
                        const isLast = i === values.length - 1
                        return(
                        <div
                            key={`grid-${i + 1}`}
                            className={`w-full lg:max-w-[400px] rounded-xl items-start h-full py-10 lg:pt-14 min-h-[330px] lg:min-h-[340px]  shadow-md hover:shadow-lg duration-300 transition-all flex flex-col gap-2 p-10 relative overflow-hidden ${isLast ? 'bg-red-100' : 'bg-white'}`}>
                            <h2 className={`text-primary text-xl lg:text-2xl text-left`}>
                                {value.title}
                            </h2>
                            <p className={`!leading-[150%] ${isLast ? "text-primary" : "text-gray-700"} text-xs md:text-sm`}>
                               <span className="font-bold">{value.desc1}{" "}</span>{value.desc2}
                            </p>
                            <Image src={value.icon} alt="mission-icon" width={180} height={180} className={`bottom-0 right-0 absolute`} />
                        </div>
                    )})}
                </div>
            </div>
            <div className="w-full flex items-center justify-center">
                <Link href={"/contact-us"}>
                    <button className={`mt-0 w-fit text-center font-semibold  rounded-lg flex gap-2 items-center bg-primary text-white py-3 px-6 md:py-4 md:px-8`}
                    >
                        Free Consultation <ArrowRightIcon className="h-5 w-5" />
                    </button>
                </Link>
            </div>
        </div>
    )
}