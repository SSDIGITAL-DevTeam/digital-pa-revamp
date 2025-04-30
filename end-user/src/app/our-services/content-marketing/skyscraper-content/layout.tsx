import { JSX, ReactNode } from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Skyscraper Content | Your Digital Partner in Digital Products',
    description: 'Digital PA - Your digital partner in digital products',
}

export default function Layout({ children }: Readonly<{ children: ReactNode }>): JSX.Element {
    return <>{children}</>
}
