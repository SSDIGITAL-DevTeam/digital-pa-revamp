'use client'

import { Service, serviceTabs } from '@/constants/homepage/service'
import { Image } from '@nextui-org/react'
import OurServicesSlide from './OurServicesSlide'
import { Link } from 'react-scroll'

export default function OurServices(): JSX.Element {
    return (
        <>
            <div className='container p-6 lg:p-8'>
                <header  className='py-4 text-center lg:py-12'>
                    <h2 data-scroll data-scroll-speed="0.1" className='uppercase text-primary'>
                        One Personal Assistant for All Tasks
                    </h2>

                    <p data-scroll data-scroll-speed="0.08" className='mx-auto mt-4 max-w-2xl lg:text-xl'>
                        Don&apos;t waste your time and money on hiring a
                        dedicated specialist! <br /> Our team mostly consist all
                        specialists you need to run a success campaign
                    </p>
                </header>
            </div>

            {/* sticky scroll container */}
            <div className='p-6 lg:p-8'>
                <div className='flex flex-col lg:flex-row'>
                    {/* tab wrapper */}
                    <div className='hidden bg-transparent backdrop-blur-sm lg:flex lg:w-1/3'>
                        <ul className='sticky top-24 flex h-fit w-full flex-col gap-y-4 pr-6'>
                            {serviceTabs.map(
                                (service: Service, index: number) => (
                                    <Link
                                        activeClass='service-active-scroll'
                                        spy={true}
                                        to={`service-${index}`}
                                        duration={300}
                                        offset={-150}
                                        className={`cursor-pointer rounded-lg bg-white p-4 shadow-lg transition duration-300 lg:px-12 2xl:py-6`}
                                        key={`tab-${index}`}
                                    >
                                        <header className='flex items-center gap-4'>
                                            <Image
                                                removeWrapper
                                                src={service.icon}
                                                alt='icon'
                                                radius='none'
                                                loading='lazy'
                                            />

                                            <h3 className='xl:text-2xl'>
                                                {service.name}
                                            </h3>
                                        </header>
                                    </Link>
                                ),
                            )}
                        </ul>
                    </div>
                    {/* end of tab wrapper */}

                    {/* MOBILE VIEW */}
                    {/* tab detail wrapper */}
                    <div className='flex flex-col items-center gap-6 lg:hidden'>
                        {serviceTabs.map((service: Service, index: number) => (
                            <OurServicesSlide
                                key={`service-${index}`}
                                service={service}
                            />
                        ))}
                    </div>
                    {/* end of tab detail wrapper */}

                    {/* DESKTOP VIEW */}
                    {/* tab detail wrapper */}
                    <div className='hidden items-center gap-y-8 lg:flex lg:w-2/3 lg:flex-col lg:px-8'>
                        {serviceTabs.map((service: Service, index: number) => (
                            <div
                                key={`service-${index}`}
                                id={`service-${index}`}
                                // @ts-expect-error ignore this
                                name={`service-${index}`}
                            >
                                {/* <FadeInWhenVisible> */}
                                <OurServicesSlide service={service} />
                                {/* </FadeInWhenVisible> */}
                            </div>
                        ))}
                    </div>
                    {/* end of tab detail wrapper */}
                </div>
            </div>
            {/* end of sticky scroll container */}
        </>
    )
}
