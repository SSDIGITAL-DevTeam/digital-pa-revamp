import BlogContent from "@/components/partials/Blog/BlogContent";
import { axiosInstance } from "@/lib/axios";
import dayjs from "dayjs";
import Image from "next/image";
import CopyLinkButton from "../_components/ButtonCopyLink";
import DownloadPdfModal from "./_components/DownloadPdfModal";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { seoMetadata } from "@/constants/metadata/metadata";
import Script from "next/script";

export type Blog = {
  id: string;
  title: string;
  image: string;
  content: string;
  slug: string;
  status: string;
  favorite: boolean;
  categoryId: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  publishDate: string;
  pdf: string | null; // ✅ field baru
  author: {
    id: string;
    name: string;
  };
  category: {
    id: string;
    name: string;
  };
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

export const revalidate = 0; // always fresh for SEO

async function fetchBlog(slug: string) {
  const base = process.env.NEXT_PUBLIC_API_URL;
  const url = `${base}/blog/${slug}`;
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) return null;
  return res.json();
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  try {
    const data: any = await fetchBlog(params.slug);
    if (!data) return { title: "Insights | Digital PA", description: "Read our insights." };

    const baseCanonical = (seoMetadata?.home?.alternates?.canonical as string) || "https://digital-pa.com.sg";
    const canonical = `${baseCanonical}/insights/${params.slug}`;
    const imageUrl = `${process.env.NEXT_PUBLIC_API_IMAGE_URL}/${data.image}`;

    // metas coming from API array or flattened
    const metas = Array.isArray(data.metas) ? data.metas : [];
    const description = metas.find((m: any) => m.value === "description")?.content || data.description || "";
    const keywordsRaw = metas.find((m: any) => m.value === "keyword")?.content || metas.find((m: any) => m.value === "tags")?.content || "";
    const keywords = keywordsRaw
      .split(",")
      .map((s: string) => s.trim())
      .filter(Boolean);

    // Prefer metaTitle, fallback to title meta, then data.title
    const pageTitle =
   
      metas.find((m: any) => m.value === "title")?.content ||
      data.title;

    return {
      title: pageTitle,
      description: description || undefined,
      keywords: keywords.length ? keywords : undefined,
      openGraph: {
        title: pageTitle,
        description: description || undefined,
        url: canonical,
        images: [
          {
            url: imageUrl,
            width: 1200,
            height: 630,
            alt: data.title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: pageTitle,
        description: description || undefined,
        images: [imageUrl],
      },
      alternates: { canonical },
    };
  } catch {
    return { title: "Insights | Digital PA", description: "Read our insights." };
  }
}

export default async function Page({
  params,
}: Readonly<{ params: { slug: string } }>) {
  try {
    // get detail blog
    const response = await axiosInstance.get(`/blog/${params.slug}`);
    const data = response.data as Blog;

    // get related blogs
    const res = await axiosInstance.get(`/blog`, {
      params: {
        categoryId: data.categoryId,
        limit: 3,
        excludeId: data.id,
      },
    });
    const relatedBlogs = res.data.data as Blog[];

    const formattedDate = dayjs(data.publishDate).format("MMM DD, YYYY");

    const metaDesc = (Array.isArray((data as any).metas) ? (data as any).metas.find((m: any) => m.value === "description")?.content : undefined) || "";

    const ld = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: data.title,
      description: metaDesc || undefined,
      image: `${process.env.NEXT_PUBLIC_API_IMAGE_URL}/${data.image}`,
      author: data.author?.name ? { "@type": "Person", name: data.author.name } : undefined,
      datePublished: data.publishDate || data.createdAt,
    };

    return (
      <main className="bg-white">
        <div className="max-w-4xl py-12 lg:py-24 px-8 md:px-20 mx-auto flex flex-col space-y-12 lg:space-y-16 bg-white">
          <Script id="blog-json-ld" type="application/ld+json" strategy="afterInteractive"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
          {/* header blog */}
          <section className="w-full flex flex-col gap-8 lg:gap-8">
            <h1 className="text-3xl !leading-[120%]">{data.title}</h1>
            <div className="flex justify-between">
              <div className="flex gap-5 items-center">
                <span className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gray-300 text-center flex justify-center items-center">
                  {data.author.name.charAt(0).toUpperCase()}
                </span>
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-semibold lg:font-bold lg:text-lg">
                    {data.author.name}
                  </span>
                  <span className="text-sm lg:text-base text-primary">
                    {formattedDate}
                  </span>
                </div>
              </div>
              <CopyLinkButton />
            </div>
          </section>

          {/* konten utama */}
          <section className="w-full flex flex-col gap-8">
            <h3 className="text-sm lg:text-base font-normal px-4 lg:px-6 py-2 lg:py-3 bg-primary text-white rounded-lg w-fit">
              {data.category.name}
            </h3>
            <div className="w-full object-contain rounded-2xl">
              <Image
                src={`${process.env.NEXT_PUBLIC_API_IMAGE_URL}/${data.image}`}
                width={1920}
                height={1080}
                alt={data.title}
                className="rounded-2xl"
              />
            </div>
            <BlogContent
              content={data.content}
              className="!leading-[150%] text-sm lg:text-[18px] blog-prose"
            />
          </section>

          {/* tombol download pdf */}
          {data.pdf && <DownloadPdfModal pdf={data.pdf }  slug={params.slug}/>}
          {/* <DownloadPdfModal /> */}

          {/* related posts */}
          <section className="w-full flex flex-col gap-12">
            <h2 className="text-primary text-3xl">Related Posts</h2>
            <div className="flex flex-col md:flex-row justify-between gap-6 items-center">
              {relatedBlogs.map((blog) => (
                <div
                  key={blog.slug}
                  className="w-full rounded-xl border-[1px] border-gray-300 shadow-sm bg-white"
                >
                  <div className="w-full h-[300px]">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_API_IMAGE_URL}/${blog.image}`}
                      width={1920}
                      height={1080}
                      alt={data.title}
                      className="rounded-xl object-cover w-full h-full object-top"
                    />
                  </div>
                  <div className="p-6 flex flex-col gap-4">
                    <h4 className="line-clamp-2 text-xl">{blog.title}</h4>
                    {/* <BlogContent content={blog.content} className="!leading-[150%] text-sm lg:text-base text-gray-600 line-clamp-5 custom-prose" /> */}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    );
  } catch (error) {
    console.error("Error fetching blog data:", error);
    notFound();
  }
}
