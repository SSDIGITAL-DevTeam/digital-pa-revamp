import Image from "next/image"

interface Props {
    list: {
        title: string
        icons: string
    }[]
}

export default function SectionGridDPALeads({ list }: Props) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 w-full justify-center items-center">
            {list.map((d, i) => (
                <div
                    key={`grid-${i + 1}`}
                    className={`w-full rounded-xl justify-start 
                        items-center h-full lg:p-5 flex flex-col gap-2 md:gap-4 bg-white`}
                >
                    <Image
                        src={d.icons}
                        alt="icon"
                        width={1000}
                        height={1000}
                        className="object-contain w-full"
                    />
                    <h3 className={`text-center text-black text-base md:text-xl lg:text-2xl md:text-left pt-5 !leading-normal`}>
                        {d.title}
                    </h3>
                </div>
            ))}
        </div>
    )
}