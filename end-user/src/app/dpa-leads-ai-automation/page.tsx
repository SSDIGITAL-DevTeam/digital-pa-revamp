"use client"
import React, { JSX
    // , useEffect 
} from 'react'
import Image from 'next/image'
import { ArrowRightIcon, CircleCheck, Star } from 'lucide-react'
// import LocomotiveScroll from 'locomotive-scroll'

import gradientHeroRight from "@/assets/ai-automation/svg/gradient-hero-right.svg"
import gradientHeroLeft from "@/assets/ai-automation/svg/gradient-hero-left.svg"
import AssetLogoWithText from "@/assets/logo/webp/asset-logo-with-text.webp"

import ImageHeroDesktop from "@/assets/services/webp/landing-page-ai/image-landing-page-ai.webp"
import ImageHeroMobile from "@/assets/services/webp/landing-page-ai/image-hero-mobile.webp"

import ImageSoundLikeYou01 from "@/assets/services/webp/landing-page-ai/image-sound-like-you-01.webp"
import ImageSoundLikeYou02 from "@/assets/services/webp/landing-page-ai/image-sound-like-you-02.webp"
import ImageSoundLikeYou03 from "@/assets/services/webp/landing-page-ai/image-sound-like-you-03.webp"
import ImageSoundLikeYou04 from "@/assets/services/webp/landing-page-ai/image-sound-like-you-04.webp"
import ImageSoundLikeYou05 from "@/assets/services/webp/landing-page-ai/image-sound-like-you-05.webp"
import SectionGridDPALeads from './_components/SectionGridDPALeads'

import ImageDPALeads01 from "@/assets/services/webp/landing-page-ai/image-dpa-leads-01.webp"
import ImageDPALeads02 from "@/assets/services/webp/landing-page-ai/image-dpa-leads-02.webp"
import ImageDPALeads03 from "@/assets/services/webp/landing-page-ai/image-dpa-leads-03.webp"
import ImageDPALeads04 from "@/assets/services/webp/landing-page-ai/image-dpa-leads-04.webp"

import ImageWhyTrustDPA01 from "@/assets/services/webp/landing-page-ai/image-why-trust-dpa-01.webp"
import ImageWhyTrustDPA02 from "@/assets/services/webp/landing-page-ai/image-why-trust-dpa-02.webp"
import ImageWhyTrustDPA03 from "@/assets/services/webp/landing-page-ai/image-why-trust-dpa-03.webp"

import ImagePerfectFor01 from "@/assets/services/webp/landing-page-ai/image-perfect-for-01.webp"
import ImagePerfectFor02 from "@/assets/services/webp/landing-page-ai/image-perfect-for-02.webp"
import ImagePerfectFor03 from "@/assets/services/webp/landing-page-ai/image-perfect-for-03.webp"
import ImagePerfectFor04 from "@/assets/services/webp/landing-page-ai/image-perfect-for-04.webp"

import ImageDemo from "@/assets/services/webp/landing-page-ai/image-demo.webp"
import ImageSmartBusinessOwner from "@/assets/services/webp/landing-page-ai/image-smart-business-owner.webp"

import ConsultationButton from '@/components/partials/Button/Consultation'
import GradientSection from '../services/_components/GradientSection'
import Header from '../services/_components/Header'
import SectionGridImage from './_components/SectionGridImage'
import SectionRealResult from './_components/SectionRealResult'
import SectionFeatures from './_components/SectionFeatures'
import SectionTableSmartBusiness from './_components/SectionTableSmartBusiness'
import ImageTargetColor from "@/assets/services/svg/landing-page-ai/target-color.svg"
import Logo from '@/components/partials/Logo'
import Link from 'next/link'
import FormFreeDemo from './_components/FormFreeDemo'


