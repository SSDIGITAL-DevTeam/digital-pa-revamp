'use client'

import { JSX } from 'react'
import AssetFaq1 from '@/assets/our-packages/webp/asset-faq-1.webp'
import AssetFaq2 from '@/assets/our-packages/webp/asset-faq-2.webp'
import AssetFaq3 from '@/assets/our-packages/webp/asset-faq-3.webp'
import { Accordion, AccordionItem, Image } from '@nextui-org/react'

export default function Faq(): JSX.Element {
    return (
        <div className='container p-6 lg:p-8'>
            <div className='flex flex-col items-center gap-6 md:flex-row md:gap-10'>
                <header className='py-4 text-center md:w-1/3 md:py-8'>
                    <h2 className='uppercase text-primary'>Why Us</h2>
                </header>

                <div className='mx-auto mt-8 md:w-2/3'>
                    <Accordion
                        defaultExpandedKeys={['1']}
                        className='w-full border-none px-0'
                    >
                        <AccordionItem
                            className='no-border'
                            classNames={{
                                heading:
                                    'bg-white px-2 md:px-4 mb-2 shadow-lg shadow-primary/10 rounded-md',
                                indicator: 'text-xl lg:text-4xl text-primary',
                                content:
                                    'bg-white shadow-lg shadow-primary/10 rounded-md px-6 md:px-8 py-4 mb-2',
                            }}
                            key='1'
                            aria-label='Faq1'
                            startContent={
                                <Image
                                    alt='Faq1'
                                    className='object-cover lg:h-14 lg:w-14'
                                    src={AssetFaq1.src}
                                />
                            }
                            title={
                                <h6 className='font-normal lg:text-2xl'>
                                    If You hire{' '}
                                    <span className='font-semibold text-primary'>
                                        Your Own Agencies{' '}
                                    </span>
                                    to solve your digital needs
                                </h6>
                            }
                        >
                            <div>
                                <ul className='list-disc space-y-4 pl-4 text-2xl'>
                                    <li className='mb-4'>
                                        <h6 className='text-base lg:text-2xl'>
                                            Faced the{' '}
                                            <span className='font-semibold text-primary'>
                                                challenge of communicating with
                                                various personnels
                                            </span>{' '}
                                            in different agencies
                                        </h6>
                                    </li>

                                    <li>
                                        <h6 className='text-base lg:text-2xl'>
                                            Paid for
                                            <span className='font-semibold text-primary'>
                                                {' '}
                                                overlapping values
                                            </span>{' '}
                                            by various agencies
                                        </h6>
                                    </li>

                                    <li className='colored-disc'>
                                        <h6 className='text-base lg:text-2xl'>
                                            <span className='font-semibold text-primary'>
                                                Uncoordinated actions
                                            </span>{' '}
                                            & unwillingness to cooperate between
                                            agencies
                                        </h6>
                                    </li>

                                    <li className='colored-disc'>
                                        <h6 className='text-base lg:text-2xl'>
                                            <span className='font-semibold text-primary'>
                                                Cashflow tied up
                                            </span>{' '}
                                            with packages & deals with various
                                            agencies
                                        </h6>
                                    </li>
                                </ul>
                            </div>
                        </AccordionItem>
                        <AccordionItem
                            className='no-border'
                            classNames={{
                                heading:
                                    'bg-white px-2 md:px-4 mb-2 shadow-lg shadow-primary/10 rounded-md',
                                indicator: 'text-xl lg:text-4xl text-primary',
                                content:
                                    'bg-white shadow-lg shadow-primary/10 rounded-md px-6 md:px-8 py-4 mb-2',
                            }}
                            key='2'
                            aria-label='Faq2'
                            startContent={
                                <Image
                                    alt='Faq2'
                                    className='object-cover lg:h-14 lg:w-14'
                                    src={AssetFaq2.src}
                                />
                            }
                            title={
                                <h6 className='font-normal lg:text-2xl'>
                                    If You hire{' '}
                                    <span className='font-semibold text-primary'>
                                        Your Own In-House Digital Marketing
                                        Executive
                                    </span>
                                </h6>
                            }
                        >
                            <div>
                                <ul className='list-disc space-y-4 pl-4 text-2xl'>
                                    <li className='colored-disc mb-4'>
                                        <h6 className='text-base lg:text-2xl'>
                                            <span className='font-semibold text-primary'>
                                                Do not have the skillsets,
                                                experience & exposures
                                            </span>{' '}
                                            to solve all your digital needs
                                        </h6>
                                    </li>

                                    <li>
                                        <h6 className='text-base lg:text-2xl'>
                                            Do not know how to set expectations,
                                            expect performance, manage workflow
                                            due to
                                            <span className='font-semibold text-primary'>
                                                {' '}
                                                lack of expertise
                                            </span>{' '}
                                            in the subject field
                                        </h6>
                                    </li>

                                    <li>
                                        <h6 className='text-base lg:text-2xl'>
                                            Do not know what they need to know
                                        </h6>
                                    </li>
                                </ul>
                            </div>
                        </AccordionItem>
                        <AccordionItem
                            className='no-border'
                            classNames={{
                                heading:
                                    'bg-white px-2 md:px-4 mb-2 shadow-lg shadow-primary/10 rounded-md',
                                indicator: 'text-xl lg:text-4xl text-primary',
                                content:
                                    'bg-white shadow-lg shadow-primary/10 rounded-md px-6 md:px-8 py-4 mb-2 border-0',
                            }}
                            key='3'
                            aria-label='Faq3'
                            startContent={
                                <Image
                                    alt='Faq3'
                                    className='object-cover lg:h-14 lg:w-14'
                                    src={AssetFaq3.src}
                                />
                            }
                            title={
                                <h6 className='font-normal lg:text-2xl'>
                                    If You hire and build{' '}
                                    <span className='font-semibold text-primary'>
                                        Your Own In-House Digital Team
                                    </span>
                                </h6>
                            }
                        >
                            <div>
                                <ul className='list-disc space-y-4 pl-4 text-2xl'>
                                    <li className='colored-disc mb-4'>
                                        <h6 className='text-base lg:text-2xl'>
                                            <span className='font-semibold text-primary'>
                                                High cost
                                            </span>{' '}
                                            to maintain for handling in-house
                                            digital needs
                                        </h6>
                                    </li>

                                    <li className='colored-disc mb-4'>
                                        <h6 className='text-base lg:text-2xl'>
                                            <span className='font-semibold text-primary'>
                                                Bigger hassle
                                            </span>{' '}
                                            in dealing with MoM requirements
                                            such as quota, levies, CPF, sick
                                            leaves, off-days, MC, employee
                                            benefits, & salary calculating
                                        </h6>
                                    </li>
                                </ul>
                            </div>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}
