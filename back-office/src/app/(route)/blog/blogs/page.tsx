"use client";

import { Button } from "@/components/ui/button";
import axios from "axios";
import { CirclePlus, ListFilter, Pencil, Search, Star, Trash } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import TableComponents from "@/components/partials/table/TableComponents";
import Header from "@/components/layout/header/Header";
import { failedToast, successToast } from "@/utils/toast";
import { axiosInstance } from "@/lib/axios";
import { useRouter, useSearchParams } from "next/navigation";
import PaginationComponents from "@/components/partials/pagination/Pagination";
import { init } from "next/dist/compiled/webpack/webpack";

type Pagination = {
  currentPage: number;
  perPage: number;
  total: number;
  totalPages: number;
};

type CategoryType = {
  data: [];
  pagination: Pagination;
};

export default function DataPage() {
  const [blogs, setBlogs] = useState<CategoryType | null>(null);
  const [page, setPage] = useState<number>(1);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [refetch, setRefetch] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string | undefined>(undefined);
  const searchParams = useSearchParams();
  const router = useRouter();
  const [sort, setSort] = useState({
    key: "createdAt",
    direction: true
  });

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
    if (blogs && page < blogs.pagination.totalPages) {
      handleChangePage(page + 1);
    }
  };

  const handlePrevious = () => {
    if (page > 1) {
      handleChangePage(page - 1);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/blog", {
          params: { limit: 4, page, search: searchQuery, orderBy: `${sort.key}:${sort.direction ? "desc" : "asc"}` },
        });
        setBlogs(response.data);
        // console.log(response.data);
      } catch (error: any) {
        failedToast(
          <p className="text-xl font-semibold text-red-900">Failed</p>,
          <p className="text-xs text-red-300 mt-2">{
            error.response?.data?.error || error.response?.statusText || "Error processing data"
          }
          </p>
        );
      }
    };
    fetchData();
  }, [refetch, page, searchQuery, sort]);

  console.log({blogs})

  const handleFavorite = async (id: string, currentStatus: boolean) => {
    try {
      const response = await axiosInstance.patch(`/blog/${id}`, {
        favorite: !currentStatus,
      });
      if (response.status === 200) {
        setRefetch(prev => !prev)
      }
      successToast(
        <p className="text-xl font-semibold text-green-900">Success</p>,
        <p className="text-xs text-green-400 mt-2">
          Blog has been {currentStatus ? "unfavorite" : "favorite"}
        </p>
      )
    } catch (error: any) {
      failedToast(
        <p className="text-xl font-semibold text-red-900">Error</p>,
        <p className="text-xs text-red-300 mt-2">{
          error.response?.data?.error || error.response?.statusText || "Error processing data"
        }
        </p>
      );
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await axiosInstance.delete(`/blog/${id}`);
      successToast(
        <p className="text-xl font-semibold text-green-900">Success</p>,
        <p className="text-xs text-green-400 mt-2">Blog has been deleted</p>
      )
      setRefetch(prev => !prev)
    } catch (error: any) {
      failedToast(
        <p className="text-xl font-semibold text-red-900">Error</p>,
        <p className="text-xs text-red-300 mt-2">{
          error.response?.data?.error || error.response?.statusText || "Error processing data"
        }
        </p>
      );
    }
  };
  const headings = ["Blog Name", "Category", "Status", "Action"];
  const data = blogs?.data.map((item: any) => ({
    "Blog Name": item.title,
    "Category": item.category.name,
    "Status": item.status,
    "Action": (
      <div className="flex items-center gap-5">
        <button
          onClick={() => handleFavorite(item.id, item.favorite)}
          className="text-red-500"
        >
          <Star
            fill={item.favorite ? "red" : "none"}
            color="red"
            size={15}
          />
        </button>

        <Link href={`/blog/blogs/edit?id=${item.id}`} className="text-blue-500">
          <Pencil color="red" size={15} />
        </Link>
        <button onClick={() => handleDelete(item.id)} className="text-red-500">
          <Trash color="red" size={15} />
        </button>
      </div>
    ),
  }));

  return (
    <main className="w-full flex flex-col gap-12">
      <Header title={"Blog Post"} />
      <section className="flex flex-col gap-16 p-8 rounded-3xl bg-white border border-border shadow-sm w-full min-h-[50vh] items-center">
        <div className="w-full flex-col items-center">

          <div className="flex flex-col gap-2 text-sm text-gray-600 justify-start w-full">
            <h1 className="text-4xl font-semibold text-black">All Blog</h1>
            <p>showing all blog</p>
          </div>

          <div className="flex justify-between items-center w-full mt-8">
            <div className=" flex gap-2 items-center p-2 border border-border rounded-lg">
              <input
                type="text"
                placeholder={`Search Blog`}
                className="px-3 py-2 focus:outline-none w-full min-w-64 placeholder:text-sm text-gray-600"
                defaultValue={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button
                variant={"addData"}
                onClick={() => setIsOpen((prev) => !prev)}
              >
                Search
              </Button>
            </div>
            <Link href="/blog/blogs/add">
              <Button
                variant={"addData"}
                size={"sm"}
                className="flex gap-2 items-center"
              >
                <CirclePlus size={20} /> Create a New Blog
              </Button>
            </Link>
          </div>
        </div>

        <TableComponents headings={headings} data={data || []} setSort={setSort} sort={sort} />

        <PaginationComponents
          handleNext={handleNext}
          handlePrev={handlePrevious}
          page={page}
          setPage={handleChangePage}
          totalPage={blogs?.pagination.totalPages || 1}
          totalData={blogs?.pagination.total || 0}
          currentData={data?.length || 0}
        />
      </section>
    </main>
  );
}
