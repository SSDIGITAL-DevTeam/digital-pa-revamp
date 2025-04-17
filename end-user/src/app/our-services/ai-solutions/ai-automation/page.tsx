"use client"
import { JSX } from 'react'
import Header from '../../_components/Header'
import ConsultationButton from '@/components/partials/Button/Consultation'
import OurBrands from '../../_components/OurBrandPartner'
import ProvenExperience from '../../_components/ProvenExperience'
import FormJoin from '../../_components/FormJoin'
import FlyingSection from '../../_components/FlyingSection'
import LeftHeader from '../../_components/LeftHeader'
import Image from 'next/image'
import GridSection from '../../_components/GridSection'

import SimplifyImage from '@/assets/our-services/webp/ai/Image.webp'
import AllInOneImage1 from '@/assets/our-services/webp/ai/aio1.webp'
import AllInOneImage2 from '@/assets/our-services/webp/ai/aio2.webp'
import AllInOneImage3 from '@/assets/our-services/webp/ai/aio3.webp'
import AllInOneImage4 from '@/assets/our-services/webp/ai/aio4.webp'
import HelpingImage1 from '@/assets/our-services/webp/ai/help1.webp'
import HelpingImage2 from '@/assets/our-services/webp/ai/help2.webp'

//asset simbol
import Symbol1 from '@/assets/our-services/webp/ai/Symbol.svg-1.webp'
import Symbol2 from '@/assets/our-services/webp/ai/Symbol.svg-2.webp'
import Symbol3 from '@/assets/our-services/webp/ai/Symbol.svg-3.webp'
import Symbol4 from '@/assets/our-services/webp/ai/Symbol.svg-4.webp'
import Symbol5 from '@/assets/our-services/webp/ai/Symbol.svg-5.webp'

//asset icons
import DatabaseIcon from '@/assets/our-services/svg/database.svg'
import DecreaseManpowerIcon from '@/assets/our-services/svg/decrease-manpower.svg'
import DecreaseAcquisitionIcon from '@/assets/our-services/svg/decrease-acquisition.svg'
import GraphIcon from '@/assets/our-services/svg/graph.svg'
import TumbIcon from '@/assets/our-services/svg/tumb.svg'
import DecreaseIcon from '@/assets/our-services/svg/decrease.svg'
import IncreaseIcon from '@/assets/our-services/svg/drive-traffic.svg'
import SettingIcon from '@/assets/our-services/svg/setting.svg'
import ChatIcon from '@/assets/our-services/svg/chat.svg'
import CalendarIcon from '@/assets/our-services/svg/calendar.svg'
import SparclesIcon from '@/assets/our-services/svg/sparcles.svg'
import UsersIcon from '@/assets/our-services/svg/users2.svg'


import InSummaryImage from '@/assets/our-services/webp/free-seo-web-audit.webp'
import GradientSection from '../../_components/GradientSection'
import ColumnsIconSection from '../../_components/ColumnsIconSection'
import IconGridSection from '../../_components/IconGridSection'
import TabSection from '../../_components/TabSection'

type List = {
    title: string;
    image: string;
    subtitle: string;
}

const allInOnePlatformAI: List[] = [
    {
        title: "CRM & Sales Automation",
        subtitle: "At its core, our solution offers a powerful CRM system that helps you track leads, customer interactions, and all the steps of your sales process. It’s about making sure no lead falls through the cracks and automating follow-ups so you can focus on closing deals.",
        image: AllInOneImage1.src
    },
    {
        title: "Marketing Automation",
        subtitle: " From email campaigns to SMS messaging, it’s all about reaching your audience in the most effective way. Think of it as having a personal assistant who makes sure your messages get to the right people at the right time",
        image: AllInOneImage2.src
    },
    {
        title: "Reputation Management",
        subtitle: "In the digital world, reputation is everything. Our solutionl helps you monitor and manage your online reputation, ensuring that your best foot is always forward.",
        image: AllInOneImage3.src
    },
    {
        title: "Integrations",
        subtitle: "Our solution plays well with others, integrating seamlessly with tools and platforms you’re already using. This means less hassle in getting systems to communicate with each other and more time doing what you do best.",
        image: AllInOneImage4.src
    },
]

const saveMoneyTime: { desc: string, icon: string; }[] = [
    {
        icon: DatabaseIcon.src,
        desc: "Decrease leads cost",
    },
    {
        icon: DecreaseManpowerIcon.src,
        desc: "Decrease manpower cost"
    },
    {
        icon: DecreaseAcquisitionIcon.src,
        desc: "Decrease cost per acquisition"
    },
    {
        icon: GraphIcon.src,
        desc: "Increased productivity & eficiency, Decreased cost"
    },
    {
        icon: TumbIcon.src,
        desc: "Saves time, save money, more results"
    },
    {
        icon: DecreaseIcon.src,
        desc: "Decrease cost for customized solution due to needs or industry"
    },
]

