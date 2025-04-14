import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Sidebarcomponents } from "@/components/partials/sidebar/SidebarComponents";
import { Toaster } from "@/components/ui/sonner";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
    metadataBase: new URL("https://digital-pa.com"),
  title: "Digital PA",
  description: "Digital PA",
  icons: {
    icon: "/assets/png/asset-logo.webp",
  },
  openGraph: {
    title: 'Digital PA | Digital PA',
    description: 'Digital PA.',
    images: '/assets/png/asset-logo.webp',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SidebarProvider>
          <Sidebarcomponents />
          <div className="bg-slate-50 w-full px-2 md:px-12">
            {children}
          </div>
          <Toaster />
        </SidebarProvider>
      </body>
    </html>
  );
}