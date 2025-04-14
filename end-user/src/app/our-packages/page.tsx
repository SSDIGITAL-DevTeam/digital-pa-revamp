import { Button } from '@nextui-org/react'
import { JSX } from 'react'
import Faq from '@/app/our-packages/_components/Faq'
import PricingCard from './_components/PricingCard'
import { Package, packages } from '@/constants/our-packages/package'
import FadeInWhenVisible from '@/components/partials/FramerMotion/FadeInWhenVisible'
import { skillSets } from '@/constants/our-packages/skills'
import { Image, Link } from '@nextui-org/react'

export default function Packages(): JSX.Element {
    return (
        <main>
            <header className='container p-6 lg:p-8'>
                <div className='relative flex flex-col items-center justify-center gap-6 md:min-h-screen md:gap-10 md:pb-40'>
                    <h1 className='text-center uppercase text-primary lg:w-max'>
                        Discover Our Packages
                    </h1>

                    <div className='flex flex-col items-center justify-between gap-6 md:gap-10 '>
                        <p className='w-3/4 text-center text-lg md:text-2xl lg:text-3xl'>
                            Empower your business with our digital solutions.
                            Explore our plans to find the perfect match for your
                            digital needs.
                        </p>

                        <Button
                            as={Link}
                            target='_blank'
                            href='/our-packages/deck'
                            className='font-semibold md:py-10 md:text-2xl'
                            color='primary'
                            radius='sm'
                            size='lg'
                            disabled
                        >
                            See our package
                        </Button>
                    </div>
                </div>
            </header>

            {/* marketing skill sets section */}
            <section className='top bg-contain bg-center bg-no-repeat py-8 lg:bg-[url("/svg/asset-background-section-1.svg")] lg:bg-bottom'>
                <div className='container p-6 lg:p-8'>
                    <div>
                        <div className='flex flex-col items-center gap-6 md:gap-10 lg:flex-row'>
                            <h2 className='text-center uppercase leading-tight lg:w-1/2'>
                                One Team that Has{' '}
                                <br className='hidden lg:block' />
                                <span className='text-primary'>
                                    All the Marketing Skill Sets
                                </span>
                            </h2>

                            <div className='grid grid-cols-2 gap-6 md:gap-10 lg:w-1/2'>
                                {skillSets.map((skill, index: number) => (
                                    <FadeInWhenVisible
                                        key={`skills-${index}`}
                                        multiplier={index}
                                    >
                                        <div
                                            className={`flex h-full flex-col items-center gap-4 rounded-2xl p-4 shadow shadow-primary md:p-8 `}
                                        >
                                            <Image
                                                className='w-10 md:w-20'
                                                src={skill.icon}
                                                alt={skill.title}
                                            />

                                            <header>
                                                <h2 className='text-center text-base uppercase md:text-lg'>
                                                    {skill.title}
                                                </h2>
                                            </header>
                                        </div>
                                    </FadeInWhenVisible>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end of marketing skill sets section */}

            {/* plans and pricing section */}
            <section className='py-8'>
                <div className='container p-6 lg:p-8'>
                    <h2 className='mb-6 text-center uppercase text-primary md:mb-8'>
                        Plans & Pricing
                    </h2>
                    <div className='grid grid-cols-1 justify-center gap-6 md:items-center md:gap-4 lg:mt-16 lg:grid-cols-3 lg:gap-8'>
                        {packages.map(
                            (singlePackage: Package, index: number) => (
                                <FadeInWhenVisible
                                    className='h-full'
                                    key={`package-${index}`}
                                    multiplier={index}
                                >
                                    <PricingCard
                                        singlePackage={singlePackage}
                                    />
                                </FadeInWhenVisible>
                            ),
                        )}
                    </div>
                </div>
            </section>
            {/* end of plans and pricing section */}

            {/* faq section */}
            <section className='py-8'>
                <Faq />
            </section>
            {/* end of faq section */}

            {/* all kinds of digital needs section */}
            <section className='mb-8 w-full bg-[url("/webp/asset-background-packages.webp")] bg-cover bg-no-repeat py-8 md:mb-10'>
                <div className='container p-6 md:p-8'>
                    <div className='flex min-h-[20rem] flex-col items-center justify-center gap-6 md:min-h-[85rem] md:gap-10 '>
                        <h2 className='text-center text-4xl font-bold uppercase leading-10 sm:text-6xl lg:text-7xl 2xl:text-8xl'>
                            All Kinds of
                            <br />
                            <span className='mt-8 text-primary'>
                                Digital Needs
                            </span>
                        </h2>

                        <Button
                            as={Link}
                            href='/our-packages/deck'
                            className='font-semibold md:py-10 md:text-2xl'
                            color='primary'
                            radius='sm'
                            size='lg'
                            disabled
                            target='_blank'
                        >
                            See our package
                        </Button>
                    </div>
                </div>
            </section>
            {/* end of all kinds of digital needs section */}
        </main>
    )
}