const increaseRevenueProfit: { desc: string, icon: string; }[] = [
    {
        icon: IncreaseIcon.src,
        desc: "Automated follow-ups convert leads and boost upsells.",
    },
    {
        icon: SettingIcon.src,
        desc: "Task automation lets teams focus on closing deals, increasing profits."
    },
    {
        icon: ChatIcon.src,
        desc: "Personalized communication reduces lost leads and improves efficiency."
    },
    {
        icon: CalendarIcon.src,
        desc: "AI booking cuts errors by 85%, boosting appointments and sales."
    },
    {
        icon: SparclesIcon.src,
        desc: "AI engagement reduces churn, ensuring retention and higher client value."
    },
    {
        icon: UsersIcon.src,
        desc: "Re-engaging past clients reconverts them, increasing lifetime value."
    },
]

const whoShouldUseOurAI: { title: string; desc: string }[] = [
    {
        title: "Marketing agencies",
        desc: "If you run a marketing agency, this software is practically made for you. It has all the tools to smooth out client-getting and marketing strategy tasks."
    },
    {
        title: "Sales teams",
        desc: "It’s got tools to easily manage leads, track your sales calls, and even automate some of the communication stuff. Game-changer, right?"
    },
    {
        title: "Sales professionals",
        desc: "It helps you improve your agency plan and keeps your client relationships on point."
    },
    {
        title: "Resource consolidation seekers",
        desc: "We simplifies things by putting everything in one place. It makes your marketing activities more efficient and saves you time."
    },
    {
        title: "Local service businesses",
        desc: "like contractors, law firms, dentists, chiropractors, etc."
    },
    {
        title: "B2B companies",
        desc: "that want to streamline lead management and sales processes"
    },
    {
        title: "Coaches, consultants, and online course creators",
        desc: "Streamline client engagement and course management for better results."
    },
    {
        title: "Real estate agents",
        desc: "Simplify lead tracking and client communication to close deals faster."
    },
    {
        title: " E-commerce brands",
        desc: "Enhance lead management and sales processes to boost online sales."
    },
]

const keyFunction: { title: string; desc: string }[] = [
    {
        title: "Capture Leads",
        desc: "Our platform boosts lead generation with drag-and-drop forms (35% higher conversions), customizable landing pages (60% more leads in 6 months), and online scheduling (40% productivity increase)."
    },
    {
        title: "Nurture Leads",
        desc: "Our platform boosts lead engagement by 230% with voicemail, email, and SMS campaigns. The mobile app’s two-way communication speeds responses by 50%, ensuring personalized, seamless interactions."
    },
    {
        title: "Automate Conversations",
        desc: "Our AI booking tool reduces manual errors by 85% and boosts lead engagement by 70% with tailored follow-ups, streamlining communication and helping your team close deals faster."
    },
    {
        title: "Create Community / Membership Areas",
        desc: "Our course system boosts community engagement by 45%, enabling free or paid courses for unlimited users. 78% of clients use video courses to effectively train leads, building a thriving community."
    },
    {
        title: "Manage Your Workﬂows & Close More Deals",
        desc: "Our pipeline tool boosts deal closures by 30%, integrates Stripe for seamless payments, and offers analytics—72% of customers use insights for data-driven decisions."
    },
]

const canWeDo: { title: string; desc: string, emoji: string; }[] = [
    {
        emoji: '🔍',
        title: "Find new customers?",
        desc: "✅ CHECK.",
    },
    {
        emoji: '😊',
        title: "Keep existing clients happy?",
        desc: "✅ YOU BET."
    },
    {
        emoji: '💬',
        title: "Nurture leads?",
        desc: "✅ ABSOLUTELY."
    },
    {
        emoji: '👥',
        title: "Reactivate past clients?",
        desc: "✅ OH YEAH."
    },
    {
        emoji: '🚀',
        title: "Grow your business?",
        desc: "✅ THAT’S THE GOAL!"
    },
]


