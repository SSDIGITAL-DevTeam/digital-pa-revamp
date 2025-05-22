import { Props } from "@/constants/services/type"
import Image from "next/image"

export default function GridSection({ list, height, width, side = "center", leading }: Props) {
    return (
        <div className="flex flex-wrap gap-6 w-full justify-center items-center">
            {list.map((d, i) => (
                <div
                    key={`grid-${i + 1}`}
                    className={`w-full ${width ?? "lg:max-w-[400px]"} rounded-xl justify-center 
                            ${side === "left" ? "items-start" : "items-center"} h-full 
                            py-10 lg:py-0 ${height ?? "lg:min-h-[36vh]"} 
                            bg-white border-gray-200 border-[1px] shadow-md 
                            hover:shadow-lg duration-300 transition-all flex flex-col 
                            gap-2 md:gap-4 p-10`}
                >
                    {d.icons && (
                        <Image
                            src={d.icons}
                            alt="icon"
                            width={1000}
                            height={1000}
                            className="object-contain w-16 h-16 lg:w-[72px] lg:h-[72px]"
                        />
                    )}

                    <h2 className={`text-primary text-3xl lg:text-6xl ${side === "left" ? "text-left" : "text-center"}`}>
                        {!d.icons && "0" + (i + 1)}
                        <span className={`block text-lg lg:text-xl text-black ${leading ? leading : 'leading-[130%]' } mt-4`}>{d.title}</span>
                    </h2>

                    {d.desc &&
                        <p className={`!leading-[150%] text-gray-600 text-sm md:text-base ${side === "left" ? "text-left" : "text-center"}`}>
                            {d.desc}
                        </p>
                    }
                </div>
            ))}
        </div>
    )
}

// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Image from "next/image";
// import { Props } from "@/constants/services/type";
// import LocomotiveScroll from "locomotive-scroll";

// gsap.registerPlugin(ScrollTrigger);

// export default function GridSection({ list, height, width, side = "center", leading }: Props) {
//     const containerRef = useRef<HTMLDivElement>(null);
//     return (
//         <div ref={containerRef} className="flex flex-wrap gap-6 w-full justify-center items-center">
//             {list.map((d, i) => (
//                 <div
//                     key={`grid-${i}`}
//                     className={`gsap-card w-full ${width ?? "lg:max-w-[400px]"} rounded-md justify-center 
//                       ${side === "left" ? "items-start" : "items-center"} h-full 
//                       py-10 lg:py-0 ${height ?? "lg:min-h-[36vh]"} 
//                       bg-white border-gray-200 border-[1px] shadow-md 
//                       hover:shadow-lg duration-300 transition-all flex flex-col 
//                       gap-2 p-10`}
//                 >
//                     {d.icons && (
//                         <Image
//                             src={d.icons}
//                             alt="icon"
//                             width={1000}
//                             height={1000}
//                             className="object-contain w-16 h-16 lg:w-[72px] lg:h-[72px]"
//                         />
//                     )}

//                     <h2 className={`text-primary text-3xl lg:text-5xl ${side === "left" ? "text-left" : "text-center"}`}>
//                         {!d.icons && "0" + (i + 1)}
//                         <span className={`block text-lg lg:text-xl text-black ${leading ? leading : 'leading-[130%]'} mt-4`}>{d.title}</span>
//                     </h2>

//                     {d.desc &&
//                         <p className={`!leading-[150%] text-gray-500 text-sm ${side === "left" ? "text-left" : "text-center"}`}>
//                             {d.desc}
//                         </p>
//                     }
//                 </div>
//             ))}
//         </div>
//     )
// }
