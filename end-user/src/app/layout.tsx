import { Manrope, Sora } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import Footer from '@/components/layouts/Footer'
import Navbar from '@/components/layouts/Navbar'
import NextTopLoader from 'nextjs-toploader'
import { Toaster } from 'sonner'
import { seoMetadata } from '@/constants/metadata/metadata'
import Script from 'next/script'

// Optimize font loading with Next.js Font
const manrope = Manrope({
    subsets: ['latin'],
    variable: '--font-manrope',
    display: 'swap',
    preload: true,
})

const sora = Sora({
    subsets: ['latin'],
    variable: '--font-sora',
    display: 'swap',
    preload: true,
})

export const metadata = seoMetadata.home

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en' className={`${manrope.variable} ${sora.variable}`}>
            <head>
                {/* Preconnect to external domains */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link rel="preconnect" href="https://www.google.com" />
                <link rel="preconnect" href="https://www.gstatic.com" />
            </head>
            <body className={`${manrope.className} ${sora.className}`}>
                <div className='bg-[url("/webp/asset-background.webp")] bg-cover bg-center bg-no-repeat'>
                    <NextTopLoader color='#DB1222' showSpinner={false} />
                    <Navbar />
                    <Toaster />
                    <Providers>
                        <div className='flex min-h-screen flex-col'>
                            {children}
                            <div className='mt-auto'>
                                <Footer />
                            </div>
                        </div>
                    </Providers>
                </div>

                {/* Load reCAPTCHA with defer strategy */}
                <Script
                    src="https://www.google.com/recaptcha/api.js"
                    strategy="lazyOnload"
                />
            </body>
        </html>
    )
}
