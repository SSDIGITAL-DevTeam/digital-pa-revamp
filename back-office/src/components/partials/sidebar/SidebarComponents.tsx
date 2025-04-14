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
import { useAuthStore } from "@/app/store/login"
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
    url: "/user",
    icon: User,
  },
]


export function Sidebarcomponents() {
  const pathname = usePathname()
  const router = useRouter()
  const [hasToken, setHasToken] = useState<boolean | null>(null)
  const tokenName = useAuthStore((state) => state.name);
  const features = useAuthStore((state) => state.features);


  useEffect(() => {
    if (tokenName) {
      setHasToken(true);
      return;
    }

    const token = sessionStorage.getItem("token");
    if (!token) {
      router.push("/login");
    } else {
      setHasToken(true);
    }
  }, [tokenName]);
  if (!hasToken) return null;

  // const filteredItems = items
  //   .filter(
  //     (group) => group.feature === "dashboard" || features.includes(group.feature)
  //   )

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
