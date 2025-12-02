import { JSX } from 'react'
import AssetLogoWithText from '@/assets/logo/webp/asset-logo-with-text.webp'
import OptimizedImage from '@/components/optimized/OptimizedImage'

export default function Logo({
    className = 'w-48',
}: {
    className?: string
}): JSX.Element {
    return (
        <figure>
            <OptimizedImage
                className={`${className}`}
                src={AssetLogoWithText.src}
                alt='Logo'
                width={192}
                height={36}
                priority={true}
            />
        </figure>
    )
}
