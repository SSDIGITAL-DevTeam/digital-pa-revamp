import { JSX, ReactNode } from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'AI Automation Solutions | Your Digital Partner in Digital Products',
    description: 'Discover how Digital PA’s AI automation services help businesses in Singapore streamline operations, reduce costs, and enhance efficiency through intelligent automation and digital transformation.',
}

export default function Layout({ children }: Readonly<{ children: ReactNode }>): JSX.Element {
    return <>{children}</>
}
