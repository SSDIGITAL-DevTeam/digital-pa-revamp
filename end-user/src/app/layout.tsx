import type { Metadata } from 'next'
import './globals.css'
import { Providers } from './providers'
// import Navbar from '@/components/layouts/Navbar'
import Footer from '@/components/layouts/Footer'
import NextUINavbar from '@/components/layouts/Navbar/NextUINavbar'
import NextTopLoader from 'nextjs-toploader'
import { Toaster } from 'sonner'

export const metadata: Metadata = {
    metadataBase: new URL('https://digital-pa.com.sg/'),
    title: 'Homepage | Your Digital Partner in Digital Products',
    description: 'Digital PA - Your digital partner in digital products',
    keywords: [
        'Digital Marketing',
        'Marketing Automation',
        'Social Media Marketing',
        'SEO',
    ],
    openGraph: {
        title: 'Digital PA | Your Digital Partner in Digital Products',
        description: 'Digital PA - Your digital partner in digital products',
        images: '/asset-logo.webp',
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en'>
            <body className='bg-[url("/webp/asset-background.webp")] bg-cover bg-center bg-no-repeat'>
                <NextTopLoader color='#DB1222' showSpinner={false} />

                <Toaster />

                <Providers>
                    <div className='flex min-h-screen flex-col'>
                        {/* <Navbar /> */}
                        <NextUINavbar />

                        {children}

                        <div className='mt-auto'>
                            <Footer />
                        </div>
                    </div>
                </Providers>
            </body>
        </html>
    )
}
