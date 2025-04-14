import { JSX } from 'react'
import dynamic from 'next/dynamic'

const LottiePlayer = dynamic(() => import('@/components/partials/LottieFiles/LottiePlayer'), { ssr: false })

import { Advantage, advantages } from '@/constants/about-us/advantage'
import ConsultationButton from '@/components/partials/Button/Consultation'
// import { Button } from '@nextui-org/react'
// import Link from 'next/link'

export default function Advantages(): JSX.Element {
    return (
        <div className='container p-6 lg:p-8'>
            {/* card wrapper */}
            <div className='mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8 xl:gap-16'>
                {advantages.map((advantage: Advantage, index: number) => (
                    <div
                        className='flex flex-col items-center gap-4 p-4'
                        key={`advantage-${index}`}
                    >
                        <LottiePlayer src={advantage.motion} />

                        <header>
                            <h2 className='mx-auto max-w-[25rem] text-center text-2xl font-bold uppercase text-primary'>
                                {advantage.title}
                            </h2>

                            <p className='mt-4 text-center font-medium text-neutral-600 sm:text-lg'>
                                {advantage.description}
                            </p>
                        </header>
                    </div>
                ))}
                <div className='col-span-2 w-full flex items-center justify-center'>
                <ConsultationButton/>
                </div>
            </div>
            {/* end of card wrapper */}

            {/* <div className='mx-auto mt-8 block max-w-xs md:mt-16'>
                <Button
                    className='font-semibold'
                    as={Link}
                    href='/contact-us'
                    color='primary'
                    size='lg'
                    radius='sm'
                    fullWidth
                >
                    Let&apos;s Talk
                </Button>
            </div> */}
        </div>
    )
}
