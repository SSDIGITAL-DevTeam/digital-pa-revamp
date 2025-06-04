import Image from "next/image"

interface Props {
    list: {
        title: string
        icons: string
    }[],
    className?: string
}
export default function SectionGridImage({ list, className }: Props) {
return(
        <div className="flex flex-wrap gap-6 w-full justify-center items-center">
            {list.map((d, i) => (
                <div
                    key={`grid-${i + 1}`}
                    className={`w-full lg:max-w-[400px] rounded-2xl justify-start 
                        items-center h-full lg:min-h-[48vh] p-5 lg:p-5 bg-white border-gray-200 border-[1px] shadow-md hover:shadow-lg duration-300 transition-all flex flex-col gap-2 md:gap-4 ${className}`}
                >
                    <Image
                        src={d.icons}
                        alt="icon"
                        width={1000}
                        height={1000}
                        className="object-contain w-full"
                    />
                    <h3 className={`text-black text-sm lg:text-xl text-left pt-5 !leading-normal`}>
                        {d.title}
                    </h3>
                </div>
            ))}
        </div>
    )
}