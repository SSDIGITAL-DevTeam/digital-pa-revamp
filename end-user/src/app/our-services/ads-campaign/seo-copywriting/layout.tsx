import { JSX, ReactNode } from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'SEO Copywriting | Your Digital Partner in Digital Products',
    description: 'Digital PA - Your digital partner in digital products',
}

export default function Layout({ children }: Readonly<{ children: ReactNode }>): JSX.Element {
    return <>{children}</>
}
