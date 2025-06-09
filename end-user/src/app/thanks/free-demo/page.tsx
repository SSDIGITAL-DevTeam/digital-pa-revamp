"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import successModalImage from "@/assets/services/webp/success-modal.png"
import { useRouter } from "next/navigation";
import Script from "next/script";
export default function SectionThanks() {
    const router = useRouter();
    return (
        <>
            <Script id="fb-pixel" strategy="afterInteractive">
                {`
          !function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '2198314697281263');
fbq('track', 'PageView');
        `}
            </Script>

            <noscript>
                <img height="1" width="1" style={{ display: 'none' }} alt="fb-pixel"
                    src="https://www.facebook.com/tr?id=2198314697281263&ev=PageView&noscript=1" />
            </noscript>
            <main className="w-full">
                <section className="max-w-5xl mx-auto flex flex-col items-center gap-9 h-full justify-center py-32 sm:py-40">
                    <Image src={successModalImage.src} priority alt="success-modal" width={1920} height={1080} className="h-20 w-20 sm:h-32 sm:w-32 md:h-44 md:w-44 bg-gray-50/60 rounded-full shadow-md" />
                    <div className="space-y-4">
                        <h2 className="text-xl md:text-4xl text-center text-gray-800">Thank You for Your Enquiry</h2>
                        <p className="text-center text-gray-600 !leading-[150%] text-sm md:text-lg max-w-[70%] mx-auto">
                            Our team has received your details and will be in touch shortly to assist you.
                        </p>
                    </div>
                    <div>
                        <Button className="bg-red-600 hover:bg-red-700 duration-300 transition-all text-white w-full font-semibold py-6 text-sm md:text-lg" type="button" onClick={() => router.push("/")}>Return to Homepage</Button>
                    </div>
                </section>
            </main>
        </>
    )
}