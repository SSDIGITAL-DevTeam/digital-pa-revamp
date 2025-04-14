import FadeInWhenVisible from '@/components/partials/FramerMotion/FadeInWhenVisible'
import { Brand, brands } from '@/constants/homepage/brands'
import { Image } from '@nextui-org/react'
import { JSX } from 'react'

export default function BrandPartners(): JSX.Element {
    return (
        <div className='container p-6 lg:p-8'>
            <header className='py-4 text-center md:py-8 lg:py-16'>
                <h2 className='uppercase text-primary'>Our Brand Partners</h2>
            </header>

            <div className='mx-auto grid max-w-6xl grid-cols-2 place-items-center gap-4 p-4 lg:grid-cols-4 lg:gap-8 xl:gap-16'>
                {brands.map((brand: Brand, index: number) => (
                    <FadeInWhenVisible
                        key={`brand-${index}`}
                        multiplier={index / 2}
                    >
                        <Image
                            className='aspect-[18/9] w-64 object-contain'
                            loading='lazy'
                            src={brand.logo}
                            alt={brand.name}
                        />
                    </FadeInWhenVisible>
                ))}
            </div>

            <div className='mx-auto mt-8'>
                <p className='text-center lg:text-xl'>and many more</p>
            </div>
        </div>
    )
}
