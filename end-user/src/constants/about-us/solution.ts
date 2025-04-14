import AssetSolution1 from '@/assets/about-us/webp/asset-solution-1.webp'
import AssetSolution2 from '@/assets/about-us/webp/asset-solution-2.webp'
import AssetSolution3 from '@/assets/about-us/webp/asset-solution-3.webp'
import AssetSolution4 from '@/assets/about-us/webp/asset-solution-4.webp'
import AssetSolution5 from '@/assets/about-us/webp/asset-solution-5.webp'
import AssetSolution6 from '@/assets/about-us/webp/asset-solution-6.webp'
import AssetSolution7 from '@/assets/about-us/webp/asset-solution-7.webp'

export type Solution = {
    icon: string
    title: string
}

export const solutions: Solution[] = [
    {
        icon: AssetSolution1.src,
        title: 'Web Design & Development',
    },
    {
        icon: AssetSolution2.src,
        title: 'Digital Campaign',
    },
    {
        icon: AssetSolution3.src,
        title: 'Creative Design',
    },
    {
        icon: AssetSolution4.src,
        title: 'Facebook',
    },
    {
        icon: AssetSolution5.src,
        title: 'Instagram',
    },
    {
        icon: AssetSolution6.src,
        title: 'Tiktok',
    },
    {
        icon: AssetSolution7.src,
        title: 'Performance Report',
    },
    {
        icon: '',
        title: '',
    },

    {
        icon: AssetSolution7.src,
        title: 'Competitor Research',
    },
]
