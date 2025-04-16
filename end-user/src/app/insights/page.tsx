"use client"
import Image from "next/image"

// image asset
import dayjs from "dayjs"
import { useEffect, useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import PaginationComponents from "@/components/partials/Pagination/Pagination"
import { useRouter, useSearchParams } from "next/navigation"
import { axiosInstance } from "@/lib/axios"
// components

import PageArticles from "./_components/PageArticles"
import ListCategories from "./_components/ListCategories"
import ButtonCategory from "./_components/ButtonCategory"
import Link from "next/link"
import BlogContent from "@/components/partials/Blog/BlogContent"


// const categories = [
//     "All",
//     "Marketing",
//     "SEO",
//     "Content Marketing",
// ]

export default function Insights() {
    // const [activeCategory, setActiveCategory] = useState("all")
    const [search, setSearch] = useState("")
    const [page, setPage] = useState(1)
    const [defPage, setDefPage] = useState({ totalPages: 1 })
    const [blog, setBlog] = useState<any>([]);
    const [favBlog, setFavBlog] = useState<any>([]);
    const [categories, setCategories] = useState<any>([]);
    const [activeCategory, setActiveCategory] = useState<string | undefined>(undefined);
    const router = useRouter();
    const searchParams = useSearchParams();

    useEffect(() => {
        const urlPage = Number(searchParams.get("page")) || 1;
        setPage(urlPage);
    }, [searchParams]);

    const handleChangePage = (newPage: number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set("page", newPage.toString());
        router.push(`?${params.toString()}`);
        setPage(newPage);
    };

    const handleNext = () => {
        if (blog && page < defPage.totalPages) {
            handleChangePage(page + 1);
        }
    };

    const handlePrevious = () => {
        if (page > 1) {
            handleChangePage(page - 1);
        }
    };

    const handleSearch = (e: any) => {
        e.preventDefault();
        router.push(`/insights/search/${search}`);
    }


    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const [favBlog, otherBlog, categories] = await Promise.all(
                    [
                        axiosInstance.get('/blog', {
                            params: {
                                status: "Published",
                                favorite: true,
                                limit : 3
                            }
                        }),
                        axiosInstance.get('/blog', {
                            params: {
                                page,
                                limit: 6,
                                status: "Published",
                                favorite: false,
                                categoryId: activeCategory
                            }
                        }),
                        axiosInstance.get('/blog-category', {
                            params: {
                                page,
                                limit: 6,
                                status: true,
                            }
                        }),
                    ]
                )
                setFavBlog(favBlog.data.data);
                setBlog(otherBlog.data.data);
                setDefPage(otherBlog.data.pagination);
                setCategories(categories.data.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchBlog();
    }, [page, activeCategory]);

    // console.log({activeCategory})

    // console.log({ categories });
    // console.log({ blog });
    console.log({ favBlog });
    // console.log({"panjang" : favBlog.length });
    // console.log({ categories });
    // if (favBlog[0] === undefined) return <div>Loading...</div>

    return (
        <main className="bg-white flex flex-col gap-2 md:gap-6">
            <section className="lg:max-w-7xl lg:mx-auto w-full px-8 md:px-20 lg:px-5 lg:pt-20 pt-8 flex lg:flex-row flex-col gap-5 justify-between items-center">
                <h1 className="text-primary lg:text-5xl text-3xl">INSIGHTS</h1>
                <div className="flex gap-2 items-center p-2 border-[1px] border-gray-300 rounded-md">
                    <Input type="text" onChange={(e) => setSearch(e.target.value)} placeholder="Search for Articles" />
                    <Button className="font-semibold" onClick={handleSearch}>Search</Button>
                </div>
            </section>
            {
                favBlog.length > 0 && (
                    <section className="lg:max-w-7xl lg:mx-auto w-full py-12 px-8 md:px-20 lg:px-5 flex flex-col gap-8 items-center justify-center ">
                        <Link href={`/insights/${favBlog[0].blog.slug}`} className="w-full rounded-md border-[1px] border-gray-300 shadow-md flex flex-col md:flex-row">
                            <div className="flex w-full h-full">
                                <div className="w-full md:w-[48vw] md:h-[50vh] relative">
                                    <Image src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/uploads/${favBlog[0].blog.image}`} alt="favorite blog 1" width={1920} height={1080} className="md:object-cover md:object-top w-full h-full" quality={100} />
                                    <ButtonCategory cat={favBlog[0].blogCategory.name} />
                                </div>
                            </div>
                            <div className="h-full flex justify-center md:items-center flex-col gap-5 w-full my-auto p-8 lg:px-14 md:py-0">
                                <h2 className="!leading-[130%] text-xl md:text-3xl font-semibold line-clamp-3">{favBlog[0].blog.title}</h2>
                                <BlogContent content={favBlog[0].blog.content} className="line-clamp-2 text-gray-500 custom-prose" />
                                <div className="flex gap-3 w-full items-center">
                                    <div className="h-10 md:h-12 aspect-square rounded-full bg-gray-300 flex items-center justify-center">{favBlog[0].user.name.charAt(0).toUpperCase()}</div>
                                    <div className="flex flex-col gap-1">
                                        <p className="font-semibold md:text-base text-sm">{favBlog[0].user.name}</p>
                                        <p className="text-primary md:text-base text-sm">{dayjs(favBlog[0].blog.createdAt).format("MMM DD, YYYY")}</p>
                                    </div>
                                </div>

                            </div>
                        </Link>
                        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {
                                favBlog.slice(1, 3).map((d: any, i: number) => (
                                    <Link href={`/insights/${d.blog.slug}`} key={`favorite-insights-${i + 1}`} className="w-full rounded-lg border-[1px] border-gray-300 shadow-md">
                                        <div className="w-full relative">
                                            <Image src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/uploads/${d.blog.image}`} alt={`favorite blog ${i + 2}`} width={1920} height={1080} className="md:object-cover md:object-top w-full rounded-t-lg md:h-[40vh]" quality={100} />
                                            <ButtonCategory cat={d.blogCategory.name} />
                                        </div>
                                        <div className="my-10 px-10 flex flex-col gap-4 justify-center">
                                            <h2 className="!leading-[130%] text-xl font-semibold line-clamp-3">{d.blog.title}</h2>
                                            <BlogContent content={d.blog.content} className="line-clamp-2 text-gray-500 custom-prose" />
                                            <div className="flex gap-3 w-full items-center">
                                                <div className="h-10 md:h-12 aspect-square rounded-full bg-gray-300 flex items-center justify-center">{d.user.name.charAt(0).toUpperCase()}</div>
                                                <div className="flex flex-col gap-1">
                                                    <p className="font-semibold md:text-base text-sm">{d.user.name}</p>
                                                    <p className="text-primary md:text-base text-sm">{dayjs(d.blog.createdAt).format("MMM DD, YYYY")}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))
                            }
                        </div>
                    </section>
                )
            }

            <section className="lg:max-w-7xl lg:mx-auto w-full py-12 px-10 md:px-20 lg:px-5 flex flex-col gap-8 items-center justify-center ">
                <div className="flex flex-col lg:flex-row gap-y-5 w-full justify-between items-center border-b-2 border-gray-300 pb-12">
                    <h1 className="text-2xl md:text-3xl">Latest Articles</h1>
                    <ListCategories list={categories} activeCategory={activeCategory || "all"} setActiveCategory={setActiveCategory} />
                </div>
                <PageArticles data={blog} />
            </section>

            <PaginationComponents
                handleNext={handleNext}
                handlePrev={handlePrevious}
                page={page}
                className='mt-10'
                setPage={handleChangePage}
                totalPage={defPage.totalPages || 1}
            />
        </main>
    )

}
