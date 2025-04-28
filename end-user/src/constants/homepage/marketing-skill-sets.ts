import AssetMarketingSkillSet1 from '@/assets/homepage/svg/asset-marketing-skillset-1.svg'
import AssetMarketingSkillSet2 from '@/assets/homepage/svg/asset-marketing-skillset-2.svg'
import AssetMarketingSkillSet3 from '@/assets/homepage/svg/asset-marketing-skillset-3.svg'
import AssetMarketingSkillSet4 from '@/assets/homepage/svg/asset-marketing-skillset-4.svg'
import AssetMarketingSkillSet5 from '@/assets/homepage/svg/asset-marketing-skillset-5.svg'

export type MarketingSkillSet = {
    icon: string
    title: string
    description: string
}

export const marketingSkillSets: MarketingSkillSet[] = [
    {
        icon: AssetMarketingSkillSet1.src,
        title: 'Google Ads',
        description:
            'Stop Google Ads struggles. Get certified experts to manage & optimize campaigns for maximum leads & sales.',
    },
    {
        icon: AssetMarketingSkillSet2.src,
        title: 'Search Engine Optimization',
        description:
            'Make a splash! We craft targeted social media ads that grab attention and drive results.',
    },
    {
        icon: AssetMarketingSkillSet3.src,
        title: 'Competitor analysis',
        description:
            'Get found online. We optimize your website to rank higher in searches, bringing customers straight to you.',
    },
    {
        icon: AssetMarketingSkillSet4.src,
        title: 'Social Media Ads',
        description:
            'Chart your marketing course. We build a data-driven plan that sets clear goals and gets you there.',
    },
    {
        icon: AssetMarketingSkillSet5.src,
        title: 'Strategic planning',
        description:
            'Know your rivals. We analyze your competition to uncover their secrets and give you the edge.',
    },
]
