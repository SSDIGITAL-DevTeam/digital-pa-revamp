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
            'Stop Google Ads struggles. Get certified experts to manage & optimize campaigns for maximum leads & sales.',
    },
    {
        icon: AssetMarketingSkillSet3.src,
        title: 'Competitor analysis',
        description:
            'Stop Google Ads struggles. Get certified experts to manage & optimize campaigns for maximum leads & sales.',
    },
    {
        icon: AssetMarketingSkillSet4.src,
        title: 'Social Media Ads',
        description:
            'Stop Google Ads struggles. Get certified experts to manage & optimize campaigns for maximum leads & sales.',
    },
    {
        icon: AssetMarketingSkillSet5.src,
        title: 'Strategic planning',
        description:
            'Stop Google Ads struggles. Get certified experts to manage & optimize campaigns for maximum leads & sales.',
    },
]
