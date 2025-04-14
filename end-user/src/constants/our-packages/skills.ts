import AssetSolution1 from '@/assets/our-packages/webp/asset-solution-1.webp'
import AssetSolution2 from '@/assets/our-packages/webp/asset-solution-2.webp'
import AssetSolution3 from '@/assets/our-packages/webp/asset-solution-3.webp'
import AssetSolution4 from '@/assets/our-packages/webp/asset-solution-4.webp'
import AssetSolution5 from '@/assets/our-packages/webp/asset-solution-5.webp'
import AssetSolution6 from '@/assets/our-packages/webp/asset-solution-6.webp'

export type SkillSets = {
    icon: string
    title: string
}

export const skillSets: SkillSets[] = [
    {
        icon: AssetSolution1.src,
        title: 'Google Ads',
    },
    {
        icon: AssetSolution2.src,
        title: 'Meta Ads',
    },
    {
        icon: AssetSolution3.src,
        title: 'SEO Management',
    },
    {
        icon: AssetSolution4.src,
        title: 'Strategic Planning',
    },
    {
        icon: AssetSolution5.src,
        title: 'Competitor Research',
    },
    {
        icon: AssetSolution6.src,
        title: 'Website Management',
    },
]
