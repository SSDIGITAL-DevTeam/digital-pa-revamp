import BlogContent from "@/components/partials/Blog/BlogContent";
import Link from "next/link";
import ButtonCategory from "./ButtonCategory";
import Image from "next/image";
import dayjs from "dayjs";

type FavBlog = {
    title: string;
    slug: string;
    image: string;
    category: { name: string };
    createdAt: string;
    author: { name: string };
    content: string;
}

export default function HeroArticleSection({ favBlog }: { favBlog: FavBlog[] }) {
    let num = favBlog.length || 1;
    console.log(num)
    return (
        <section className="lg:max-w-7xl lg:mx-auto w-full py-12 px-8 md:px-20 lg:px-5 flex flex-col gap-8 items-center justify-center ">
            {
                num !== 2 && (<Link href={`/insights/${favBlog[num - 1].slug}`} className="w-full rounded-md border-[1px] border-gray-300 shadow-md flex flex-col md:flex-row">
                    <div className="flex w-full h-full">
                        <div className="w-full md:w-[48vw] md:h-[50vh] relative">
                            <Image src={`${process.env.NEXT_PUBLIC_API_IMAGE_URL}/${favBlog[num - 1].image}`} alt="favorite blog 1" width={1920} height={1080} className="md:object-cover md:object-top w-full h-full" quality={100} />
                            <ButtonCategory cat={favBlog[num - 1].category.name} />
                        </div>
                    </div>
                    <div className="h-full flex flex-col gap-5 w-full my-auto p-7 lg:px-14 md:py-0">
                        <h2 className="!leading-[130%] text-xl md:text-3xl font-semibold line-clamp-3">{favBlog[num - 1].title}</h2>
                        <BlogContent content={favBlog[num - 1].content} className="line-clamp-2 text-gray-500 custom-prose" />
                        <div className="flex gap-3 w-full items-center">
                            <div className="h-10 md:h-12 aspect-square rounded-full bg-gray-300 flex items-center justify-center">{favBlog[num - 1].author.name.charAt(0).toUpperCase()}</div>
                            <div className="flex flex-col gap-[3px]">
                                <p className="font-semibold md:text-lg text-sm">{favBlog[num - 1].author.name}</p>
                                <p className="text-primary md:text-base text-sm">{dayjs(favBlog[num - 1].createdAt).format("MMM DD, YYYY")}</p>
                            </div>
                        </div>

                    </div>
                </Link>)}
            {
                num > 1 && (
                    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {
                            favBlog.slice(0,2).map((d: any, i: number) => (
                                <Link href={`/insights/${d.slug}`} key={`favorite-insights-${i + 1}`} className="w-full rounded-lg border-[1px] border-gray-300 shadow-md">
                                    <div className="w-full relative">
                                        <Image src={`${process.env.NEXT_PUBLIC_API_IMAGE_URL}/${d.image}`} alt={`favorite blog ${i + 2}`} width={1920} height={1080} className="md:object-cover md:object-top w-full rounded-t-lg md:h-[40vh]" quality={100} />
                                        <ButtonCategory cat={d.category.name} />
                                    </div>
                                    <div className="p-7 lg:p-10 flex flex-col gap-4 justify-center">
                                        <h2 className="!leading-[130%] text-xl font-semibold line-clamp-3">{d.title}</h2>
                                        <BlogContent content={d.content} className="line-clamp-2 text-gray-500 custom-prose" />
                                        <div className="flex gap-3 w-full items-center">
                                            <div className="h-10 md:h-12 aspect-square rounded-full bg-gray-300 flex items-center justify-center">{d.author.name.charAt(0).toUpperCase()}</div>
                                            <div className="flex flex-col gap-1">
                                                <p className="font-semibold md:text-base text-sm">{d.author.name}</p>
                                                <p className="text-primary md:text-base text-sm">{dayjs(d.createdAt).format("MMM DD, YYYY")}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                )
            }
        </section>
    )
}