"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import successModalImage from "@/assets/our-services/webp/success-modal.png"
import { useRouter } from "next/navigation";
export default function SuccessPage() {
    const router = useRouter();
    return (
        <main className="w-full">
            <section className="max-w-5xl mx-auto flex flex-col items-center gap-9 h-full justify-center py-32 sm:py-40">
                <Image src={successModalImage.src} alt="success-modal" width={1920} height={1080} className="h-20 w-20 sm:h-32 sm:w-32 md:h-44 md:w-44 bg-gray-50/60 rounded-full shadow-md" />
                <div className="space-y-4">
                    <h2 className="text-xl md:text-4xl text-center text-gray-800">Thanks for Reaching Out!</h2>
                    <p className="text-center text-gray-600 !leading-[150%] text-sm md:text-lg max-w-[70%] mx-auto">We’re glad you got in touch! Our team has received your details and will contact you shortly to help with your needs.</p>
                </div>
                <div>
                    <Button className="bg-red-600 hover:bg-red-700 duration-300 transition-all text-white w-full font-semibold py-6 text-sm md:text-lg" type="button" onClick={() => router.push("/")}>Continue</Button>
                </div>
            </section>
        </main>
    )
}