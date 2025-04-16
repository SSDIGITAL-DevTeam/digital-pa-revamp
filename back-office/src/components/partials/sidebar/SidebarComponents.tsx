'use client'
import { User } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Logo from "@/asset/logo/webp/asset-logo-with-text.webp"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useAuthStore } from "@/store/login"
import { jwtDecode } from "jwt-decode"
import { features } from "process"

// Menu items.
const items = [
  {
    feature: "dashboard",
    title: "Dashboard",
    url: "/dashboard",
    icon: User,

  },
  {
    feature: "blog-category",
    title: "Blog Category",
    url: "/blog/blog-category",
    icon: User,
  },
  {
    feature: "blog",
    title: "Blog Post",
    url: "/blog/blogs",
    icon: User,
  },

  {
    feature: "role",
    title: "Profile",
    url: "/profile",
    icon: User,
  },
]


export function Sidebarcomponents() {
  const pathname = usePathname()
  const router = useRouter()
  const [hasToken, setHasToken] = useState<boolean | null>(null)
  const tokenName = useAuthStore((state) => state.name);
  // const id = useAuthStore((state) => state.id);
  // const role = useAuthStore((state) => state.role);
  // const features = useAuthStore((state) => state.features);
  const setToken = useAuthStore((state) => state.setToken);
  const protectedRoutes = [
    "dashboard",
    "blog",
    "profile",
  ]
  useEffect(() => {
    if (tokenName) {
      setHasToken(true);
      return;
    }

    const token = sessionStorage.getItem("token");
    if (!token && protectedRoutes.includes(pathname.split("/")[1])) {
      router.push("/login");
    } else if (token) {
      setToken(token);
      setHasToken(true);
    }
  }, [tokenName, pathname]);
  if (!hasToken) return null;

  return (
    <Sidebar>
      <SidebarHeader className="px-8 pt-8 flex flex-row items-center justify-between">
        <Image src={Logo.src} alt="Logo Octobees" width={1000} height={1000} priority quality={100} className="object-contain w-[12rem]" />

      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          {
            items.map((d, i) => (
              <div key={i}>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild className={`${pathname.startsWith(d.url) && "rounded-xl bg-red-700 font-semibold text-white"}`}>
                        <a href={d.url} className="flex gap-2 items-center">
                          <d.icon size={15} />
                          <p>{d.title}</p>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </div>
            ))
          }
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}