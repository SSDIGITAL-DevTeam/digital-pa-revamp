"use client"
import { useEffect, useRef, useState } from 'react'
import type LocomotiveScroll from 'locomotive-scroll'
import dynamic from 'next/dynamic'
import Hero from './_components/Hero'
import PayLessGetMore from './_components/PayLessGetMore'
import WhyUs from './_components/WhyUs'
import BrandPartners from './_components/BrandPartners'
import MarketingSkillSets from './_components/MarketingSkillSets'
import OurServices from './_components/OurServices/OurServices'
import FAQ from './services/_components/FAQ'
import { homeFAQ } from '@/constants/services/faq'
import Script from 'next/script'

const Particle = dynamic(() => import('@/components/partials/ParticleJs/Particle'), {
    ssr: false,
})

export default function Home() {
    const scrollInstanceRef = useRef<LocomotiveScroll | null>(null)
    const [shouldRenderParticles, setShouldRenderParticles] = useState(false)

    useEffect(() => {
        // Only enable heavier effects (particles & smooth scroll) on desktop
        const isDesktop = window.matchMedia('(min-width: 1024px)').matches
        setShouldRenderParticles(isDesktop)

        if (!isDesktop) return

        let isMounted = true

        // Disable native smooth scroll while Locomotive is active to avoid double-easing jitter
        const html = document.documentElement
        const previousScrollBehavior = html.style.scrollBehavior
        html.style.scrollBehavior = 'auto'

        import('locomotive-scroll').then((LocomotiveScrollModule) => {
            if (!isMounted) return

            const LocomotiveClass =
                (LocomotiveScrollModule as unknown as { default: { new(options?: any): LocomotiveScroll } }).default ??
                (LocomotiveScrollModule as unknown as { new(options?: any): LocomotiveScroll })

            scrollInstanceRef.current = new LocomotiveClass({
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
                    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                },
            })
        })

        return () => {
            isMounted = false
            scrollInstanceRef.current?.destroy()
            scrollInstanceRef.current = null
            html.style.scrollBehavior = previousScrollBehavior
        }
    }, [])

    return (
        <main>
            <Script
                src="https://dunsregistered.dnb.com"
                strategy="afterInteractive"
            />
            <header className='relative min-h-screen'>
                {shouldRenderParticles && (
                    <div className='absolute inset-0 z-10'>
                        <Particle />
                    </div>
                )}
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

            {/* faq section */}
            <section className='py-8 pb-32'>
                <FAQ value={homeFAQ} />
            </section>
            {/* end of faq section */}
        </main>
    )
}
