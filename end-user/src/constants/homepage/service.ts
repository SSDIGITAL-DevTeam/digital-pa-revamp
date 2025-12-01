import AssetTabMarketingManager from '@/assets/homepage/svg/asset-tab-marketing-manager.svg'
import AssetCopywriter from '@/assets/homepage/svg/asset-tab-copywriter.svg'
import AssetAdsSpecialist from '@/assets/homepage/svg/asset-tab-ads-specialist.svg'
import AssetCreativeDesigner from '@/assets/homepage/svg/asset-tab-creative-designer.svg'
import AssetUiuxSpecialist from '@/assets/homepage/svg/asset-tab-uiux-specialist.svg'
import AssetWebDeveloper from '@/assets/homepage/svg/asset-tab-web-developer.svg'
import AssetSlide1_1 from '@/assets/homepage/svg/asset-slide1-1.svg'
import AssetSlide1_2 from '@/assets/homepage/svg/asset-slide1-2.svg'
import AssetSlide1_3 from '@/assets/homepage/svg/asset-slide1-3.svg'
import AssetSlide2_1 from '@/assets/homepage/svg/asset-slide2-1.svg'
import AssetSlide2_2 from '@/assets/homepage/svg/asset-slide2-2.svg'
import AssetSlide2_3 from '@/assets/homepage/svg/asset-slide2-3.svg'
import AssetSlide3_1 from '@/assets/homepage/svg/asset-slide3-1.svg'
import AssetSlide3_2 from '@/assets/homepage/svg/asset-slide3-2.svg'
import AssetSlide3_3 from '@/assets/homepage/svg/asset-slide3-3.svg'
import AssetSlide4_1 from '@/assets/homepage/svg/asset-slide4-1.svg'
import AssetSlide4_2 from '@/assets/homepage/svg/asset-slide4-2.svg'
import AssetSlide4_3 from '@/assets/homepage/svg/asset-slide4-3.svg'
import AssetSlide5_1 from '@/assets/homepage/svg/asset-slide5-1.svg'
import AssetSlide5_2 from '@/assets/homepage/svg/asset-slide5-2.svg'
import AssetSlide5_3 from '@/assets/homepage/svg/asset-slide5-3.svg'
import AssetSlide6_1 from '@/assets/homepage/svg/asset-slide6-1.svg'
import AssetSlide6_2 from '@/assets/homepage/svg/asset-slide6-2.svg'
import AssetSlide6_3 from '@/assets/homepage/svg/asset-slide6-3.svg'
import AssetLottieMarketingManager from '@/assets/lottiefiles/asset-lottie-marketing-manager.json'
import AssetLottieCopywriter from '@/assets/lottiefiles/asset-lottie-copywriter.json'
import AssetLottieAdsSpecialist from '@/assets/lottiefiles/asset-lottie-ads-specialist.json'
import AssetLottieCreativeDesigner from '@/assets/lottiefiles/asset-lottie-creative-designer.json'
import AssetLottieUiUxSpecialist from '@/assets/lottiefiles/asset-lottie-uiux-specialist.json'
import AssetLottieWebDeveloper from '@/assets/lottiefiles/asset-lottie-web-developer.json'

export type Service = {
    name: string
    icon: string
    content: {
        description: string
        motion: string | object
        details: ServiceDetail[]
    }
}

export type ServiceDetail = {
    name: string
    description: string
    icon: string
}

