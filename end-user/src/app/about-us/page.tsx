import FadeInWhenVisible from '@/components/partials/FramerMotion/FadeInWhenVisible'
import { Solution, solutions } from '@/constants/about-us/solution'
import { Image } from '@nextui-org/react'
import { JSX } from 'react'
import Advantages from './_components/Advantages'
import InstantSaving from './_components/InstantSaving'

export default function AboutUs(): JSX.Element {
    return (
        <main>
            <header className='container p-6 lg:p-8'>
                <div className='flex flex-col justify-center text-center'>
                    <h1 className='w-full text-4xl uppercase leading-tight md:text-5xl'>
                        <span className='text-primary'>
                            Your Personal Assistant
                        </span>{' '}
                        <br /> Ensure Your Digital Marketing Consistency
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
                    <div className='mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-24'>
                        {solutions.map((solution: Solution, index: number) => (
                            <FadeInWhenVisible
                                key={`solution-${index}`}
                                multiplier={index}
                            >
                                <div
                                    className={`flex h-full flex-col items-center gap-4 rounded-2xl p-8 shadow shadow-primary ${solutions.length - 2 === index ? 'hidden opacity-0 md:block' : ''}`}
                                >
                                    <Image
                                        className='w-20'
                                        src={solution.icon}
                                        alt={solution.title}
                                    />

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
                        <p className='mx-auto max-w-2xl text-center text-lg md:text-2xl lg:text-3xl'>
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
            <section className='pb-8'>
                <InstantSaving />
            </section>
            {/* end of advantages section */}
        </main>
    )
}
