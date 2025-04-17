"use client"

import Header from "@/components/layout/header/Header";
import { ArrowUpRightFromCircle } from "lucide-react";
import { useEffect, useReducer, useState } from "react";

import { JwtPayload } from "jwt-decode";
import { axiosInstance } from "@/lib/axios";
import { failedToast } from "@/utils/toast";
import { Button } from "@/components/ui/button";
import PaginationComponents from "@/components/partials/pagination/Pagination";
import { useRouter, useSearchParams } from "next/navigation";
import { downloadCSV } from "@/utils/convertToCSV";
// import { Input } from "@/components/ui/input";
// import SelectField from "@/components/partials/form/SelectField";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
interface CustomJwtPayload extends JwtPayload {
  name: string;
  role: string;
  features: string[];
}

interface BlockCardProps {
  text: string;
  value: number;
  className?: string;
  logo?: boolean;
}

const initialState = {
  totalUsers: 0,
  publishedBlogs: 0,
  takedownBlogs: 0,
  draftBlogs: 0,
  totalBlogCategories: 0,
  leads: [],
  totalLeads: {total : 0, totalPages : 0},
  loading: true,
  error: null,
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        ...state,
        ...action.payload,
        loading: false,
        error: null,
      };
    case "FETCH_ERROR":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default function Page(): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [page, setPage] = useState<number>(1);
  const [filter, setFilter] = useState<string | undefined>(undefined);

  const searchParams = useSearchParams();
  const router = useRouter();

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
    if (leads && page < totalLeads.totalPages) {
      handleChangePage(page + 1);
    }
  };

  const handlePrevious = () => {
    if (page > 1) {
      handleChangePage(page - 1);
    }
  };

  useEffect(() => {
    fetchAllData();
  }, [filter, page]);

  const fetchAllData = async () => {
    try {
      const endpoints = [
        { url: "/user", params: { page, limit: 5, createdAt: filter } },
        { url: "/blog", params: { limit: 1, status: "Published", createdAt: filter } },
        { url: "/blog", params: { limit: 1, status: "Archived", createdAt: filter } },
        { url: "/blog", params: { limit: 1, status: "Draft", createdAt: filter } },
        { url: "/blog-category", params: { limit: 1, createdAt: filter } },
        { url: "/lead", params: { page, limit: 5, createdAt: filter } },
      ];

      const responses = await Promise.all(
        endpoints.map(({ url, params }) =>
          axiosInstance.get(url, { params })
        )
      );

      dispatch({
        type: "FETCH_SUCCESS",
        payload: {
          totalUsers: responses[0].data.pagination.total,
          publishedBlogs: responses[1].data.pagination.total,
          takedownBlogs: responses[2].data.pagination.total,
          draftBlogs: responses[3].data.pagination.total,
          totalBlogCategories: responses[4].data.pagination.total,
          leads: responses[5].data.data,
          totalLeads: responses[5].data.pagination,
        },
      });
    } catch (error: any) {
      dispatch({ type: "FETCH_ERROR", payload: error.message });
    }
  };


  const {
    totalUsers,
    publishedBlogs, takedownBlogs, draftBlogs,
    totalBlogCategories,leads, totalLeads, loading, error,
  } = state;

  // if (loading) return <p className="text-center"></p>;
  // if (loading) failedToast(
  //   <p className="text-xl font-semibold text-red-900">Failed</p>,
  //   <p className="text-xs text-red-300 mt-2">{
  //     error || "Error processing data"
  //   }
  //   </p>
  // );

  const BlockCard: React.FC<BlockCardProps> = ({ text, value, className, logo }) => (
    <div
      className={`h-full w-full rounded-lg shadow-md hover:shadow-lg transition-all p-5 flex flex-col gap-4 ${className || "text-black bg-white"
        }`}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-base">{text}</h2>
        {logo && <ArrowUpRightFromCircle className="max-h-5 max-w-5 text-red-700" />}
      </div>
      <p className="text-4xl font-semibold">{value}</p>
    </div>
  );

  const SelectFilter = ({ data }: { data: { value: string | undefined, title: string }[] }) => {
    return (
      <Select onValueChange={(value) => setFilter(value)} value={filter}
      >
        <SelectTrigger className="p-2 h-10 text-sm font-semibold rounded-sm border-0 shadow-sm">
          <SelectValue placeholder="" />
        </SelectTrigger>
        <SelectContent>
          {data.map((item: any, index: number) => (
            <SelectItem key={index} value={item.value} className="font-semibold">
              {item.title}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    )
  }

  const filterDate = [
    { value: "today", title: "Today" },
    { value: "week", title: "This Week" },
    { value: "month", title: "This Month" },
    { value: "year", title: "This Year" },
    { value: undefined, title: "All Time" },
  ]

  // console.log(users)
  return (
    <main className="w-full flex flex-col gap-12 pb-20">
      <Header title="Admin Dashboard" />
      <section className="flex flex-col gap-8 w-full min-h-[50vh] items-center">
        {/* User Section */}
        <div className="w-full flex justify-between items-start">
          <div className="flex flex-col gap-4 w-full">
            <h1 className="text-xl font-semibold">Total Leads</h1>
            <div className="w-[50%] h-36">
              <BlockCard text={`Total Per-${filter || "All Time"}`} value={totalUsers} />
            </div>
          </div>
          <div className="flex gap-4 w-[50%] items-center">
            <h1 className="text-base text-gray-500 font-semibold">Filter</h1>
            <SelectFilter data={filterDate} />
          </div>
        </div>

        {/* Blog Section */}
        <div className="flex flex-col gap-4 w-full">
          <h1 className="text-xl font-semibold">Blog Management</h1>
          <div className="w-full h-36 grid grid-cols-4 gap-6">
            <BlockCard text="Published Blog" value={publishedBlogs} logo={true} />
            <BlockCard text="Archived Blog" value={takedownBlogs} logo={true} />
            <BlockCard text="Total Draft" value={draftBlogs} logo={true} />
            <BlockCard text="Total Blog Category" value={totalBlogCategories} logo={true} />
          </div>
        </div>
      </section>
      <section
        className={`h-full w-full rounded-lg shadow-md hover:shadow-lg transition-all p-5 flex flex-col gap-8 text-black bg-white`}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-xl">Current Leads</h2>
          <Button onClick={() => downloadCSV(leads, 'data.csv')} variant={"destructive"} className="flex items-center gap-2"> <ArrowUpRightFromCircle className="max-h-5 max-w-5" />Export Data</Button>
        </div>
        <table className="w-full border-collapse">
          <thead className="w-full">
            <tr className="w-full">
              <th className="text-red-700 px-4 py-2 text-left w-1/5">Name</th>
              <th className="text-red-700 px-4 py-2 text-left w-1/5">Email Address</th>
              <th className="text-red-700 px-4 py-2 text-left w-1/5">Phone Number</th>
              <th className="text-red-700 px-4 py-2 text-left w-1/5">Business Category</th>
              <th className="text-red-700 px-4 py-2 text-left w-1/5">Message</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead: any) => {
              // const formatFeatures = lead.lead.features.map((feature: any) => feature).join(", ");
              return (
                <tr key={lead.lead.id} className="border-b">
                  <td className="px-4 py-2">{lead.lead.name}</td>
                  <td className="px-4 py-2">{lead.lead.email}</td>
                  <td className="px-4 py-2">{lead.lead.phone}</td>
                  <td className="px-4 py-2">{lead.lead.business}</td>
                  <td className="px-4 py-2">{lead.lead.message}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <PaginationComponents
          handleNext={handleNext}
          handlePrev={handlePrevious}
          page={page}
          setPage={handleChangePage}
          totalPage={totalLeads.totalPages || 1}
          totalData={totalLeads.total || 1}
          currentData={leads.length}
        />

      </section>
    </main>
  );
}
