"use client";

import { Button } from "@/components/ui/button";
import axios from "axios";
import { CirclePlus, ListFilter, Pencil, Search, Trash } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import TableComponents from "@/components/partials/table/TableComponents";
import Header from "@/components/layout/header/Header";
import { axiosInstance } from "@/lib/axios";
import { useRouter, useSearchParams } from "next/navigation";
import PaginationComponents from "@/components/partials/pagination/Pagination";
import { DialogCategory } from "@/components/partials/dialog/DialogCategory";
import { Input } from "@/components/ui/input";
import dayjs from "dayjs";

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
  const [packages, setPackages] = useState<CategoryType | null>(null);
  const [page, setPage] = useState<number>(1);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [refetch, setRefetch] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [err, setErr] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const router = useRouter();

  // Pagination
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
    if (packages && page < packages.pagination.totalPages) {
      handleChangePage(page + 1);
    }
  };

  const handlePrevious = () => {
    if (page > 1) {
      handleChangePage(page - 1);
    }
  };
  //End Pagination


  const [value, setValue] = useState(null)
  const handleDialog = async (id: string) => {
    try {
      const response = await axiosInstance.get(`/blog-category/${id}`);
      setValue(response.data);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/blog-category", {
          params: { limit: 4, page },
        });
        setPackages(response.data);
      } catch (error: any) {
        setErr(error.response?.data?.error || error.response?.statusText || "Error fetching data");
      }
    };

    fetchData();
  }, [page, refetch]);

  const handleDelete = async (id: string) => {
    try {
      await axiosInstance.delete(`/blog-category/${id}`);
      setRefetch(prev => !prev)
    } catch (error) {
      console.error("Failed to delete blog category:", error);
    }
  };

  const headings = ["Category Name", "Created At", "Status", "Action"];
  const data = packages?.data.map((item: any) => ({
    "Category Name": item.name,
    "Status": (item.status ? "Active" : "Non Active"),
    "Created At": dayjs(item.createdAt).format("DD-MM-YYYY HH:mm"),
    "Action": (
      <div className="flex items-center gap-5">
        <DialogCategory refetch={setRefetch} data={value} >
          <Pencil color="red" size={15} className="cursor-pointer" onClick={() => handleDialog(item.id)}/>
        </DialogCategory>
        <button onClick={() => handleDelete(item.id)} className="text-red-500">
          <Trash color="red" size={15} />
        </button>
      </div>
    ),
  }));

  const filteredData = data?.filter((row: any) =>
    headings.some((key) =>
      String(row[key]).toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <main className="w-full flex flex-col gap-12">
      <Header title={"Blog Category"} />
      <section className="flex flex-col gap-16 p-8 rounded-3xl bg-white border border-border shadow-sm w-full min-h-[50vh] items-center">
        <div className="w-full flex-col items-center">

          <div className="flex flex-col gap-2 text-sm text-gray-600 justify-start w-full">
            <h1 className="text-4xl font-semibold text-black">All Category</h1>
            <p>showing all category</p>
          </div>

          <div className="flex justify-between items-center w-full mt-8">
            <div className=" flex gap-2 items-center p-2 border border-border rounded-lg">
              <Input
                type="text"
                placeholder={`Search Category`}
                className="px-3 h-10 border-0 rounded-lg focus-visible:ring-1 focus-visible:ring-gray-400 w-full min-w-64 placeholder:text-sm text-gray-600"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button
                variant={"addData"}
                onClick={() => setIsOpen((prev) => !prev)}
              >
                Search
              </Button>
            </div>
            <DialogCategory refetch={setRefetch}>
              <Button
                variant={"addData"}
                size={"sm"}
                className="flex gap-2 items-center"
              >
                <CirclePlus size={20} /> Add Category
              </Button>
            </DialogCategory>
          </div>
        </div>

        <TableComponents headings={headings} data={filteredData || []} />

        <PaginationComponents
          handleNext={handleNext}
          handlePrev={handlePrevious}
          page={page}
          setPage={handleChangePage}
          totalPage={packages?.pagination.totalPages || 1}
          totalData={packages?.pagination.total || 0}
          currentData={filteredData?.length || 0}
        />
      </section>
    </main>
  );
}
