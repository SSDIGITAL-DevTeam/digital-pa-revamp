"use client"
// image asset
import { useEffect, useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import PaginationComponents from "@/components/partials/Pagination/Pagination"
import { useRouter, useSearchParams } from "next/navigation"
import { axiosInstance } from "@/lib/axios"
// components

import PageArticles from "./_components/PageArticles"
import ListCategories from "./_components/ListCategories"
import HeroArticleSection from "./_components/HeroArticleSection"


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
                                limit : 3,
                                orderBy:"createdAt:desc",
                               // orderBy: JSON.stringify([{ createdAt: "desc" }])
                            }
                        }),
                        axiosInstance.get('/blog', {
                            params: {
                                page,
                                limit: 6,
                                status: "Published",
                                favorite: false,
                                categoryId: activeCategory,
                                orderBy:"createdAt:desc",
                               // orderBy: JSON.stringify([{ createdAt: "desc" }])
                            }
                        }),
                        axiosInstance.get('/blog-category', {
                            params: {
                                // page,
                                // limit: 6,
                                status: true,
                            }
                        }),
                    ]
                )

                console.log("✅ favBlogRes:", favBlog.data);
                console.log("✅ otherBlogRes:", otherBlog.data);
                console.log("✅ categoriesRes:", categories.data)

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
    // console.log({ favBlog });
    // console.log({ defPage });
    // // console.log({"panjang" : favBlog.length });
    // console.log({ categories });
    // if (favBlog[2] === undefined) return <div>Loading...</div>

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
                (favBlog.length > 0) && (
                    <HeroArticleSection favBlog={favBlog}/>
                )
            }

            <section className="lg:max-w-7xl lg:mx-auto w-full py-12 px-10 md:px-20 lg:px-5 flex flex-col gap-8 items-center justify-center ">
                <div className="flex flex-col lg:flex-row gap-y-5 w-full justify-between items-center border-b-2 border-gray-300 pb-12">
                    <ListCategories list={categories} activeCategory={activeCategory || "all"} setActiveCategory={setActiveCategory} />
                </div>
                <PageArticles data={blog} />
                {(!blog || blog.length === 0) && (
                    <>No posts found.</>
                )}
            </section>

            {blog && blog.length > 0 &&
                    <PaginationComponents
                        handleNext={handleNext}
                        handlePrev={handlePrevious}
                        page={page}
                        className='mt-10'
                        setPage={handleChangePage}
                        totalPage={defPage.totalPages || 1}
                    />
            }
          
        </main>
    )

}
