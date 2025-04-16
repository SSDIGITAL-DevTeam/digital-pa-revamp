"use client"

import dayjs from "dayjs"
import { ArrowRightIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import ButtonCategory from "./ButtonCategory"
import BlogContent from "@/components/partials/Blog/BlogContent"

export default function PageArticles ({data}: {data: any}): JSX.Element {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {
                data.map((d: any, i:number) => (
                    <Link href={`/insights/${d.blog.slug}`} key={`blogs-${i + 1}`} className="w-full  rounded-lg border-[1px] border-gray-300 shadow-md">
                        <div className="w-full relative">
                            <Image src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/uploads/${d.blog.image}`} alt={`image-${d.blog.slug}`} width={1920} height={1080} className="md:object-cover md:object-top w-full md:h-[28vh]" quality={100} />
                            <ButtonCategory cat={d.blogCategory.name} />
                        </div>
                        <div className="p-8 md:px-12 flex flex-col gap-3">
                            <h2 className="!leading-[150%] md:!leading-[130%] text-lg lg:text-xl font-semibold line-clamp-3">{d.blog.title}</h2>
                            <BlogContent content={d.blog.content} className="line-clamp-3 custom-prose text-gray-500"/>
                            <div className="w-full flex justify-between items-center mt-2">
                                <p className="text-primary font-semibold">{dayjs(d.blog.createdAt).format("MMM DD, YYYY")}</p>
                                <button className="text-white bg-primary py-2 px-3 rounded-md font-semibold"><ArrowRightIcon className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}