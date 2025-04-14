export type Package = {
    name: string
    description: string
    cta: string
    link: string
    is_highlighted: boolean
}

export const packages: Package[] = [
    {
        name: 'Business Startup Package',
        description:
            "<span className='text-primary font-semibold'>Individuals and small</span> teams who are taking their first steps into the business world. This package offers all the essential tools and support to help you launch your business with confidence and set a strong foundation for growth.",
        cta: 'See Startup Package Details',
        link: '/our-packages/startup',
        is_highlighted: false,
    },
    {
        name: 'SME Company Package',
        description:
            "<span className='text-primary font-semibold'>Small to medium enterprises </span>looking to expand their operations and enhance their market presence. This package provides advanced tools and strategies to support your growth and increase your competitive edge.",
        cta: 'See SME Package Details',
        link: '/our-packages/sme',
        is_highlighted: true,
    },
    {
        name: 'SME+ Company Package',
        description:
            "<span className='text-primary font-semibold'>Mature small to big enterprises </span> aiming for significant growth and market leadership. This premium package offers extensive resources and expert guidance to drive your business to new heights.",
        cta: 'See SME Package Details',
        link: '/our-packages/sme-plus',
        is_highlighted: false,
    },
]
