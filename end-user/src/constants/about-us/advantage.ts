import AssetLottieAdvantage1 from '@/assets/lottiefiles/asset-lottie-business-helper.json'
import AssetLottieAdvantage2 from '@/assets/lottiefiles/asset-lottie-speed-quality.json'

export type Advantage = {
    motion: string | object
    title: string
    description: string
}

export const advantages: Advantage[] = [
    {
        motion: AssetLottieAdvantage1,
        title: 'Help Business Owners Focus on the Core Business',
        description:
            "We don't want business owners to be distracted from the important search for the best solutions. By letting us handle all the routine marketing tasks, business owners can focus on driving their business forward.",
    },
    {
        motion: AssetLottieAdvantage2,
        title: 'Speed, Quality, Concurrency',
        description:
            'We always strive to become better — as individuals, employees, business partners,and a company. We never stop seeking a faster and better-quality way to work, concurrently.',
    },
]