const ListSoundLikeYou = [
    {
        icons: ImageSoundLikeYou01.src,
        title: "Leads are coming in from everywhere… and no one’s following up properly",
    },
    {
        icons: ImageSoundLikeYou02.src,
        title: "You’re stuck doing reminders, WhatsApp replies, and admin manually",
    },
    {
        icons: ImageSoundLikeYou03.src,
        title: "You’re juggling too many tools (CRM, WhatsApp, Email, Sheets)",
    },
    {
        icons: ImageSoundLikeYou04.src,
        title: "Sales are slipping because you’re not fast enough to follow up",
    },
    {
        icons: ImageSoundLikeYou05.src,
        title: "You’re paying for tools or agencies — but still doing everything yourself",
    }
]

const ListDPALeads = [
    {
        icons: ImageDPALeads01.src,
        title: "Capture leads from forms, ads, and referrals",
    },
    {
        icons: ImageDPALeads02.src,
        title: "Auto-reply, auto-book, auto-follow-up — across WhatsApp, Email & SMS",
    },
    {
        icons: ImageDPALeads03.src,
        title: "Appointment reminders + AI-powered chatbot",
    },
    {
        icons: ImageDPALeads04.src,
        title: "Centralised dashboard for tracking leads, progress, and team activity",
    }
]

const ListWhyTrustDPA = [
    {
        icons: ImageWhyTrustDPA01.src,
        title: "🏅 Trusted by 100+ SMEs in Singapore",
    },
    {
        icons: ImageWhyTrustDPA02.src,
        title: "✅ Built for Local SMEs with Real Business Needs",
    },
    {
        icons: ImageWhyTrustDPA03.src,
        title: "💯 Backed by a 100% Satisfaction Guarantee",
    }
]

const ListPerfectFor = [
    {
        title: "Sales Managers & Sales Teams",
        image: ImagePerfectFor01.src
    },
    {
        title: "Local Businesses (tuition, car rental, clinics, real estate)",
        image: ImagePerfectFor02.src
    },
    {
        title: "Coaches, Trainers, Consultants",
        image: ImagePerfectFor03.src
    },
    {
        title: "SME Owners ready to scale without growing headcount",
        image: ImagePerfectFor04.src
    },
]

const ListSmartBusiness = [
    {
        message: "DPA helped us stop wasting time. Our team now closes more with less stress. The automation just works.",
        name: "Marcus",
        position: "Sales Director"
    },
    {
        message: "We didn’t need to hire more — just smarter systems. DPA made the biggest impact this year.",
        name: "Adeline",
        position: "Business Owner"
    },
]

const ListDemo = [
    "How DPA Leads automates lead capture, replies, and bookings",
    "How to replace manual WhatsApp replies with auto AI sequences",
    "How smart SMEs in SG are scaling leaner and faster"
]

const ListSmartBusinessOwner = [
    "Close more sales — automatically",
    "Save time and reduce staff workload",
    "Control everything from one dashboard",
    "Be part of Singapore’s smart SME movement"
]



