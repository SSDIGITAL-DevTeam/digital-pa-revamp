import FadeInWhenVisible from '@/components/partials/FramerMotion/FadeInWhenVisible'
import {
    MarketingSkillSet,
    marketingSkillSets,
} from '@/constants/homepage/marketing-skill-sets'
import { Image } from '@nextui-org/react'
import { JSX } from 'react'

export default function MarketingSkillSets(): JSX.Element {
    return (
        <div className='container flex flex-col items-center justify-center gap-4 p-6 md:gap-8 lg:flex-row lg:p-8'>
            <header className='py-4 text-center md:py-8 lg:w-1/2 lg:text-left'>
                <h2 className='uppercase text-primary'>
                    Complete Marketing Skill Sets
                </h2>

                <p className='mt-4 max-w-2xl lg:text-xl'>
                    We cover all the skill sets needed to power-up your business
                </p>
            </header>

            <div className='lg:w-1/2'>
                <div className='flex flex-col items-center md:flex-row'>
                    <div className='flex flex-col gap-6 md:gap-0'>
                        {/* card wrapper */}
                        {marketingSkillSets
                            .slice(0, 3)
                            .map(
                                (
                                    marketingSkillSet: MarketingSkillSet,
                                    index: number,
                                ) => (
                                    <FadeInWhenVisible
                                        key={`skillset-${index}`}
                                        multiplier={index}
                                    >
                                        <div className='group flex flex-col items-center border border-light bg-white p-8 shadow-2xl shadow-primary/10 duration-300 hover:relative hover:shadow-2xl hover:shadow-primary/50'>
                                            <Image
                                                removeWrapper
                                                className='w-16 md:ml-auto'
                                                src={marketingSkillSet.icon}
                                                alt={marketingSkillSet.title}
                                                radius='none'
                                                loading='lazy'
                                            />

                                            <header className='space-y-2 pt-8 text-center md:text-left'>
                                                <h3 className='md:text-2xl'>
                                                    {marketingSkillSet.title}
                                                </h3>

                                                <p className='group-hover:blur-none lg:blur-sm'>
                                                    {
                                                        marketingSkillSet.description
                                                    }
                                                </p>
                                            </header>
                                        </div>
                                    </FadeInWhenVisible>
                                ),
                            )}
                        {/* end of card wrapper */}
                    </div>

                    <div className='mt-6 flex flex-col gap-6 md:mt-0 md:gap-0'>
                        {/* card wrapper */}
                        {marketingSkillSets
                            .slice(3, 5)
                            .map(
                                (
                                    marketingSkillSet: MarketingSkillSet,
                                    index: number,
                                ) => (
                                    <FadeInWhenVisible
                                        key={`skillset-${index}`}
                                        multiplier={index}
                                    >
                                        <div className='group flex flex-col items-center border border-light bg-white p-8 shadow-2xl shadow-primary/10 duration-300 hover:relative hover:shadow-2xl hover:shadow-primary/50'>
                                            <Image
                                                removeWrapper
                                                className='w-16 md:ml-auto'
                                                src={marketingSkillSet.icon}
                                                alt={marketingSkillSet.title}
                                                radius='none'
                                                loading='lazy'
                                            />

                                            <header className='space-y-2 pt-8 text-center md:text-left'>
                                                <h3 className='md:text-2xl'>
                                                    {marketingSkillSet.title}
                                                </h3>

                                                <p className='group-hover:blur-none lg:blur-sm'>
                                                    {
                                                        marketingSkillSet.description
                                                    }
                                                </p>
                                            </header>
                                        </div>
                                    </FadeInWhenVisible>
                                ),
                            )}
                        {/* end of card wrapper */}
                    </div>
                </div>
            </div>
        </div>
    )
}
