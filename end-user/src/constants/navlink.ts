export type NavLink = {
    name: string
    path: string
    menus?: Menus[]
}
type Menus = {
    name: string
    submenu: Submenus[]
}
type Submenus = {
    name:string;
    path:string;
}
export const navlinks: NavLink[] = [
    {
        name: 'Home',
        path: '/',
    },
    {
        name: 'About Us',
        path: '/about-us',
    },
    {
        name: 'Our Services',
        path: '/our-services',
        menus: [
        {
            name: "AI Solutions",
            submenu: [
                {
                    name: "AI Automation",
                    path: "/our-services/ai-solutions/ai-automation" 
                },
            ]
        },
        {
            name: "Ads Campaign",
            submenu: [
                {
                    name: "Search Engine Optimization",
                    path: "/our-services/ads-campaign/search-engine-optimization" 
                },
                {
                    name: "Search Engine Marketing",
                    path: "/our-services/ads-campaign/search-engine-marketing" 
                },
                {
                    name: "SEO Copywriting",
                    path: "/our-services/ads-campaign/seo-copywriting" 
                },
            ]
        },
        {
            name: "Social Media Marketing",
            submenu: [
                {
                    name: "Social Media Management",
                    path: "/our-services/social-media-marketing/social-media-management" 
                },
                {
                    name: "Paid Social Ads",
                    path: "/our-services/social-media-marketing/paid-social-ads" 
                },
            ]
        },
        {
            name: "Content Marketing",
            submenu: [
                {
                    name: "Copywriting",
                    path: "/our-services/content-marketing/copywriting" 
                },
                {
                    name: "Content Marketing",
                    path: "/our-services/content-marketing/content-marketing" 
                },
                {
                    name: "Social Media Content",
                    path: "/our-services/content-marketing/social-media-content" 
                },
                {
                    name: "Blog Article",
                    path: "/our-services/content-marketing/blog-article" 
                },
                {
                    name: "Infographic Content",
                    path: "/our-services/content-marketing/infographic-content" 
                },
                {
                    name: "Skyscraper Content",
                    path: "/our-services/content-marketing/skyscraper-content" 
                },
            ]
        },
        {
            name: "Website Development",
            submenu: [
                {
                    name: "Website Design & Development",
                    path: "/our-services/website-development/website-design-development" 
                },
                {
                    name: "Website Maintenance",
                    path: "/our-services/website-development/website-maintenance" 
                },
            ]
        },
    ]
    },
    // {
    //     name: 'Insights',
    //     path: '/insights',
    // },
    // {
    //     name: 'Our Packages',
    //     path: '/our-packages',
    // },
    // {
    //     name: 'Contact Us',
    //     path: '/contact-us',
    // },
]