const AiAutomation: React.FC = (): JSX.Element => {
    // useEffect(() => {
    //     const locomotiveScroll = new LocomotiveScroll({
    //         lenisOptions: {
    //             wrapper: window,
    //             content: document.documentElement,
    //             lerp: 0.1,
    //             duration: 1.2,
    //             orientation: 'vertical',
    //             gestureOrientation: 'vertical',
    //             smoothWheel: true,
    //             wheelMultiplier: 1,
    //             touchMultiplier: 2,
    //             easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    //         },
    //     });
    //     return () => {
    //         locomotiveScroll.destroy();
    //     };
    // }, [])

    return (
        <main>
            <header className="w-full bg-white pt-10 md:pt-14">
                <div className="relative min-h-[80vh] md:min-h-[90vh] lg:min-h-screen overflow-hidden w-full lg:max-w-[95%] flex flex-col items-center justify-between lg:justify-start gap-y-8 lg:gap-y-8 lg:mx-auto py-12 lg:py-16 rounded-3xl">

                    <div className='max-w-[45vw] md:max-w-[30vw] lg:max-w-[18vw]'>
                        <Image
                            src={AssetLogoWithText}
                            alt="asset-logo-with-text"
                            width={1920}
                            height={1080}
                            className='w-full h-full'
                        />
                    </div>

                    <span className='z-[2] text-center py-2 px-6 rounded-full bg-white border-[2px] border-gray-300/50 shadow-sm font-semibold text-xs sm:text-base md:text-lg'>✅
                        <span className='text-primary'>One dashboard. One system. 10x productivity.</span>
                    </span>

                    <div className="z-[2] flex flex-col gap-3 md:gap-3 items-center px-5">
                        <h1 className="z-[2] lg:max-w-7xl !leading-[140%] text-3xl sm:text-3xl md:text-5xl max-w-6xl text-center w-full text-primary">
                            <span className='text-black'>Still Wasting Time Chasing Leads{" "}</span>Manually?
                        </h1>
                        <p className="z-[2] max-w-4xl text-center !leading-[150%] text-sm md:text-base lg:text-xl font-medium text-gray-600">
                            <span className='hidden md:inline'>Join the smart business owners who automate, scale, and win with AI-powered CRM.</span>
                            <span className='md:hidden'>Still Wasting Time Chasing Leads Manually?</span>
                        </p>
                    </div>

                    <Link href={"#consultation"} className='z-[2]'>
                        <button className={`z-[2] mt-0 w-fit text-center font-semibold rounded-2xl flex gap-2 items-center bg-primary py-4 px-6 md:py-4 text-white text-sm md:text-base`}
                        >
                            Schedule Your Free Demo<ArrowRightIcon className="h-5 w-5" />
                        </button>
                    </Link>

                    <div className='z-[1] w-full py-3 lg:absolute lg:-bottom-[10vh] lg:left-1/2 lg:-translate-x-1/2'>
                        <Image
                            src={ImageHeroDesktop}
                            alt="image-hero"
                            width={1920}
                            height={1080}
                            className='hidden md:block md:w-[70vw] h-full md:mx-auto'
                        />
                        <Image
                            src={ImageHeroMobile}
                            alt="image-hero"
                            width={1920}
                            height={1080}
                            className='w-[190vw] sm:w-[80vw] md:hidden'
                        />

                    </div>

                    <Image src={gradientHeroRight} alt="a" width={1920} height={1080} priority className="absolute bottom-80 md:-bottom-[60vh] -right-[50vw] opacity-80 md:opacity-50 scale-[200%]" />
                    <Image src={gradientHeroLeft} alt="b" width={1920} height={1080} priority className="absolute bottom-0 md:-bottom-[88vh] left-[-45vw] opacity-80 md:opacity-50 scale-[180%]" />
                </div>
            </header>

            {/* Does This Sound Like You? */}
            <section className="w-full bg-white py-12 lg:py-20 px-10 md:px-20 lg:px-5">
                <div className="lg:max-w-7xl flex flex-col items-center justify-center gap-12 lg:gap-16 lg:mx-auto">
                    <Header title="Does This Sound Like You?" className="lg:max-w-7xl capitalize" />
                    <SectionGridImage list={ListSoundLikeYou} />
                </div>
            </section>

            {/* Label */}
            <section className="w-full bg-primary py-10 lg:py-10 px-5 md:px-20 lg:px-5">
                <div className="lg:max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-5 lg:mx-auto">
                    <h1 className='text-center lg:text-left text-white !leading-[140%] text-lg sm:text-2xl md:text-3xl font-semibold md:font-bold md:max-w-3xl'>💡 Smart businesses don’t hustle harder.<br />They automate smarter.</h1>
                    <ConsultationButton text='Schedule Your Free Demo' color='full-white' />
                </div>
            </section>

            {/* DPA Leads */}
            <section className="w-full bg-white py-12 lg:py-32 px-5 md:px-20 lg:px-5">
                <div className="lg:max-w-7xl flex flex-col items-center justify-center gap-6 lg:gap-6 lg:mx-auto">
                    <span className='text-center py-2 px-4 rounded-full bg-white border-2 border-primary/60 shadow-sm font-semibold text-sm sm:text-base md:text-lg max-w-[60vw]'>🚀{" "}
                        <span className='bg-gradient-to-r from-pink-600 to-orange-400 text-transparent bg-clip-text'>What is DPA Leads?</span>
                    </span>
                    <Header title={<><span className='text-black'>DPA Leads is an{" "}</span>AI + CRM Automation<span className='text-black'>{" "}Platform built for smart businesses that want to scale faster with less manpower</span></>} className="lg:max-w-7xl w-full capitalize text-xl md:text-3xl !leading-[150%]" />
                    <div className='flex w-full justify-center md:mt-10' >
                        <SectionGridDPALeads list={ListDPALeads} />
                    </div>
                </div>
            </section>

            {/* Trust DPA Leads */}
            <section className="w-full bg-[#F7F7F7] py-12 lg:py-20 px-10 md:px-20 lg:px-5">
                <div className="lg:max-w-7xl flex flex-col items-center justify-center gap-12 lg:gap-16 lg:mx-auto">
                    <Header title={<><span className='text-black'>Why Smart Businesses{" "}</span>Trust DPA Leads</>} subtitle="Whether you’re advertising on Facebook, Instagram, Google, or using referrals — we help you convert more, faster. Imagine waking up to a calendar full of pre-qualified, interested customers." className="lg:max-w-7xl capitalize text-2xl md:text-3xl lg:text-4xl" subClassName='text-sm md:text-xl lg:max-w-4xl' />
                    <SectionGridImage list={ListWhyTrustDPA} className="lg:h-fit" />
                </div>
            </section>

            {/* Label */}
            <section className="w-full bg-primary py-10 lg:py-10 px-10 md:px-20 lg:px-5">
                <div className="lg:max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-5 lg:mx-auto">
                    <h1 className='text-center lg:text-left text-white !leading-[140%] text-lg sm:text-2xl md:text-3xl font-semibold md:font-bold max-w-3xl'>💡 Smart businesses don’t wait to catch up.{" "}<br className='hidden md:flex' />They automate and lead.</h1>
                    <ConsultationButton text='Book My Free Demo Now' color='full-white' />
                </div>
            </section>

            {/* Perfect For */}
            <section className="w-full bg-[#F7F7F7] py-12 lg:py-20 px-10 md:px-20 lg:px-5">
                <div className="lg:max-w-7xl flex flex-col items-center justify-center gap-12 lg:gap-16 lg:mx-auto">
                    <div className='flex flex-col justify-center items-center space-y-2'>
                        <h1 className='text-center text-primary font-normal !leading-[140%] text-base md:text-xl'>Who Is This For</h1>
                        <span className='font-extrabold text-black text-center text-2xl md:text-4xl'>Perfect For : </span>
                    </div>
                    <GradientSection data={ListPerfectFor} name="perfect-for-image" bigText={true} />
                    <ConsultationButton text='Book My Free Demo Now' />
                </div>
            </section>

            {/* Real Results, Real Impact */}
            <section className="w-full bg-white py-12 lg:py-20 px-10 md:px-20 lg:px-5">
                <div className="lg:max-w-7xl flex flex-col md:flex-row items-center justify-between gap-10 lg:mx-auto">
                    <div className='w-full flex flex-col space-y-8'>
                        <span className='text-6xl hidden md:block'>📊{" "}</span>
                        <h1 className='text-black !leading-[140%] text-2xl md:text-3xl lg:text-4xl text-center md:text-left'>
                            <span className='md:hidden'>📊</span>
                            Real Results, Real Impact</h1>
                        <div className='hidden md:flex md:justify-start w-full'>
                            <ConsultationButton text='Book My Free Demo Now' className="md:px-5" />
                        </div>
                    </div>
                    <SectionRealResult />
                    <div className='md:hidden flex justify-center w-full'>
                        <ConsultationButton text='Book My Free Demo Now' className="md:px-5" />
                    </div>
                </div>
            </section>

            {/* Features That Do The Work For You */}
            <section className="w-full bg-white pt-12 lg:pt-20">
                <div className="w-full flex flex-col items-center justify-center gap-y-4">
                    <Header title={<><span className='text-black'>Features That{" "}</span>Do The Work For You</>} className="lg:max-w-7xl capitalize text-2xl md:text-4xl" />
                    <div className='w-full'>
                        <SectionFeatures />
                    </div>
                </div>
            </section>

            {/* Why Smart Businesses Are Switching */}
            <section className="w-full bg-white py-12 lg:py-20 px-0 md:px-10 lg:px-5">
                <div className="lg:max-w-7xl flex flex-col items-center justify-center gap-12 lg:gap-16 lg:mx-auto">
                    <Header title={<><span className='text-black'>Why Smart Businesses Are{" "}</span>Switching</>} className="lg:max-w-7xl capitalize text-2xl md:text-3xl" />
                    <div className='w-full md:scale-100 sm:scale-[0.98] scale-[0.95]'>
                        <SectionTableSmartBusiness />
                    </div>
                </div>
            </section>

            {/* What Smart Business Owners Say */}
            <section className="w-full bg-[#F7F7F7] py-12 lg:py-20 px-5 md:px-20 lg:px-5">
                <div className="lg:max-w-7xl flex flex-col items-center justify-center gap-12 lg:gap-16 lg:mx-auto">
                    <Header title={<><span className='text-black'>What{" "}</span>Smart Business Owners<span className='text-black'>{" "}Say</span></>} className="lg:max-w-7xl capitalize text-2xl md:text-3xl" />
                    <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-6'>
                        {
                            ListSmartBusiness.map((d, i) => (
                                <div key={`smart-business-${i}`} className='flex flex-col justify-between h-[30vh] rounded-3xl overflow-hidden bg-white p-10'>
                                    <div className='space-y-5'>
                                        <p className='text-sm md:text-base!leading-[150%] text-gray-700'>{d.message}</p>
                                        <span className='flex gap-x-[2px]'>{
                                            Array(5).fill(<Star fill='#E5B927' color='#E5B927' className='w-4 h-4' />)}
                                        </span>
                                    </div>
                                    <div className='space-y-2'>
                                        <h2 className='text-primary !leading-[120%] text-sm md:text-xl'>{d.name}</h2>
                                        <span className='block text-gray-700 !leading-[120%] text-sm md:text-base'>{d.position}</span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>

            {/* Label */}
            <section className="relative overflow-y-hidden w-full bg-primary py-10 lg:py-16 px-5 md:px-20 lg:px-5">
                <div className='absolute top-6 md:top-0 -left-10 md:left-20 w-[30vw] md:w-[15vw]'>
                    <Image
                        src={ImageTargetColor}
                        alt='image-target-color'
                        className='w-full h-full object-contain rotate-90'
                    />
                </div>
                <div className="lg:max-w-7xl flex flex-col lg:flex-row md:items-center justify-between gap-5 lg:mx-auto pl-20 md:pl-52">
                    <h1 className='text-left text-white !leading-[140%] text-lg sm:text-2xl md:text-3xl max-w-3xl font-semibold md:font-bold z-[20]'>Real businesses. Real results. Zero fluff.</h1>
                    <ConsultationButton text='Book My Free Demo Now' color='full-white' className="md:px-5 z-[20]" />
                </div>
            </section>

            {/* What Happens in the Demo? */}
            <section className="w-full bg-white">
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <Image
                        src={ImageDemo}
                        alt='image-trust-dpa'
                        className='w-full h-full object-cover order-2 md:order-1'
                    />
                    <div className="w-full md:max-w-[58%] flex flex-col justify-center items-center md:items-start gap-5 lg:gap-6 py-12 lg:py-32 px-10 md:px-5 md:mx-auto order-1 md:order-2">
                        <h1 className='text-center md:text-left text-2xl md:text-3xl lg:text-4xl w-full text-black !leading-[140%]'>What Happens in the Demo?</h1>
                        <ul className='space-y-5'>
                            {
                                ListDemo.map((d, i) => (
                                    <li key={`demo-${i}`} className='flex gap-x-4 items-center'>
                                        <CircleCheck fill='#db1222' className='h-10 md:h-6 text-white' />
                                        <span className='!leading-[150%] text-primary text-base md:text-lg '>{d}</span></li>
                                ))
                            }
                        </ul>
                        <p className='text-center md:text-left font-semibold text-gray-900 text-base md:text-lg py-4'>⏱️ Takes just 15 minutes — no obligation, all value.</p>
                        <ConsultationButton text='Book Free Demo' className="md:px-10" />
                    </div>
                </div>
            </section>

            {/* Form Free Demo */}
            <section className="w-full bg-[#F7F7F7] py-12 lg:py-20 px-10 md:px-20 lg:px-5">
                <div className="lg:max-w-7xl flex flex-col items-center justify-center gap-12 lg:gap-16 lg:mx-auto">
                    <Header title={<>Let’s Talk<span className='text-black'>– Join the Smart Businesses Using DPA Leads</span></>} subtitle="📝 Fill in your details and we’ll be in touch with your complimentary demo:" className="lg:max-w-7xl uppercase text-2xl md:text-3xl" subClassName='text-sm md:text-xl lg:max-w-4xl' />
                    <FormFreeDemo />
                </div>
            </section>

            {/* Where Smart Business Owners Automate, Scale, and Win */}
            <section className="w-full bg-white py-12 lg:py-20 px-10 md:px-20 lg:px-5">
                <div className="lg:max-w-7xl grid grid-cols-1 md:grid-cols-2 items-center gap-12 lg:gap-16 lg:mx-auto">
                    <div className='space-y-8'>
                        <span className='bg-red-100/60 rounded-3xl py-3 px-5 text-sm font-bold text-primary md:text-lg'>⚠️ 94% Demo Booked !!</span>
                        <h1 className='text-2xl sm:text-4xl w-full text-black !leading-[140%]'>Where Smart Business Owners{" "}<span className='text-primary'>Automate, Scale, and Win 📈</span></h1>
                        <ul className='space-y-3 md:space-y-5 max-w-md'>
                            {
                                ListSmartBusinessOwner.map((d, i) => (
                                    <li key={`smart-business-owner-${i}`} className='flex gap-x-4 items-center'>
                                        <CircleCheck fill='#db1222' className='h-6 text-white' />
                                        <span className='!leading-[150%] text-gray-800 text-sm md:text-base '>{d}</span></li>
                                ))
                            }
                        </ul>
                    </div>
                    <Image
                        src={ImageSmartBusinessOwner}
                        alt='image-smart-business-owner'
                        className='w-full h-full object-contain'
                    />
                </div>
            </section>

            {/* Label */}
            <section className="w-full bg-primary py-10 lg:py-10 px-10 md:px-20 lg:px-5">
                <div className="lg:max-w-7xl flex flex-col md:flex-row items-center justify-between gap-5 lg:mx-auto">
                    <h1 className='text-center md:text-left text-white leading-[120%] md:leading-[140%] text-xl sm:text-2xl md:text-3xl max-w-3xl'>Whoa! 94% booked already.<br /><span className='text-sm text-white/70 md:text-white md:text-lg font-normal'>You&apos;re this close to missing out — grab your spot while you still can!</span></h1>
                    <ConsultationButton text='Be Smart – Book Your Free Demo Now' color='full-white' className='px-0 md:px-8' />
                </div>
            </section>

            {/* Footer */}
            <footer className="w-full bg-white py-10 lg:py-10 px-10 md:px-20 lg:px-5">
                <div className="lg:max-w-7xl flex flex-col items-center justify-between gap-5 md:gap-8 lg:mx-auto">
                    <Link href='/'>
                        <Logo className='w-32 md:w-52' />
                    </Link>
                    <p className='w-full max-w-[90%] h-[1px] bg-gray-300' />
                    <p className='text-center text-sm md:text-base text-gray-600'>© {new Date().getFullYear()} Digital-PA. All Rights Reserved.</p>
                </div>
            </footer>

        </main >
    )
}

export default AiAutomation