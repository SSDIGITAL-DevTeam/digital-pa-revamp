import { Suspense } from "react";

import { seoMetadata } from '@/constants/metadata/metadata'; 

export const metadata = seoMetadata.insights; 

export default function Layout({ children }: { children: React.ReactNode }) {
  return <Suspense fallback={<div></div>}>{children}</Suspense>;
}
