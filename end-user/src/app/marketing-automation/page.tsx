"use client"
import React, { JSX } from 'react'
import Image from 'next/image'
// import Header from '../../_components/Header'
// import ConsultationButton from '@/components/partials/Button/Consultation'
// import OurBrands from '../../_components/OurBrandPartner'
// import ProvenExperience from '../../_components/ProvenExperience'
// import FormJoin from '../../_components/FormJoin'
// import FlyingSection from '../../_components/FlyingSection'
// import LeftHeader from '../../_components/LeftHeader'
// import GridSection from '../../_components/GridSection'
// import GradientSection from '../../_components/GradientSection'
// import ColumnsIconSection from '../../_components/ColumnsIconSection'
// import IconGridSection from '../../_components/IconGridSection'
// import TabSection from '../../_components/TabSection'

import SimplifyImage from '@/assets/our-services/webp/ai/Image.webp'
import HelpingImage1 from '@/assets/our-services/webp/ai/help1.webp'
import HelpingImage2 from '@/assets/our-services/webp/ai/help2.webp'

//asset simbol
// import Symbol1 from '@/assets/our-services/webp/ai/Symbol.svg-1.webp'
// import Symbol2 from '@/assets/our-services/webp/ai/Symbol.svg-2.webp'
// import Symbol3 from '@/assets/our-services/webp/ai/Symbol.svg-3.webp'
// import Symbol4 from '@/assets/our-services/webp/ai/Symbol.svg-4.webp'
// import Symbol5 from '@/assets/our-services/webp/ai/Symbol.svg-5.webp'

import InSummaryImage from '@/assets/our-services/webp/free-seo-web-audit.webp'

import {
    allInOnePlatformAI,
    canWeDo,
    increaseRevenueProfit,
    keyFunction,
    saveMoneyTime,
    saveMoneyTime2,
    whoShouldUseOurAI
} from '@/constants/our-services/ai-automation'
import ConsultationButton from '@/components/partials/Button/Consultation'
import Header from '../our-services/_components/Header'
import GridSection from '../our-services/_components/GridSection'
import FlyingSection from '../our-services/_components/FlyingSection'
import IconGridSection from '../our-services/_components/IconGridSection'
import LeftHeader from '../our-services/_components/LeftHeader'
import GradientSection from '../our-services/_components/GradientSection'
import TabSection from '../our-services/_components/TabSection'
import ColumnsIconSection from '../our-services/_components/ColumnsIconSection'
import OurBrands from '../our-services/_components/OurBrandPartner'
import ProvenExperience from '../our-services/_components/ProvenExperience'
import FormJoin from '../our-services/_components/FormJoin'
import { Button } from '@/components/ui/button'
import { ArrowRightIcon } from '@heroicons/react/16/solid'
// import useLocoScroll from '@/hook/useLocomotive'

const gradientRight = (
    <svg width="1123" height="870" className='absolute bottom-0 right-0' viewBox="0 0 1123 870" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_f_3514_10923)">
            <path d="M1632.8 800.127C1670.48 1165.04 1389.18 1583.7 1028.08 1518.98C703.005 1460.72 535.763 1094.38 623.93 776.11C715.127 446.902 1101.16 179.382 1392.3 358.081C1559.79 460.884 1612.61 604.644 1632.8 800.127Z" fill="url(#paint0_radial_3514_10923)" fill-opacity="0.5" />
        </g>
        <defs>
            <filter id="filter0_f_3514_10923" x="0.575562" y="-299.166" width="2235.61" height="2424.82" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="300" result="effect1_foregroundBlur_3514_10923" />
            </filter>
            <radialGradient id="paint0_radial_3514_10923" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(621.342 1290.86) rotate(-36.2259) scale(1265 1285.28)">
                <stop offset="0.336458" stop-color="#FFA800" />
                <stop offset="0.445833" stop-color="#FF0000" />
                <stop offset="1" stop-color="#DB1222" />
            </radialGradient>
        </defs>
    </svg>

)

const gradientLeft = (
    <svg width="696" height="845" className='absolute bottom-0 left-0' viewBox="0 0 696 845" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_f_3514_12340)">
            <ellipse cx="-160" cy="855.5" rx="356" ry="355.5" fill="#FF8000" fill-opacity="0.5" />
        </g>
        <defs>
            <filter id="filter0_f_3514_12340" x="-1016" y="0" width="1712" height="1711" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_3514_12340" />
            </filter>
        </defs>
    </svg>
)

