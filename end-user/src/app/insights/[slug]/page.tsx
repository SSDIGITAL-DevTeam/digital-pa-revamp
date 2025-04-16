import BlogContent from "@/components/partials/Blog/BlogContent";
import { axiosInstance } from "@/lib/axios";
import dayjs from "dayjs";
import Image from "next/image";
import CopyLinkButton from "../_components/ButtonCopyLink";
export type Blog = {
    id: string;
    title: string;
    image: string;
    content: string;
    slug: string;
    status: string;
    favorite: boolean;
    categoryId: string;
    createdAt: string;
    updatedAt: string;
    userId: string;
};

export type User = {
    id: string;
    name: string;
};

export type BlogCategory = {
    id: string;
    name: string;
    slug: string;
};

export type BlogDetailResponse = {
    blog: Blog;
    user: User;
    blogCategory: BlogCategory;
};


export default async function Page({ params }: Readonly<{ params: { slug: string } }>) {
    try {
        const response = await axiosInstance.get(`/blog/${params.slug}`);
        const data = response.data as BlogDetailResponse;
        const res = await axiosInstance.get(`/blog/`, {
            params: {
                categoryId: data.blogCategory.id,
                limit: 3
            }
        });
        const relatedBlogs = res.data.data as BlogDetailResponse[];
        // console.log(data.blog.content)
        

        const formattedDate = dayjs(data.blog.createdAt).format("MMM DD, YYYY");
        return (
            <main className="py-12 lg:py-24 space-y-12 lg:space-y-16 px-8 md:px-10">
                <section className=" max-w-4xl mx-auto flex flex-col gap-8 lg:gap-14">
                    <h1 className="text-3xl !leading-[120%]">{data.blog.title}</h1>
                    <div className="flex justify-between">
                        <div className="flex gap-5 items-center">
                            <span className="w-10 h-10 lg:w-14 lg:h-14 rounded-full bg-gray-300 text-center flex justify-center items-center">
                                {data.user.name.charAt(0).toUpperCase()}
                            </span>
                            <div className="flex flex-col gap-1 font-semibold lg:font-bold">
                                <span className="text-sm lg:text-xl">{data.user.name}</span>
                                <span className="text-sm lg:text-xl text-primary">{formattedDate}</span>
                            </div>
                        </div>
                        {/* <Button variant={"ghost"} size={"lg"} className="text-base gap-3 text-gray-500 hover:text-gray-600 transition-all duration-200">
                            {copyLinkSVG}
                            Copy Link
                        </Button> */}
                        <CopyLinkButton />
                    </div>
                </section>
                <section className="max-w-4xl mx-auto flex flex-col gap-8">
                    <h3 className="text-sm lg:text-base font-normal px-6 py-3 bg-primary text-white rounded-lg w-fit">{data.blogCategory.name}</h3>
                    <div className="w-full object-contain rounded-2xl">
                        <Image src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/uploads/${data.blog.image}`} width={1920} height={1080} alt={data.blog.title} className="rounded-2xl" />
                    </div>
                    <BlogContent content={data.blog.content} className="!leading-[150%] text-sm lg:text-base blog-prose" />
                </section>
                <section className="max-w-4xl mx-auto flex flex-col gap-12">
                    <h2 className="text-primary text-3xl">Related Posts</h2>
                    <div className="flex flex-col md:flex-row justify-between gap-8 items-center">
                        {
                            relatedBlogs.map((blog) => (
                                <div key={blog.blog.slug} className="w-full rounded-xl border-[1px] border-gray-300 shadow-sm bg-white">
                                    <div className="w-full h-[300px]">
                                        <Image src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/uploads/${blog.blog.image}`} width={1920} height={1080} alt={data.blog.title} className="rounded-xl object-cover w-full h-full object-top" />
                                    </div>
                                    <div className="p-6 flex flex-col gap-4 py-12">
                                        <h4 className="line-clamp-2">
                                            {blog.blog.title}
                                        </h4>
                                        <BlogContent content={blog.blog.content} className="!leading-[150%] text-sm lg:text-base text-gray-600 line-clamp-5 custom-prose" />
                                    </div>

                                </div>
                            ))

                        }
                    </div>
                    {
                    }
                </section>
            </main>
        );
    } catch (error) {
        console.error("Error fetching blog data:", error);
        return <main>Error loading blog</main>;
    }
}
