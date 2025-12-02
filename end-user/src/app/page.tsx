"use client"
import { useEffect, useState } from 'react'
import Hero from './_components/Hero'
import PayLessGetMore from './_components/PayLessGetMore'
import WhyUs from './_components/WhyUs'
import BrandPartners from './_components/BrandPartners'
import MarketingSkillSets from './_components/MarketingSkillSets'
import OurServices from './_components/OurServices/OurServices'
import Particle from '@/components/partials/ParticleJs/Particle'
import FAQ from './services/_components/FAQ'
import MeetOurTeam from './_components/MeetOurTeam'
import { homeFAQ } from '@/constants/services/faq'
import Script from 'next/script'



export default function Home() {
    const [scrollInstance, setScrollInstance] = useState<any>(null)

    useEffect(() => {
        // Dynamically import and initialize LocomotiveScroll
        import('locomotive-scroll').then((LocomotiveScroll) => {
            const locomotiveScroll = new LocomotiveScroll.default({
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
                    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                },
            })
            setScrollInstance(locomotiveScroll)
        })

        return () => {
            if (scrollInstance) {
                scrollInstance.destroy()
            }
        }
    }, [])

    return (
        <main>
            <Script
                src="https://dunsregistered.dnb.com"
                strategy="afterInteractive"
            />
            <header className='relative min-h-screen'>
                <div className='absolute inset-0 z-10'>
                    <Particle />
                </div>
                <Hero />
            </header>

            {/* pay less get more section */}
            <section className='bg-[url("/svg/asset-background-section-1.svg")] bg-contain bg-left-top py-8'>
                <PayLessGetMore />
            </section>
            {/* end of pay less get more section */}

            {/* why us section */}
            <section className='py-8'>
                <WhyUs />
            </section>
            {/* end of why us section */}

            {/* our brands partners section */}
            <section className='py-8'>
                <BrandPartners />
            </section>
            {/* end of our brands partners section */}

            {/* complete marketing skill sets section */}
            <section className='py-8'>
                <MarketingSkillSets />
            </section>
            {/* end of complete marketing skill sets section */}

            {/* one personal assistant section */}
            <section className='py-8'>
                <OurServices />
            </section>
            {/* end of one personal assistant section */}

            {/* meet our team section */}
            <section className='py-8 md:py-16'>
                <MeetOurTeam />
            </section>
            {/* end of meet our team section */}

            {/* faq section */}
            <section className='py-8 pb-32'>
                <FAQ value={homeFAQ} />
            </section>
            {/* end of faq section */}
        </main>
    )
}