const weCanDoRight = (
    <svg width="1208" height="775" className='absolute top-40 right-20' viewBox="0 0 1208 775" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_f_3514_12465)">
            <path d="M998.039 167.882C1251.33 185.702 1503.22 427.412 1416.03 665.886C1337.55 880.572 1067.84 950.913 861.364 852.849C647.789 751.417 511.43 456.322 667.981 279.135C758.043 177.202 862.354 158.336 998.039 167.882Z" fill="url(#paint0_radial_3514_12465)" fill-opacity="0.5" />
        </g>
        <defs>
            <filter id="filter0_f_3514_12465" x="0.346924" y="-434.312" width="2033.3" height="1930.6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="300" result="effect1_foregroundBlur_3514_12465" />
            </filter>
            <radialGradient id="paint0_radial_3514_12465" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1212 915.995) rotate(-116.305) scale(875.551 889.584)">
                <stop offset="0.336458" stop-color="#FFA800" />
                <stop offset="0.445833" stop-color="#FF0000" />
                <stop offset="1" stop-color="#DB1222" />
            </radialGradient>
        </defs>
    </svg>
)

const weCanDoLeft = (
    <svg width="895" height="775" className='absolute bottom-32 left-20' viewBox="0 0 895 775" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_f_3514_12466)">
            <circle cx="213" cy="458" r="182" fill="#FF8000" fill-opacity="0.5" />
        </g>
        <defs>
            <filter id="filter0_f_3514_12466" x="-469" y="-224" width="1364" height="1364" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_3514_12466" />
            </filter>
        </defs>
    </svg>
)

const AiAutomation: React.FC = (): JSX.Element => {
    // useLocoScroll();
    return (
        <main>
            {/* Header */}
            <section className="w-full bg-white lg:pt-14">
                <div className="relative overflow-hidden lg:max-w-[95%] flex flex-col items-center justify-center gap-5 lg:gap-3 lg:mx-auto py-12 lg:py-16 rounded-3xl">
                    {gradientLeft}
                    {gradientRight}
                    <p className='z-[1]text-center p-2 rounded-full bg-white shadow-sm font-bold text-base md:text-lg'>🤖
                        <span className='bg-gradient-to-r from-pink-600 to-orange-400 text-transparent bg-clip-text'> AI-Powered Marketing Automation</span>
                    </p>
                    <div className="z-[1] flex flex-col gap-8 md:gap-7 items-center px-5">
                        <h1 className="normal-case lg:max-w-5xl !leading-[140%] text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-6xl text-center w-full bg-gradient-to-r from-pink-600 to-orange-400 text-transparent bg-clip-text">
                            <span className='text-black'>The ultimate</span> all-in-one platform
                            <span className='text-black'> to supercharge your marketing and automate CRM</span>
                        </h1>
                        <p className="max-w-4xl text-center !leading-[150%] lg:text-lg font-medium text-gray-700">Empowering small to medium-sized businesses to capture more leads, boost sales, build lasting customer relationships, and streamline daily operations</p>
                    </div>
                    <div className="z-[1] flex flex-col md:flex-row w-full justify-center items-center lg:mt-7 mt-5 text-xl gap-5">
                        <Button className='flex items-center gap-2 text-white w-fit text-center font-semibold rounded-2xl bg-primary py-3 px-6 md:py-8 md:px-6'>Get a Free Consultation <ArrowRightIcon className="h-5 w-5" /></Button>
                        <Button className='w-fit text-center font-semibold rounded-2xl bg-white shadow-sm py-3 px-6 md:py-8 md:px-6 text-primary'>See Benefits</Button>
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
                    <span className='text-center p-2 rounded-full bg-white border-full border-2 border-primary/60 shadow-sm font-semibold text-base md:text-lg'>🏆
                        <span className='bg-gradient-to-r from-pink-600 to-orange-400 text-transparent bg-clip-text'> Where Smart Business Owners Automate, Scale, and Win</span>
                    </span>
                    <Header title={<><span className='text-black'>In the era of AI,</span> either you are part of it, or you are simply out of it!!</>} subtitle="Most businesses fall into these traps:" className="lg:max-w-7xl capitalize md:w-[50vw]" subClassName='md:text-xl' />
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
            <section className="w-full bg-white py-12 lg:py-16">
                <div className="relative overflow-hidden lg:max-w-[95%] flex flex-col items-center justify-center gap-5 lg:gap-3 lg:mx-auto py-12 lg:py-16 rounded-3xl">
                    {weCanDoLeft}
                    {weCanDoRight}
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
            <section className="w-full bg-white pt-0 pb-12 lg:pb-20 lg:pt-6 px-10 md:px-20 lg:px-5">
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

            <section className="w-full bg-[#F5F5F5] py-12 lg:py-20 px-10 md:px-20 lg:px-5">
                <ProvenExperience />
            </section>

            <section className="w-full bg-primary py-12 lg:py-20">
                <FormJoin />
            </section>
        </main >
    )
}

export default AiAutomation