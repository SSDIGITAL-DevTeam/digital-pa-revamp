import Image from "next/image";
type List = {
    title: string;
    image: string;
    subtitle: string;
}
export default function GradientSection({ data, name }: { data: List[], name: string }) {
    return (
        <div className="flex flex-wrap gap-5 w-full justify-center items-center">
            {data.map((d, i) => (
                <div key={`${name}-${i+1}`} className="relative w-full lg:w-[600px] h-[45vh]">
                    <Image
                        src={d.image}
                        alt="Image"
                        width={1920}
                        height={1080}
                        quality={100}
                        className="w-full h-full object-cover rounded-md"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r lg:bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent rounded-md text-white flex justify-start lg:justify-end flex-col gap-1 p-4 lg:px-5 lg:py-8">
                        <h2 className="text-lg lg:text-2xl font-bold">{d.title}</h2>
                        <p className="text-xs lg:text-base text-gray-300">{d.subtitle}</p>

                    </div>
                </div>
            ))}
        </div>
    )
}