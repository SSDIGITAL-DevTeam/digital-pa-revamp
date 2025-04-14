import Image from "next/image"

type List = {
    title: string,
    desc?: string,
    icons?: string,
}

type Props = {
    list: List[],
    height?: string,
    leading? :string
    width?: string,
    side?: "left" | "center"
}

export default function GridSection({ list, height, width, side = "center", leading }: Props) {
    return (
        <div className="flex flex-wrap gap-6 w-full justify-center items-center">
            {list.map((d, i) => (
                <div
                    key={`grid-${i + 1}`}
                    className={`w-full ${width ?? "lg:max-w-[400px]"} rounded-md justify-center 
                            ${side === "left" ? "items-start" : "items-center"} h-full 
                            py-10 lg:py-0 ${height ?? "lg:min-h-[36vh]"} 
                            bg-white border-gray-200 border-[1px] shadow-md 
                            hover:shadow-lg duration-300 transition-all flex flex-col 
                            gap-2 p-10`}
                >
                    {d.icons && (
                        <Image
                            src={d.icons}
                            alt="icon"
                            width={1000}
                            height={1000}
                            className="object-contain w-12 h-12 lg:w-[72px] lg:h-[72px]"
                        />
                    )}

                    <h2 className={`text-primary text-3xl lg:text-5xl ${side === "left" ? "text-left" : "text-center"}`}>
                        {!d.icons && "0" + (i + 1)}
                        <span className={`block text-lg lg:text-xl text-black ${leading ? leading : 'leading-[120%]' } mt-4`}>{d.title}</span>
                    </h2>

                    {d.desc &&
                        <p className={`!leading-[150%] text-gray-500 text-sm ${side === "left" ? "text-left" : "text-center"}`}>
                            {d.desc}
                        </p>
                    }
                </div>
            ))}
        </div>
    )
}