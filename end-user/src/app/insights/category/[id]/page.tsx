"use client"
import PaginationComponents from "@/components/partials/Pagination/Pagination";
import { useEffect, useState } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ListCategories from "../../_components/ListCategories";
import PageArticles from "../../_components/PageArticles";
import { pageData } from "../../_components/DummyData";
import { axiosInstance } from "@/lib/axios";
const categories = [
    "All",
    "Marketing",
    "SEO",
    "Content Marketing",
]
const total = 20

export default function SearchPage() {
    const [search, setSearch] = useState("")
    const [page, setPage] = useState(1)
    const [defPage, setDefPage] = useState({ totalPages: 1 })
    const [blog, setBlog] = useState<any>([]);
    const router = useRouter();
    const searchParams = useSearchParams();
    const {id} = useParams();
    const categorySlug = id?.toString(); 

    // Sync page dari URL params saat pertama render
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
        const fetchBlogByCategory = async () => {
            try{
                const response = await axiosInstance(`/blog-category/${categorySlug}`,{
                    params: {
                        status: true
                    }
                });
                console.log(response.data);
            }
            catch(error){
                console.log(error);
            }
        }
        fetchBlogByCategory()
    }, [categorySlug]);

    console.log({categorySlug})
    return (
        // <main className="bg-white">
        //     <section className="lg:max-w-7xl lg:mx-auto w-full px-10 md:px-20 lg:px-5 lg:pt-20 flex justify-between items-center">
        //         <h1 className="text-primary lg:text-3xl">RESULT FOR <span className="text-black">&quot;{decodeURIComponent(categorySlug)}&quot;</span> CATEGORY</h1>
        //         <div className="flex gap-2 items-center p-2 border-[1px] border-gray-300 rounded-md">
        //             <Input type="text" onChange={(e) => setSearch(e.target.value)} placeholder="Search for Articles"/>
        //             <Button className="font-semibold" onClick={handleSearch}>Search</Button>
        //         </div>
        //     </section>
        //     <section className="lg:max-w-7xl lg:mx-auto w-full py-12 px-10 md:px-20 lg:px-5 flex flex-col gap-8 items-center justify-center ">
        //         <div className="flex w-full justify-between items-center border-b-2 border-gray-300 pb-12">
        //             <h1 className="lg:text-3xl">{total} Articles</h1>
        //             <ListCategories list={categories} activeCategory={categorySlug} />
        //         </div>
        //         {/* <PageArticles data={pageData} /> */}
        //     </section>

        //     <PaginationComponents
        //         handleNext={handleNext}
        //         handlePrev={handlePrevious}
        //         page={page}
        //         className='mt-10'
        //         setPage={handleChangePage}
        //         totalPage={defPage.totalPages || 1}
        //     />
        // </main>
        <p>dsdfsdfsdfsd</p>
    )
}