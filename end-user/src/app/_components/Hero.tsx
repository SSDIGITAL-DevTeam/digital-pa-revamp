import Link from 'next/link'
import { JSX } from 'react'

export default function Hero(): JSX.Element {
    return (
        <div className='container h-screen p-6 lg:p-8 z-[50]'>
            <div className='flex h-full flex-col justify-center pb-24 text-center lg:text-left'>
                <h1 className='relative uppercase leading-tight' data-scroll data-scroll-speed="1.15">
                    <span className='text-primary'>
                        Hire a Digital Personal
                    </span>{' '}
                    <br /> Assistant that Does It All
                </h1>

                <p className='relative mt-4 max-w-3xl text-xl md:text-3xl' data-scroll data-scroll-speed="1.1">
                    Think of us as your Digital Partner — <br/>
                    simplifying marketing, automation, and growth for your business.
                </p>
                <Link href={"/contact-us"} className='z-50' data-scroll data-scroll-speed="1.05">
                    <button className='mt-8 relative bg-primary  cursor-pointer hover:shadow-primary/60 hover:shadow-md py-4 px-20 w-fit text-center font-semibold text-white rounded-lg duration-300 transition-all'> Boost Your Sales
                    </button>
                </Link>
            </div>
        </div>
    )
}
