"use client"
import PaginationComponents from "@/components/partials/Pagination/Pagination";
import { useEffect, useState } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import PageArticles from "../../_components/PageArticles";
import ListCategories from "../../_components/ListCategories";
// import { pageData } from "../../_components/DummyData";
import { axiosInstance } from "@/lib/axios";
const categories = [
    "All",
    "Marketing",
    "SEO",
    "Content Marketing",
]

export default function SearchPage() {
    const [search, setSearch] = useState("")
    const [page, setPage] = useState(1)
    const [defPage, setDefPage] = useState({ totalPages: 1, total: 0 })
    const [blog, setBlog] = useState<any>([]);
    const [categories, setCategories] = useState<any>([]);
    const router = useRouter();
    const searchParams = useSearchParams();
    const { id } = useParams();
    const searchName = id?.toString();
    const [activeCategory, setActiveCategory] = useState<string | undefined>(undefined);

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
        const fetchBlogbySearch = async () => {
            try {
                const [blog, categories] = await Promise.all([
                    await axiosInstance(`/blog`, {
                        params: {
                            page,
                            limit: 6,
                            status: "Published",
                            categoryId : activeCategory
                        }
                    }),
                    await axiosInstance(`/blog-category`, {
                        params: {
                            page,
                            limit: 6,
                            status: true,
                        }
                    }),
                ])
                // console.log(blog.data);
                setCategories(categories.data.data);
                setBlog(blog.data.data);
                setDefPage(blog.data.pagination);
            } catch (error) {
                console.log(error);
            }
        }

        fetchBlogbySearch();
    }, [page, activeCategory])

    return (
        <main className="bg-white py-10 lg:py-0">
            <section className="lg:max-w-7xl  lg:mx-auto w-full px-8 md:px-20 lg:px-5 lg:pt-20 flex lg:flex-row flex-col gap-y-5 lg:justify-between md:items-center">
                <h1 className="text-primary text-3xl md:max-w-full max-w-[200px] !leading-[150%]">RESULT FOR <span className="text-black">&quot;{searchName}&quot;</span></h1>
                <div className="flex gap-2 items-center p-2 border-[1px] border-gray-300 rounded-md">
                    <Input type="text" onChange={(e) => setSearch(e.target.value)} placeholder="Search for Articles" />
                    <Button className="font-semibold" onClick={handleSearch}>Search</Button>
                </div>
            </section>
            <section className="lg:max-w-7xl lg:mx-auto w-full py-12 px-10 md:px-20 lg:px-5 flex flex-col gap-8 items-center justify-center ">
                <div className="flex flex-col gap-y-5 lg:flex-row w-full lg:justify-between lg:items-center border-b-2 border-gray-300 pb-12">
                    <h1 className="text-2xl lg:text-3xl">{defPage.total} Articles</h1>
                    <ListCategories list={categories} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
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
        // <p>asdfsfsdfs</p>
    )
}