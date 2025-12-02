import { JSX } from 'react'
// import LottiePlayer from '@/components/partials/LottieFiles/LottiePlayer'
import dynamic from 'next/dynamic'
import OptimizedImage from '@/components/optimized/OptimizedImage'

const LottiePlayer = dynamic(() => import('@/components/partials/LottieFiles/LottiePlayer'), { ssr: false })

import { Service, ServiceDetail } from '@/constants/homepage/service'

type Props = {
    service: Service
}

export default function OurServicesSlide({ service }: Props): JSX.Element {
    return (
        <div className='flex w-full flex-col justify-center rounded-xl bg-white p-6 shadow-lg lg:p-8'>
            <header className='flex flex-col items-center gap-6 lg:flex-row lg:gap-8'>
                <LottiePlayer
                    src={service?.content?.motion}
                    width={200}
                    height={200}
                />

                <div className='text-center lg:w-3/4 lg:text-left'>
                    <h3 className='2xl:text-4xl'>{service?.name}</h3>

                    <p className='mt-2 tracking-wide text-neutral-600 md:text-lg 2xl:text-2xl'>
                        {service?.content?.description}
                    </p>
                </div>
            </header>

            <div className='mt-8 grid gap-4 md:grid-cols-3 lg:mt-4'>
                {service?.content?.details.map(
                    (detail: ServiceDetail, index: number) => (
                        <header
                            className='flex flex-col items-center justify-start gap-2.5 p-4 text-center'
                            key={`detail-${index}`}
                        >
                            <OptimizedImage
                                src={detail.icon}
                                alt='icon'
                                width={64}
                                height={64}
                                priority={false}
                            />

                            <h4 className='text-lg 2xl:text-2xl'>
                                {detail.name}
                            </h4>

                            <p className='text-sm text-neutral-600 2xl:text-xl'>
                                {detail.description}
                            </p>
                        </header>
                    ),
                )}
            </div>
        </div>
    )
}
