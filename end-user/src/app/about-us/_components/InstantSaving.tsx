import React from 'react'
// import LottiePlayer from '@/components/partials/LottieFiles/LottiePlayer'
import dynamic from 'next/dynamic'

const LottiePlayer = dynamic(() => import('@/components/partials/LottieFiles/LottiePlayer'), { ssr: false })

import AssetLottieWallet from '@/assets/lottiefiles/asset-lottie-wallet.json'
import { Button, Link } from '@nextui-org/react'

export default function InstantSaving(): JSX.Element {
    return (
        <div className='container p-6 md:p-8'>
            <header className='space-y-6 md:space-y-8'>
                <p className='text-center text-xl md:text-2xl'>
                    Everything You Need Digitally,
                </p>
                <div className='flex flex-col justify-center text-center'>
                    <h2 className='text-4xl md:mx-auto md:w-3/4 md:text-5xl'>
                        <span className='leading-normal text-primary'>
                            Digital PA
                        </span>{' '}
                        is Your Best Digital Assistant to Solve All Your Digital
                        Needs
                    </h2>
                </div>
            </header>

            <div className='mt-6 md:mt-16'>
                <div className='mx-auto flex max-w-4xl flex-col items-center justify-center gap-4 rounded-2xl bg-primary p-8 text-light md:flex-row md:gap-8'>
                    <LottiePlayer
                        src={AssetLottieWallet}
                        height={200}
                        width={200}
                    />

                    <header className='mt-8 text-center uppercase md:mt-0 '>
                        <h3 className='mx-auto text-3xl font-extrabold md:w-3/4 md:text-5xl'>
                            Instant Saving of $500
                        </h3>

                        <Button
                            className='mx-auto mt-4 w-max bg-white text-lg font-bold capitalize'
                            as={Link}
                            href='/contact-us'
                            fullWidth
                            size='lg'
                            radius='sm'
                        >
                            Engage With Us Now
                        </Button>
                    </header>
                </div>
            </div>
        </div>
    )
}
