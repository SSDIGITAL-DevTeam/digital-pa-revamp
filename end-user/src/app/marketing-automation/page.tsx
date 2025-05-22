"use client"
import React, { JSX, useEffect } from 'react'
import Image from 'next/image'

import SimplifyImage from '@/assets/services/webp/ai/Image.webp'
import HelpingImage1 from '@/assets/services/webp/ai/help1.webp'
import HelpingImage2 from '@/assets/services/webp/ai/help2.webp'

import InSummaryImage from '@/assets/services/webp/free-seo-web-audit.webp'

import {
    allInOnePlatformAI,
    canWeDo,
    increaseRevenueProfit,
    keyFunction,
    saveMoneyTime,
    saveMoneyTime2,
    whoShouldUseOurAI
} from '@/constants/services/ai-automation'
import ConsultationButton from '@/components/partials/Button/Consultation'
import Header from '../services/_components/Header'
import GridSection from '../services/_components/GridSection'
import FlyingSection from '../services/_components/FlyingSection'
import IconGridSection from '../services/_components/IconGridSection'
import LeftHeader from '../services/_components/LeftHeader'
import GradientSection from '../services/_components/GradientSection'
import TabSection from '../services/_components/TabSection'
import ColumnsIconSection from '../services/_components/ColumnsIconSection'
import OurBrands from '../services/_components/OurBrandPartner'
// import ProvenExperience from '../services/_components/ProvenExperience'
import FormJoin from '../services/_components/FormJoin'
import { Button } from '@/components/ui/button'
// import { ArrowRightIcon } from '@heroicons/react/16/solid'
// import useLocoScroll from '@/hook/useLocomotive'
import gradientHeroRight from "@/assets/ai-automation/svg/gradient-hero-right.svg"
import gradientHeroLeft from "@/assets/ai-automation/svg/gradient-hero-left.svg"
import gradientIconRight from "@/assets/ai-automation/svg/gradient-icon-right.svg"
import gradientIconLeft from "@/assets/ai-automation/svg/gradient-icon-left.svg"
// import gradientSolutionsRight from "@/assets/ai-automation/svg/gradient-solutions-right.svg"
// import gradientSolutionsLeft from "@/assets/ai-automation/svg/gradient-solutions-left.svg"
import AssetLogoWithText from "@/assets/logo/webp/asset-logo-with-text.webp"
import AssetHeroSection from "@/assets/ai-automation/webp/asset-hero-section.webp"
import LocomotiveScroll from 'locomotive-scroll'

