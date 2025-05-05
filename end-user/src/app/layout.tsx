import './globals.css'
import { Providers } from './providers'
import Footer from '@/components/layouts/Footer'
import NextUINavbar from '@/components/layouts/Navbar/NextUINavbar'
import NextTopLoader from 'nextjs-toploader'
import { Toaster } from 'sonner'
// import WhatsappButton from '@/components/partials/Button/WhatsappButton'
import { seoMetadata } from '@/constants/metadata/metadata'; 

export const metadata = seoMetadata.home;

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
                {/* <WhatsappButton/> */}
            </body>
        </html>
    )
}
