import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: 'Insights | Your Digital Partner in Digital Products',
  description: 'Digital PA - Your digital partner in digital products',
}
export default function Layout({ children }: { children: React.ReactNode }) {
  return <Suspense fallback={<div></div>}>{children}</Suspense>;
}
