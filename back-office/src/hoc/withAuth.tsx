"use client";

import { useAuthStore } from "@/app/store/login";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";

export function withAuth(Component: any) {
  return function AuthenticatedComponent(props: any) {
    const router = useRouter();
    const pathname = usePathname();
    const setToken = useAuthStore((state) => state.setToken);

    useEffect(() => {
      const token = typeof window !== "undefined" ? sessionStorage.getItem("token") : null;
      const features = [
        "role",
        "dashboard",
        "role",
        "blog",
        "services",
        "meta",
      ]

      if (!token) {
        router.push("/login");
        return;
      }

      try {
        const decoded = jwtDecode(token);
        setToken(token);

        const currentUrl = pathname.split("/").filter(Boolean)[0]; 
        let requiredFeature = null;
        if(currentUrl === "user"){
          requiredFeature = "role"
        }

        if (!features.includes(requiredFeature || currentUrl)) {
          router.push("/dashboard"); 
          return;
        }
      } catch (error) {
        console.error("Invalid token", error);
        sessionStorage.removeItem("token");
        router.push("/login");
      }
    }, [pathname]);

    return <Component {...props} />;
  };
}