export const serviceTabs: Service[] = [
    {
        name: 'Marketing Manager',
        icon: AssetTabMarketingManager.src,
        content: {
            description:
                "Feeling overwhelmed by marketing? Let us be your marketing manager!  We'll handle everything from strategy to campaigns, so you can focus on running your business.",
            motion: AssetLottieMarketingManager,
            details: [
                {
                    name: 'Reduced Workload',
                    description:
                        'Free up your time to focus on strategic initiatives.',
                    icon: AssetSlide1_1.src,
                },
                {
                    name: 'Increased ROI',
                    description:
                        'Maximize the impact of your marketing budget.',
                    icon: AssetSlide1_2.src,
                },
                {
                    name: 'Improved Campaign Performance',
                    description:
                        'Achieve better results through data-driven decision-making.',
                    icon: AssetSlide1_3.src,
                },
            ],
        },
    },
    {
        name: 'Copywriter',
        icon: AssetCopywriter.src,
        content: {
            description:
                'Struggling to write copy that converts? We wield the power of words to transform your marketing materials into persuasive messages that convert readers into customers.',
            motion: AssetLottieCopywriter,
            details: [
                {
                    name: 'Stronger Brand Identity',
                    description:
                        'Build a memorable voice that sets you apart and resonates with your target audience.',
                    icon: AssetSlide2_1.src,
                },
                {
                    name: 'Content Powerhouse',
                    description:
                        'We create captivating copy for all your marketing needs – website, emails, social media, and more.',
                    icon: AssetSlide2_2.src,
                },
                {
                    name: 'Measurable Results',
                    description:
                        'We track performance and provide insights to continuously improve your marketing efforts.',
                    icon: AssetSlide2_3.src,
                },
            ],
        },
    },
    {
        name: 'Ads Specialist',
        icon: AssetAdsSpecialist.src,
        content: {
            description:
                'Struggling to reach your target audience online? We use paid advertising to reach the right people online, driving traffic to your marketing channels and turning clicks into customers.',
            motion: AssetLottieAdsSpecialist,
            details: [
                {
                    name: 'More Engagement',
                    description:
                        'Increase interactions across your marketing channels (website, social media, email, etc.).',
                    icon: AssetSlide3_1.src,
                },
                {
                    name: 'Boost Conversions',
                    description:
                        'Turn more interactions into leads and sales. Get the most out of your advertising spend.',
                    icon: AssetSlide3_2.src,
                },
                {
                    name: 'Track & Improve',
                    description:
                        'We monitor results and make data-driven decisions to optimize your campaigns.',
                    icon: AssetSlide3_3.src,
                },
            ],
        },
    },
    {
        name: 'Creative Designer',
        icon: AssetCreativeDesigner.src,
        content: {
            description:
                "We believe visuals are powerful! That's why our creative designers craft eye-catching graphics, website designs, and marketing materials that grab attention and leave a lasting impression.",
            motion: AssetLottieCreativeDesigner,
            details: [
                {
                    name: 'Strong First Impression',
                    description:
                        'Attract your audience with professional and visually compelling designs.',
                    icon: AssetSlide4_1.src,
                },
                {
                    name: 'Brand Storytelling',
                    description:
                        'We use visuals to effectively communicate your unique brand identity and message.',
                    icon: AssetSlide4_2.src,
                },
                {
                    name: 'Boost Brand Recognition',
                    description:
                        'Consistent and memorable visuals build brand awareness over time.',
                    icon: AssetSlide4_3.src,
                },
            ],
        },
    },
    {
        name: 'UIUX Specialist',
        icon: AssetUiuxSpecialist.src,
        content: {
            description:
                'We make using your product or website a breeze! Our UI/UX Specialists combine user research with beautiful design to create intuitive and enjoyable experiences that keep users engaged.',
            motion: AssetLottieUiUxSpecialist,
            details: [
                {
                    name: 'Enhanced Conversions',
                    description:
                        'Well-designed interfaces can lead to more leads, sales, or signups.',
                    icon: AssetSlide5_1.src,
                },
                {
                    name: 'Data-Driven Design',
                    description:
                        'We use data and user feedback to continuously improve the user experience.',
                    icon: AssetSlide5_2.src,
                },
                {
                    name: 'Competitive Advantage',
                    description:
                        "A well-designed interface can give you a significant edge in today's competitive market.",
                    icon: AssetSlide5_3.src,
                },
            ],
        },
    },
    {
        name: 'Skilled Web Developers',
        icon: AssetWebDeveloper.src,
        content: {
            description:
                'We bring your website vision to life! Our skilled web developers translate your ideas into functional and visually appealing websites that are built to perform.',
            motion: AssetLottieWebDeveloper,
            details: [
                {
                    name: 'Custom Website Solutions',
                    description:
                        'Get a website tailored to your specific needs and goals.',
                    icon: AssetSlide6_1.src,
                },
                {
                    name: 'Fast & Responsive Websites',
                    description:
                        'We build websites that load quickly and adapt seamlessly to any device.',
                    icon: AssetSlide6_2.src,
                },
                {
                    name: 'Seamless Maintenance',
                    description:
                        'We provide ongoing maintenance and support to ensure your website stays up-to-date.',
                    icon: AssetSlide6_3.src,
                },
            ],
        },
    },
]
