"use client"

import { useAuthStore } from '@/app/store/login';
import BreadCrumbComponents from '@/components/partials/breadcrumb/BreadCrumbComponents'
import { SidebarTrigger } from '@/components/ui/sidebar';
import { withAuth } from '@/hoc/withAuth';
import { axiosAuthInstance } from '@/lib/axios';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react'

const Header = (params: { title: string, label?: string }) => {
  const path = usePathname();
  const name = useAuthStore((state) => state.name);
  const role = useAuthStore((state) => state.role);
  const logout = useAuthStore((state) => state.clearUser);
  const router = useRouter()
  const handleLogout = async () => {
    await axiosAuthInstance.delete('/logout')
    sessionStorage.removeItem('token')
    logout();
    window.location.reload();
  }
  return (
    <header className="w-full flex items-center justify-between py-6 text-slate-950 border-b-[1px] border-gray-300 shadow-sm">
      <div className='flex flex-col gap-3'>
        <h1 className='font-semibold sm:text-3xl text-lg'>{params.title}</h1>
        {params.label && <BreadCrumbComponents data={`${params.label}/${path}`} />}
      </div>
      {
        name &&
        <div className='flex items-center gap-5'>
          <button className='flex items-end text-end gap-5'>
            <span onClick={handleLogout}>{name} <br /> <span className='text-red-800'>{role}</span></span>
          </button>
          <SidebarTrigger />
        </div>
      }
    </header>
  )
}

export default withAuth(Header)