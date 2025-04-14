import AssetBikeChoice from '@/assets/homepage/webp/asset-bikechoice.webp'
import AssetIsun from '@/assets/homepage/webp/asset-isun.webp'
import AssetHealingLoft from '@/assets/homepage/webp/asset-healingloft.webp'
import AssetHiger from '@/assets/homepage/webp/asset-higer.webp'
import AssetCarChoice from '@/assets/homepage/webp/asset-carchoice.webp'
import AssetSuma from '@/assets/homepage/webp/asset-suma.webp'
import AssetWinphuket from '@/assets/homepage/webp/asset-winphuket.webp'
import AssetMotorCheckup from '@/assets/homepage/webp/asset-motorcheckup.webp'

export type Brand = {
    name: string
    logo: string
}

export const brands = [
    {
        name: 'Bike Choice',
        logo: AssetBikeChoice.src,
    },
    {
        name: 'Isun',
        logo: AssetIsun.src,
    },
    {
        name: 'Healing Loft',
        logo: AssetHealingLoft.src,
    },
    {
        name: 'Higer',
        logo: AssetHiger.src,
    },
    {
        name: 'Car Choice',
        logo: AssetCarChoice.src,
    },
    {
        name: 'Suma',
        logo: AssetSuma.src,
    },
    {
        name: 'Winphuket',
        logo: AssetWinphuket.src,
    },
    {
        name: 'Motor Checkup',
        logo: AssetMotorCheckup.src,
    },
]