export default function WebsiteDevelopment(): JSX.Element {

    return (
        <main className="">
            {/* Header */}
            <section className="w-full bg-white lg:pt-14">
                <div className="relative lg:max-w-[98%] flex flex-col items-center justify-center gap-5 lg:gap-3 lg:mx-auto py-12 lg:py-16 rounded-3xl bg-gradient-to-l from-[#F3BEBE]/40 from-40% to-gray-200/50">
                    <p className='text-center p-2 rounded-full bg-white shadow-sm font-bold text-lg '>🤖
                        <span className='bg-gradient-to-r from-pink-600 to-orange-400 text-transparent bg-clip-text'> AI-Powered Automation</span>
                    </p>
                    <div className="flex flex-col gap-7 items-center px-5">
                        <h1 className="normal-case lg:max-w-5xl !leading-[140%] text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-6xl text-center w-full bg-gradient-to-r from-pink-600 to-orange-400 text-transparent bg-clip-text">
                            <span className='text-black'>All-in-one</span> business marketing and CRM automation
                            <span className='text-black'> platform for SMEs owners</span>
                        </h1>
                        <p className="max-w-4xl text-center !leading-[150%] lg:text-lg font-medium">helps small to medium-sized businesses capture leads, drive sales, nurture customer relationships, and optimize day-to-day processes.</p>
                    </div>
                    <div className="flex w-full justify-center items-center lg:mt-7">
                        <ConsultationButton />
                    </div>

                    {/* Bouncing Images */}
                    <Image src={Symbol2.src} quality={100} width={1920} height={1080} priority className="hidden md:block absolute z-[4] h-12 w-12 top-[24%] left-[12%]  animate-smoothBounce" alt={`symbol-google`} />
                    <Image src={Symbol3.src} quality={100} width={1920} height={1080} priority className="hidden md:block absolute z-[4] h-12 w-12 top-[44%] left-[15%]  animate-smoothBounce" alt={`symbol-google-ads`} />
                    <Image src={Symbol5.src} quality={100} width={1920} height={1080} priority className="hidden md:block absolute z-[4] h-12 w-12 top-[17%] right-[14%] animate-smoothBounce" alt={`symbol-instagram`} />
                    <Image src={Symbol4.src} quality={100} width={1920} height={1080} priority className="hidden md:block absolute z-[4] h-12 w-12 top-[33%] right-[10%] animate-smoothBounce" alt={`symbol-meta`} />
                    <Image src={Symbol1.src} quality={100} width={1920} height={1080} priority className="hidden md:block absolute z-[4] h-12 w-12 top-[51%] right-[17%] animate-smoothBounce" alt={`symbol-facebook`} />
                </div>
            </section>

            {/* Grid Section */}
            <section className="w-full bg-white py-12 lg:py-20 px-10 md:px-20 lg:px-5">
                <div className="lg:max-w-7xl flex flex-col items-center justify-center gap-12 lg:gap-16 lg:mx-auto">
                    <Header title="Who Should Use Our AI Integrated Solution?" subtitle="Whether you’re a marketer, part of a sales team, an entrepreneur, or run a local business, it helps you out." className="lg:max-w-7xl" />
                    <GridSection list={whoShouldUseOurAI} side="center" height='lg:min-h-[36vh]' />
                </div>
            </section>

            {/* Flying Section */}
            <section className="w-full bg-[#F5F5F5] lg:py-20 py-12 px-10 md:px-20 lg:px-5">
                <FlyingSection image={SimplifyImage.src} side='left' title='Simplify Marketing & Sales for Solopreneurs & Small Teams' subtitle='Essentially, any business looking to simplify its marketing and sales stack could benefit from our solution. It provides enterprise-level tools for solopreneurs and small teams without the complexity and cost. The platform is designed to be user-friendly, even for nontechnical users.' />
            </section>

            {/* Column Icon Section */}
            <section className="w-full bg-primary py-12 lg:py-20 px-10 md:px-20 lg:px-5">
                <div className="lg:max-w-7xl flex flex-col items-center justify-center gap-10 lg:gap-16 lg:mx-auto">
                    <h1 className="text-white text-3xl lg:text-4xl !leading-[120%] font-bold uppercase lg:text-start text-center ">What can We do for you?</h1>
                    {/* asdasd */}
                    <IconGridSection list={canWeDo} side='left' padding="lg:py-8" className='lg:text-xl lg:font-semibold text-primary' />
                    <ConsultationButton color='white' />
                </div>
            </section>

            {/* Gradient Section All In One Platform */}
            <section className="w-full bg-white py-12 lg:py-20 px-10 md:px-20 lg:px-5">
                <div className="lg:max-w-7xl flex flex-col items-center justify-center  gap-16 lg:mx-auto">
                    <LeftHeader title="All-in-One Platform to Grow & Retain Customers" subtitle="We aim to provide a unified system to help companies capture leads, nurture prospects, close sales, and retain happy customers—all within one easy-to-use platform." />
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
                        <p className='lg:max-w-[50%] font-semibold lg:text-start text-center lg:font-bold !leading-[150%] text-base md:text-xl lg:text-2xl order-2 md:order-1 lg:p-0 p-5'>Save time, decrease business cost, increase productivity and efficiency of their business process</p>
                        <Image src={HelpingImage1.src} alt={"helping-image-1"} width={1920} height={1080} quality={100} priority className="object-cover md:object-contain w-fit md:h-[40vh] rounded-lg order-1 md:order-2" />
                    </div>
                    <div className='w-full flex lg:flex-row flex-col gap-4 lg:justify-between border-[1px] border-gray-300 shadow-md rounded-xl lg:p-6 items-center'>
                        <Image src={HelpingImage2.src} alt={"helping-image-2"} width={1920} height={1080} quality={100} priority className="object-cover md:object-contain w-fit md:h-[40vh] rounded-lg" />
                        <p className='lg:max-w-[50%] font-semibold lg:text-start text-center lg:font-bold !leading-[150%] text-base md:text-xl lg:text-2xl order-2 md:order-1 lg:p-0 p-5'>Save time, decrease business cost, increase productivity and efficiency of their business process</p>
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
        </main>
    )
}
