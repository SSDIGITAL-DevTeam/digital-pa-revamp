import { JSX } from 'react'
import { Image } from '@nextui-org/react'
import AssetLogoWithText from '@/assets/logo/webp/asset-logo-with-text.webp'

export default function Logo({
    className = 'w-48',
}: {
    className?: string
}): JSX.Element {
    return (
        <figure>
            <Image
                className={`${className}`}
                src={AssetLogoWithText.src}
                removeWrapper
                loading='eager'
                radius='none'
                alt='Logo'
            />
        </figure>
    )
}
