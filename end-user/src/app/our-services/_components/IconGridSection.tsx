import Image from "next/image";
type Props = {
    list: {
        icon?: string;
        emoji?: string;
        title: string;
        desc: string;
    }[];
    padding?: string;
    side?: "left" | "center";
    className?: string;
}
export default function IconGridSection({ list, side = "center", padding, className }: Props) {
    return (
        <div className="grid lg:grid-cols-2 lg:grid-rows-2 grid-cols-1 gap-6 justify-center items-center w-full mx-auto">
            {list.map((d, i) => {
                const isLastOdd = list.length % 2 !== 0 && i === list.length - 1;
                return (
                    <div key={`grid-icon-${i + 1}`}
                        className={`w-full items-center rounded-lg py-8 bg-white border-gray-200 border-[1px] shadow-md hover:shadow-lg duration-300 transition-all flex flex-col lg:flex-row gap-6 p-8 
                            ${side === "left" ? "justify-start" : "justify-center"} 
                            ${padding ? padding : "lg:py-16"} 
                            ${isLastOdd && "lg:col-span-2 lg:w-1/2 mx-auto"}`}>
                        {d.icon && <Image src={d.icon} alt={`list-icon-${i + 1}`} width={1000} height={1000} className="object-contain lg:w-16 w-12 lg:h-16 h-12" />}
                        {d.emoji && <span className="text-4xl lg:text-6xl">{d.emoji}</span>}
                        <div className="flex flex-col gap-3 w-full">
                            <h2 className="text-xl lg:text-2xl">{d.title}</h2>
                            <p className={`!leading-[150%] text-sm line-clamp-2 ${className}`}>{d.desc}</p>
                        </div>
                    </div>
                );
            })}
        </div>

    )
}