const AiAutomation: React.FC = (): JSX.Element => {
    useEffect(() => {
        const locomotiveScroll = new LocomotiveScroll({
            lenisOptions: {
                wrapper: window,
                content: document.documentElement,
                lerp: 0.1,
                duration: 1.2,
                orientation: 'vertical',
                gestureOrientation: 'vertical',
                smoothWheel: true,
                wheelMultiplier: 1,
                touchMultiplier: 2,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
            },
        });
         return () => {
        locomotiveScroll.destroy(); // Penting agar tidak corrupt saat komponen dibongkar
         
    };
    }, [])

    return (
        <main>
            {/* Header */}
            <section className="w-full bg-white lg:pt-14">
                <div className=" relative min-h-screen overflow-visible lg:max-w-[95%] flex flex-col items-center justify-start gap-5 lg:gap-8 lg:mx-auto py-12 lg:py-16 rounded-3xl">
                    <Image src={gradientHeroRight} alt="a" width={1920} height={1080} priority className="absolute -bottom-[60vh] -right-[40vw] opacity-50" />
                    <Image src={gradientHeroLeft} alt="b" width={1920} height={1080} priority className="absolute -bottom-[80vh] left-[-35vw] opacity-40" />
                    <div className='z-[1] absolute lg:max-w-7xl top-6 left-1/2 -translate-x-1/2 flex w-full justify-center flex-col items-center gap-5 lg:gap-8 px-5'>
                        <div className='max-w-[30vw] md:max-w-[15vw]'>
                            <Image
                                src={AssetLogoWithText}
                                alt="asset-logo-with-text"
                                width={1920}
                                height={1080}
                                className='w-full h-full'
                            />
                        </div>
                        <span className='z-[1] text-center p-2 rounded-full bg-white border-2 border-primary/60 shadow-sm font-semibold text-xs sm:text-base md:text-lg'>🤖
                            <span className='bg-gradient-to-r from-pink-600 to-orange-400 text-transparent bg-clip-text'> AI-Powered Marketing Automation</span>
                        </span>
                        <div className="z-[1] flex flex-col gap-8 md:gap-7 items-center px-5">
                            <h1 data-scroll data-scroll-speed="1.5" className="z-[1] lg:max-w-7xl !leading-[140%] text-3xl sm:text-3xl md:text-4xl lg:text-5xl max-w-6xl text-center w-full text-primary">
                                <span className='text-black'>The ultimate</span> all-in-one platform
                                <span className='text-black'> to supercharge your marketing and automate CRM</span>
                            </h1>
                            <p data-scroll data-scroll-speed="1.4" className="z-[1] max-w-4xl text-center !leading-[150%] lg:text-lg font-medium text-gray-700">Empowering small to medium-sized businesses to capture more leads, boost sales, build lasting customer relationships, and streamline daily operations</p>
                        </div>
                        <div data-scroll data-scroll-speed="1.3" className="z-[1] flex flex-col md:flex-row w-full justify-center items-center text-xl gap-5">
                            {/* <Button className='flex items-center gap-2 text-white md:w-fit text-center font-semibold rounded-2xl bg-primary w-[50vw] py-6 md:py-8 md:px-6 hover:bg-red-800'>Get a Free Consultation <ArrowRightIcon className="h-5 w-5" /></Button> */}
                            <ConsultationButton text='Get a Free Consultation' />
                            <Button className='md:w-fit text-center font-semibold rounded-2xl bg-white shadow-md border-[1px] border-gray-300 px-16 py-6 md:py-8 md:px-6 text-primary hover:bg-primary/5'>See Benefits</Button>
                        </div>
                        <div data-scroll data-scroll-speed="1.2" className='w-[80vw] py-3 md:w-[50vw]'>
                            <Image
                                src={AssetHeroSection}
                                alt="asset-logo-with-text"
                                width={1920}
                                height={1080}
                                className='w-full h-full'
                            />
                        </div>
                    </div>

                    {/* Bouncing Images */}
                    {/* <Image src={Symbol2.src} quality={100} width={1920} height={1080} priority className="hidden lg:block absolute z-[4] h-12 w-12 top-[24%] left-[12%]  animate-smoothBounce delay-1000" alt={`symbol-google`} />
                    <Image src={Symbol3.src} quality={100} width={1920} height={1080} priority className="hidden lg:block absolute z-[4] h-12 w-12 top-[44%] left-[15%]  animate-smoothBounce" alt={`symbol-google-ads`} />
                    <Image src={Symbol5.src} quality={100} width={1920} height={1080} priority className="hidden lg:block absolute z-[4] h-12 w-12 top-[17%] right-[14%] animate-smoothBounce" alt={`symbol-instagram`} />
                    <Image src={Symbol4.src} quality={100} width={1920} height={1080} priority className="hidden lg:block absolute z-[4] h-12 w-12 top-[33%] right-[10%] animate-smoothBounce delay-1000" alt={`symbol-meta`} />
                    <Image src={Symbol1.src} quality={100} width={1920} height={1080} priority className="hidden lg:block absolute z-[4] h-12 w-12 top-[51%] right-[17%] animate-smoothBounce delay-500" alt={`symbol-facebook`} /> */}
                </div>
            </section>

            {/* Simplyfy Section */}
            <section className="w-full bg-white py-12 lg:py-20 px-10 md:px-20 lg:px-5">
                <div className="lg:max-w-7xl flex flex-col items-center justify-center gap-12 lg:gap-16 lg:mx-auto">
                    <span className='text-center p-2 rounded-full bg-white border-2 border-primary/60 shadow-sm font-semibold text-xs sm:text-base md:text-lg max-w-[60vw]'>🏆
                        <span className='bg-gradient-to-r from-pink-600 to-orange-400 text-transparent bg-clip-text'> Where Smart Business Owners Automate, Scale, and Win</span>
                    </span>
                    <Header title={<><span className='text-black'>In the era of AI,</span> either you are part of it, or you are simply out of it!!</>} subtitle="Most businesses fall into these traps:" className="lg:max-w-7xl capitalize" subClassName='md:text-xl' />
                    <GridSection list={saveMoneyTime2} side="left" height='lg:min-h-[40vh]' />
                    <div className='flex w-full justify-center' >
                        <ConsultationButton />
                    </div>
                </div>
            </section>

            {/* Grid Section */}
            <section className="w-full bg-white py-12 lg:py-20 px-10 md:px-20 lg:px-5">
                <div className="lg:max-w-7xl flex flex-col items-center justify-center gap-12 lg:gap-16 lg:mx-auto">
                    <Header title={<><span className='text-black'>Who Should Use Our</span> AI Integrated Solution?</>} subtitle="Whether you’re a marketer, part of a sales team, an entrepreneur, or run a local business, it helps you out." className="lg:max-w-7xl capitalize" subClassName='md:text-xl' />
                    <GridSection list={whoShouldUseOurAI} side="center" height='lg:min-h-[36vh]' />
                </div>
            </section>

            {/* Flying Section */}
            <section className="w-full bg-[#F5F5F5] lg:py-20 py-12 px-10 md:px-20 lg:px-5">
                <FlyingSection image={SimplifyImage.src} side='left' title={<>Enterprise-grade marketing and sales tools <span className='text-black'>made simple for solopreneurs and small teams</span></>} subtitle='All-in-one platform with enterprise-level tools — without the complexity or cost. Perfect for solopreneurs and small teams ready to capture leads, drive sales, and grow faster. No tech skills needed.' />
            </section>

            {/* Column Icon Section */}
            <section className="w-full bg-white py-12 lg:py-16 px-10 md:px-20 lg:px-5">
                <div className="relative overflow-hidden lg:max-w-[95%] flex flex-col items-center justify-center gap-5 lg:gap-3 lg:mx-auto py-12 lg:py-16 rounded-3xl">
                    <Image src={gradientIconRight} alt="a" width={1920} height={1080} priority className="absolute bottom-0 right-0 opacity-50" />
                    <Image src={gradientIconLeft} alt="b" width={1920} height={1080} priority className="absolute bottom-0 left-0 opacity-40" />
                    <div className="lg:max-w-7xl flex flex-col items-center justify-center gap-12 lg:gap-16 lg:mx-auto">
                        <Header title={<><span className='text-black'>What can  for you?{" "}</span>We do {" "}<span className='text-black'>for you?</span></>} className="lg:max-w-7xl capitalize" />
                        <IconGridSection list={canWeDo} side='left' padding="lg:py-8" className='lg:text-xl lg:font-semibold text-primary' />
                        <ConsultationButton text='Get a Free Consultation' />
                    </div>
                </div>
            </section>

            {/* Gradient Section All In One Platform */}
            <section className="w-full bg-white py-12 lg:py-20 px-10 md:px-20 lg:px-5">
                <div className="lg:max-w-7xl flex flex-col items-center justify-center  gap-16 lg:mx-auto">
                    <LeftHeader title={<>All-in-One Platform <span className='text-black'>to Grow & Retain Customers</span></>} subtitle="We aim to provide a unified system to help companies capture leads, nurture prospects, close sales, and retain happy customers—all within one easy-to-use platform." />
                    <GradientSection data={allInOnePlatformAI} name="allInOnePlatformAI" />
                </div>
            </section>

            {/* Tab Section */}
            <section className="w-full py-12 lg:pb-20 lg:pt-6 px-10 md:px-20 lg:px-5">
                <TabSection />
            </section>

            {/* Grid Key Function Section */}
            <section className="w-full bg-[#F5F5F5] py-12 lg:py-20 px-10 md:px-20 lg:px-5">
                <div className="lg:max-w-7xl flex flex-col items-center justify-center gap-10 lg:mx-auto">
                    <div className='flex lg:flex-row flex-col gap-4 items-center justify-between w-full lg:px-10'>
                        <h1 className="text-primary text-3xl md:text-4xl !leading-[120%] font-bold uppercase self-center md:self-start">Key Functions</h1>
                        <div className='hidden lg:flex ' >
                            <ConsultationButton />
                        </div>
                    </div>
                    <GridSection list={keyFunction} side="left" />
                    <div className='lg:hidden flex w-full justify-center' >
                        <ConsultationButton />
                    </div>
                </div>
            </section>

            {/* Column Icon Section */}
            <section className="w-full bg-white py-12 lg:py-20 px-10 md:px-20 lg:px-5">
                <div className="lg:max-w-7xl flex flex-col items-center justify-center gap-14 lg:gap-16 lg:mx-auto">
                    <h1 className="text-primary text-3xl lg:text-4xl !leading-[120%] font-bold uppercase lg:text-start text-center ">HOW OUR SOLUTION HELP SMEs?</h1>
                    <div className='flex flex-col gap-8 w-full'>
                        <div className='flex lg:flex-row flex-col gap-4 items-center justify-between w-full'>
                            <h3 className='uppercase text-xl sm:text-3xl md:text-4xl font-bold lg:text-start text-center'>SAVE MONEY / TIME 💰</h3>
                            <div className='hidden lg:flex ' >
                                <ConsultationButton />
                            </div>
                        </div>
                        <ColumnsIconSection data={saveMoneyTime} name="saveMoneyTime" />
                        <div className='lg:hidden flex w-full justify-center' >
                            <ConsultationButton />
                        </div>
                    </div>
                    <div className='flex flex-col gap-8 w-full'>
                        <div className='flex lg:flex-row flex-col gap-4 items-center justify-between w-full'>
                            <h3 className='uppercase text-xl sm:text-3xl md:text-4xl font-bold lg:text-start text-center'>Increase Revenue / ProﬁIt  🚀</h3>
                            <div className='hidden lg:flex ' >
                                <ConsultationButton />
                            </div>
                        </div>
                        <ColumnsIconSection data={increaseRevenueProfit} name="increaseRevenueProfit" />
                        <div className='lg:hidden flex w-full justify-center' >
                            <ConsultationButton />
                        </div>
                    </div>
                </div>
            </section>

            {/* Fyling section */}
            <section className="w-full bg-[#F5F5F5] lg:py-20 py-12 px-10 md:px-20 lg:px-5">
                <FlyingSection image={InSummaryImage.src} side='right' title='In Summary' subtitle='Our platform consolidates essential tools to help businesses generate leads, nurture prospects, boost conversions, re-engage past clients, and automate workflows.' />
            </section>

            {/* 2 section button */}
            <section className="w-full bg-white py-12 lg:py-20 px-10 md:px-20 lg:px-5">
                <div className="lg:max-w-7xl flex flex-col items-center justify-center gap-12 lg:gap-10 lg:mx-auto">
                    <h1 className="text-primary text-3xl md:text-4xl !leading-[120%] font-bold uppercase lg:text-start text-center ">Ultimately helping them to</h1>
                    <div className='lg:ps-16 w-full flex lg:flex-row flex-col gap-4 lg:justify-between border-[1px] border-gray-300 shadow-md rounded-xl lg:p-6 items-center'>
                        <p className='lg:max-w-[50%] font-semibold lg:text-start text-center lg:font-bold !leading-[150%] text-base md:text-xl lg:text-2xl order-2 md:order-1 lg:p-0 p-5'>Save time, reduce business cost, increase productivity and efficiency of their business process</p>
                        <Image src={HelpingImage1.src} alt={"helping-image-1"} width={1920} height={1080} quality={100} priority className="object-cover md:object-contain w-fit md:h-[40vh] rounded-lg order-1 md:order-2" />
                    </div>
                    <div className='w-full flex lg:flex-row flex-col gap-4 lg:justify-between border-[1px] border-gray-300 shadow-md rounded-xl lg:p-6 items-center'>
                        <Image src={HelpingImage2.src} alt={"helping-image-2"} width={1920} height={1080} quality={100} priority className="object-cover md:object-contain w-fit md:h-[40vh] rounded-lg" />
                        <p className='lg:max-w-[50%] font-semibold lg:text-start text-center lg:font-bold !leading-[150%] text-base md:text-xl lg:text-2xl order-2 md:order-1 lg:p-0 p-5'>Save time, reduce business cost, increase productivity and efficiency of their business process</p>
                    </div>
                </div>
            </section>

            <section className="w-full bg-white py-12 lg:py-20">
                <OurBrands />
            </section>

            {/* <section className="w-full bg-[#F5F5F5] py-12 lg:py-20 px-10 md:px-20 lg:px-5">
                <ProvenExperience />
            </section> */}

            <section className="w-full bg-primary py-12 lg:py-20">
                <FormJoin />
            </section>
        </main >
    )
}

export default AiAutomation