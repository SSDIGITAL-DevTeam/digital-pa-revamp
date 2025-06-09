import FadeInWhenVisible from '@/components/partials/FramerMotion/FadeInWhenVisible'
import { JSX } from 'react'
import Advantages from './_components/Advantages'
import InstantSaving from './_components/InstantSaving'
import Missions from './_components/Missions'
import { solutions} from '@/constants/about-us/solution'
import MissionImage from "@/assets/about-us/webp/asset-missions.webp";
import Image from 'next/image'
import SectionOurValue from './_components/SectionOurValue'



export default function AboutUs(): JSX.Element {
    return (
        <main className='bg-white'>
            <header className='container p-6 lg:p-8 md:mt-16'>
                <div className='flex flex-col justify-center text-center'>
                    <h1 className='w-full text-4xl uppercase leading-tight md:text-5xl'>
                        <span className='text-primary inline-block md:mb-2'>
                            Your Personal Assistant
                        </span>
                        <br />
                        <span>
                            Ensure Your Digital Marketing Consistency
                        </span>
                    </h1>
                </div>
            </header>

            {/* marketing solutions section */}
            <section className='pt-8'>
                <div className='container p-6 lg:p-8'>
                    <div>
                        <p className='text-center text-lg md:text-2xl lg:text-3xl'>
                            Digital PA is a business that provide marketing
                            solution such as:
                        </p>
                    </div>

                    {/* card wrapper */}
                    <div className='mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-x-16 lg:gap-y-8'>
                        {solutions.map((solution, index: number) => (
                            <FadeInWhenVisible
                                key={`solution-${index}`}
                                multiplier={index}
                            >
                                <div
                                    className={`flex h-full flex-col items-center gap-4 rounded-2xl p-12 shadow shadow-primary `}
                                >
                                    {solution.asset}
                                    <header>
                                        <h2 className='text-center text-lg uppercase'>
                                            {solution.title}
                                        </h2>
                                    </header>
                                </div>
                            </FadeInWhenVisible>
                        ))}
                    </div>
                    {/* end of card wrapper */}

                    <div className='mt-8 md:mt-16'>
                        <p className='mx-auto max-w-2xl text-center text-lg md:text-2xl lg:text-3xl !leading-[150%]'>
                            with high-quality yet <br /> most affordable price
                            around Singapore
                        </p>
                    </div>
                </div>
            </section>
            {/* end of marketing solutions section */}

            {/* advantages section */}
            <section className='pb-8'>
                <Advantages />
            </section>
            {/* end of advantages section */}

            {/* instant saving section */}
            <section className="bg-[#F5F5F5] relative w-full flex flex-col md:flex-row">
                <Missions />
                <Image src={MissionImage.src} alt="mission-image" width={1000} height={1000} className="w-full lg:w-fit object-cover lg:object-contain lg:h-full h-96 absolute right-0 bottom-0" />
            </section>
            {/* end of advantages section */}

            {/* instant saving section */}
            <section className="bg-[#F9F9F9] w-full py-8 lg:py-14 px-12 md:px-10">
                <SectionOurValue/>
            </section>
            {/* end of advantages section */}

            <section className='pb-8'>
                <InstantSaving />
            </section>
            {/* end of value section */}
        </main>
    )
}
