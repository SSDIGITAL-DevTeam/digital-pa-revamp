import FadeInWhenVisible from '@/components/partials/FramerMotion/FadeInWhenVisible'
import { Brand, brands } from '@/constants/homepage/brands'
import OptimizedImage from '@/components/optimized/OptimizedImage'
import { JSX } from 'react'

export default function BrandPartners(): JSX.Element {
    return (
        <div className='container p-6 lg:p-8'>
            <header className='py-4 text-center md:py-8 lg:py-16'>
                <h2 className='uppercase text-primary'>Our Brand Partners</h2>
            </header>

            <div className='mx-auto flex flex-wrap max-w-6xl justify-center items-center gap-4 p-4 lg:gap-8 xl:gap-16'>
                {brands.map((brand: Brand, index: number) => {
                    // Only prioritize first 3 images (above the fold)
                    const isPriority = index < 3

                    return (
                        <FadeInWhenVisible
                            key={`brand-${index}`}
                            multiplier={index / 2}
                        >
                            <OptimizedImage
                                src={brand.logo}
                                alt={brand.name}
                                // Actual source dimensions (adjust based on your actual images)
                                width={800}
                                height={450}
                                // Display dimensions
                                displayWidth={224} // md:w-56 = 14rem = 224px
                                priority={isPriority}
                                quality={80}
                                className='aspect-[18/9] w-32 md:w-56 object-contain'
                            />
                        </FadeInWhenVisible>
                    )
                })}
            </div>

            <div className='mx-auto mt-8'>
                <p className='text-center lg:text-xl'>and many more</p>
            </div>
        </div>
    )
}
