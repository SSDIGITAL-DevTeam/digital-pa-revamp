"use client";

import { Button } from "@/components/ui/button";
import axios from "axios";
import { CirclePlus, ListFilter, Pencil, Search, Star, Trash } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import TableComponents from "@/components/partials/table/TableComponents";
import Header from "@/components/layout/header/Header";
import { failedToast } from "@/utils/toast";
import { axiosAuthInstance, axiosInstance } from "@/lib/axios";
import { useRouter, useSearchParams } from "next/navigation";
import PaginationComponents from "@/components/partials/pagination/Pagination";
import { init } from "next/dist/compiled/webpack/webpack";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { jwtDecode } from "jwt-decode";
import { useAuthStore } from "@/store/login";

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
  const [email, setEmail] = useState<string | undefined>(undefined);
  const logout = useAuthStore((state) => state.clearUser);

  // const filteredData = data?.filter((row: any) =>
  //   headings.some((key) =>
  //     String(row[key]).toLowerCase().includes(searchQuery.toLowerCase())
  //   )
  // );
  useEffect(() => {
    const fetchToken = () => {
      const token = sessionStorage.getItem("token");
      if (!token) return null
      const decoded = jwtDecode(token) as any;
      if (decoded?.email) {
        setEmail(email);
      }
    }
    fetchToken()
  }, [])

  const handleLogout = async () => {
    await axiosAuthInstance.delete('/logout')
    sessionStorage.removeItem('token')
    logout();
    window.location.reload();
  }

  return (
    <main className="w-full flex flex-col gap-12">
      <Header title={"Profile"} />
      <section className="flex flex-col gap-16 p-8 rounded-3xl bg-white border border-border shadow-sm w-full min-h-[50vh] items-center">
        <div className="w-full flex-col items-center">

          <div className="flex gap-2 items-center text-sm text-gray-600 justify-between w-full">
            <h1 className="text-4xl font-semibold text-black">Profile Details</h1>
            <Link href="/profile/change-password">
              <Button
                variant={"ghost"}
                size={"sm"}
                className="flex gap-2 items-center text-red-700 font-semibold hover:text-red-800"
              >
                Change Password
              </Button>
            </Link>
          </div>
        </div>

        <div className="w-full flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <Label className="capitalize font-semibold mb-2 text-base">Email</Label>
            <Input readOnly defaultValue={email} disabled={true} className="bg-gray-200" />
          </div>
          <div className="flex flex-col gap-2">
            <Label className="capitalize font-semibold mb-2 text-base">Password</Label>
            <Input readOnly defaultValue={`******`} disabled={true} className="bg-gray-200" />
          </div>
        </div>
        <div className="w-full flex justify-end">
          <Button
            type="submit"
            variant={"addData"}
            size={"sm"}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>
      </section>
    </main>
  );
}
