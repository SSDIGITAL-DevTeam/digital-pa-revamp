import { JSX } from 'react'
import { Button, Image, Link } from '@nextui-org/react'
import { WhyUs as WhyUsType, whyus } from '@/constants/homepage/whyus'
import FadeInWhenVisible from '@/components/partials/FramerMotion/FadeInWhenVisible'
import AssetLottieWallet from '@/assets/lottiefiles/asset-lottie-wallet.json'
// import LottiePlayer from '@/components/partials/LottieFiles/LottiePlayer'
import dynamic from 'next/dynamic'

const LottiePlayer = dynamic(() => import('@/components/partials/LottieFiles/LottiePlayer'), { ssr: false })


export default function WhyUs(): JSX.Element {
    return (
        <div className='container p-6 lg:p-8'>
            <header className='py-4 text-center md:py-8'>
                <h2 className='uppercase text-primary'>Why Us</h2>

                <p className='mx-auto mt-4 max-w-2xl lg:text-xl'>
                    We take all the hassles so you can focus on your core
                    business strategy
                </p>
            </header>

            <div className='mt-8 space-y-6 lg:space-y-8'>
                <div className='flex flex-col justify-center gap-6 sm:flex-row sm:flex-wrap md:gap-8'>
                    {whyus.slice(0, 4).map((item: WhyUsType, index: number) => (
                        <FadeInWhenVisible
                            key={`whyus-${index}`}
                            multiplier={index}
                        >
                            <div className='flex h-full w-full flex-col items-center gap-2 rounded-2xl bg-white p-8 shadow-2xl shadow-dark/10 duration-150 hover:shadow-2xl hover:shadow-primary/30 sm:w-60 md:max-w-64'>
                                <div className='w-16 overflow-hidden rounded-full'>
                                    <Image
                                        removeWrapper
                                        className='w-16 bg-primary p-3'
                                        src={item.icon}
                                        alt='icon'
                                        radius='lg'
                                        loading='eager'
                                    />
                                </div>

                                <header>
                                    <h3 className='text-center text-lg uppercase md:text-xl'>
                                        {item.title}
                                    </h3>
                                </header>
                            </div>
                        </FadeInWhenVisible>
                    ))}
                </div>

                <div className='mx-auto flex max-w-[58rem] flex-col justify-center gap-6 sm:flex-row sm:flex-wrap md:gap-8'>
                    {whyus.slice(4, 7).map((item: WhyUsType, index: number) => (
                        <FadeInWhenVisible
                            key={`whyus-${index}`}
                            multiplier={index}
                        >
                            <div className='flex h-full w-full flex-col items-center gap-2 rounded-2xl bg-white p-8 shadow-2xl shadow-dark/10 duration-150 hover:shadow-2xl hover:shadow-primary/30 sm:w-60 md:max-w-64'>
                                <div className='w-16 overflow-hidden rounded-full'>
                                    <Image
                                        removeWrapper
                                        className='w-16 bg-primary p-3'
                                        src={item.icon}
                                        alt='icon'
                                        radius='lg'
                                        loading='lazy'
                                    />
                                </div>

                                <header>
                                    <h3 className='text-center text-lg uppercase md:text-xl'>
                                        {item.title}
                                    </h3>
                                </header>
                            </div>
                        </FadeInWhenVisible>
                    ))}
                </div>
            </div>

            <div className='mt-6 md:mt-16'>
                <div className='mx-auto flex max-w-4xl flex-col items-center justify-center gap-4 rounded-2xl bg-primary p-8 text-light md:flex-row md:gap-8'>
                    <LottiePlayer
                        src={AssetLottieWallet}
                        height={200}
                        width={200}
                    />

                    <header className='mt-8 text-center uppercase md:mt-0'>
                        <h3 className='text-3xl font-extrabold md:text-5xl'>
                            SAVE YOU 500%
                        </h3>

                        <h4 className='mt-2 text-xl md:text-2xl'>
                            of the cost needed to achieve all your digital needs
                        </h4>

                        <Button
                            className='mt-4 w-max bg-white text-lg font-bold capitalize md:w-3/4'
                            as={Link}
                            href='/contact-us'
                            fullWidth
                            size='lg'
                            radius='sm'
                        >
                            Free Consultation
                        </Button>
                    </header>
                </div>
            </div>
        </div>
    )
}
