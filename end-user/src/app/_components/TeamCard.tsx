"use client"

import Image from "next/image"
import { useState } from "react"

interface TeamCardProps {
    name: string
    position: string
    image: string
}

export default function TeamCard({ name, position, image }: TeamCardProps) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div
            className="relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl cursor-pointer group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Image Container */}
            <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-200">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
            </div>

            {/* Identity Card - Default: Red bg, White text */}
            <div
                className={`
                    absolute bottom-0 left-0 right-0 
                    py-4 px-6 
                    transition-all duration-300 ease-in-out
                    ${isHovered
                        ? 'bg-white text-primary'
                        : 'bg-primary text-white'
                    }
                `}
            >
                <h3 className="font-bold text-lg mb-1 transition-colors duration-300">
                    {name}
                </h3>
                <p className="text-sm opacity-90 transition-colors duration-300">
                    {position}
                </p>
            </div>
        </div>
    )
}
