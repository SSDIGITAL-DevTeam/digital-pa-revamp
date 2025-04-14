import { JSX } from 'react'
import { Faq as FaqType, faqs } from '@/constants/homepage/faq'
import { Image } from '@nextui-org/react'
import AssetFaqQuestion from '@/assets/homepage/svg/asset-faq-question.svg'

export default function Faq(): JSX.Element {
    return (
        <div className='container p-6 lg:p-8'>
            <header className='py-4 text-center md:py-8'>
                <h2 className='uppercase text-primary'>
                    Frequently asked question
                </h2>
            </header>

            <div className='mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-8 md:grid-cols-2 lg:gap-16'>
                {faqs.map((faq: FaqType, index: number) => (
                    <div className='space-y-2.5' key={`faq-${index}`}>
                        <header className='flex items-start gap-4'>
                            <Image
                                removeWrapper
                                className='min-w-12'
                                src={AssetFaqQuestion.src}
                                alt='Question'
                            />

                            <h3 className='w-fit text-lg md:text-xl'>
                                {faq.question}
                            </h3>
                        </header>

                        <p className='text-sm lg:text-base'>{faq.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
