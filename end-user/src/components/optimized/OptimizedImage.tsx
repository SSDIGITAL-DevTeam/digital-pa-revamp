import Image, { ImageProps } from 'next/image'

interface OptimizedImageProps extends Omit<ImageProps, 'width' | 'height'> {
    src: string
    alt: string
    width: number
    height: number
    displayWidth?: number
    priority?: boolean
}

/**
 * Optimized Image Component
 * 
 * This component ensures images are properly sized for their display dimensions,
 * reducing unnecessary bandwidth and improving performance.
 * 
 * @param displayWidth - The actual display width in pixels (for responsive sizing)
 */
export default function OptimizedImage({
    src,
    alt,
    width,
    height,
    displayWidth,
    priority = false,
    quality,
    ...props
}: OptimizedImageProps) {
    // Calculate optimal quality based on image size
    const optimalQuality = quality || (width > 1000 ? 75 : 85)

    // Generate responsive sizes if display dimensions are provided
    const sizes = displayWidth
        ? `(max-width: 640px) ${displayWidth}px, (max-width: 1024px) ${displayWidth * 1.5}px, ${displayWidth * 2}px`
        : undefined

    return (
        <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            quality={optimalQuality}
            priority={priority}
            loading={priority ? 'eager' : 'lazy'}
            sizes={sizes}
            {...props}
        />
    )
}
