// const ListRealResult = [
//     {
//         title: "Increase in lead engagement",
//         persentage: 230
//     },
//     {
//         title: "More productivity with automated scheduling",
//         persentage: 40
//     },
//     {
//         title: "Faster WhatsApp reply speed",
//         persentage: 70
//     },
//     {
//         title: "Manpower cost savings",
//         persentage: 50
//     },
// ]
// export default function SectionRealResult() {
//     return (
//         <div className='md:min-w-[55%] w-full grid grid-cols-2'>
//             {
//                 ListRealResult.map((d, i) => (
//                     <div
//                         key={i}
//                         className={`w-full flex flex-col justify-center items-center gap-4 py-8 md:py-16 ${i % 2 === 0 ? 'border-r' : ''} ${i < ListRealResult.length - 2 ? 'border-b' : ''} border-gray-400/60`}
//                     >
//                         <span className='text-primary text-3xl lg:text-5xl font-extrabold tracking-tight'>
//                             {d.persentage}<span className='text-red-300'>%</span>
//                         </span>
//                         <h2 className='text-xs sm:text-sm lg:text-lg font-normal text-gray-600 max-w-[80%] text-center'>
//                             {d.title}
//                         </h2>
//                     </div>
//                 ))
//             }
//         </div>
//     )
// }
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ListRealResult = [
    { title: "Increase in lead engagement", persentage: 230 },
    { title: "More productivity with automated scheduling", persentage: 40 },
    { title: "Faster WhatsApp reply speed", persentage: 70 },
    { title: "Manpower cost savings", persentage: 50 },
]

export default function SectionRealResult() {
    const numberRefs = useRef<(HTMLSpanElement | null)[]>([])
    const sectionRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: "top 150%",
                once: true,
                onEnter: () => {
                    numberRefs.current.forEach((el, index) => {
                        if (!el) return
                        const target = ListRealResult[index].persentage

                        gsap.fromTo(
                            el,
                            { innerText: 0 },
                            {
                                innerText: target,
                                duration: 2,
                                ease: 'power1.out',
                                snap: { innerText: 1 },
                                onUpdate: () => {
                                    if (el) el.innerText = Math.floor(Number(el.innerText)).toString()
                                },
                            }
                        )
                    })
                }
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <div
            ref={sectionRef}
            className='md:min-w-[55%] w-full grid grid-cols-2'
        >
            {
                ListRealResult.map((d, i) => (
                    <div
                        key={i}
                        className={`w-full flex flex-col justify-center items-center gap-4 py-8 md:py-16 ${i % 2 === 0 ? 'border-r' : ''} ${i < ListRealResult.length - 2 ? 'border-b' : ''} border-gray-400/60`}
                    >
                        <span className='text-primary text-3xl lg:text-5xl font-extrabold tracking-tight'>
                            <span ref={el => void (numberRefs.current[i] = el)}>
                                0
                            </span>
                            <span className='text-red-300'>%</span>
                        </span>
                        <h2 className='text-xs sm:text-sm lg:text-lg font-normal text-gray-600 max-w-[80%] text-center'>
                            {d.title}
                        </h2>
                    </div>
                ))
            }
        </div>
    )
}
