const metadataBase = new URL('https://digital-pa.com.sg')
const defaultImage = '/asset-logo.webp'
export type MetadataKeys = keyof typeof seoMetadata

export const seoMetadata = {
    // home: {
    //     metadataBase,
    //     title: 'Digital PA | Your Digital Partner in Digital Products',
    //     description: 'Your digital partner in digital products',
    //     keywords: [
    //         'Digital Marketing',
    //         'Marketing Automation',
    //         'Social Media Marketing',
    //         'SEO',
    //     ],
    //     openGraph: {
    //         title: 'Digital PA | Your Digital Partner in Digital Products',
    //         description: 'Your digital partner in digital products',
    //         images: '/asset-logo.webp',
    //     },
    // },
    home: {
        metadataBase,
        title: 'Homepage | Digital PA Singapore',
        description:
            'Discover how Digital PA helps businesses grow with expert digital marketing solutions tailored for success.',
        keywords: [
            'Digital PA',
            'Digital Marketing Singapore',
            'Marketing Solutions',
            'SEO',
            'Social Media Marketing',
            'Marketing Automation',
        ],
        openGraph: {
            title: 'Homepage | Digital PA Singapore',
            description:
                'Discover how Digital PA helps businesses grow with expert digital marketing solutions tailored for success.',
            url: `${metadataBase}`,
            images: defaultImage,
        },
    },

    about: {
        metadataBase,
        title: 'About Us | Digital PA Singapore',
        description:
            'Learn about Digital PA, our mission, and how we help businesses grow with tailored digital marketing solutions.',
        keywords: [
            'About Digital PA',
            'Our Team',
            'Digital Marketing Partner',
            'Company Overview',
        ],
        openGraph: {
            title: 'About Us | Digital PA Singapore',
            description:
                'Learn about Digital PA, our mission, and how we help businesses grow with tailored digital marketing solutions.',
            url: `${metadataBase}/about`,
            images: defaultImage,
        },
    },

    contact: {
        metadataBase,
        title: 'Contact Us | Digital PA Singapore',
        description:
            'Reach out to Digital PA for expert advice on digital marketing, automation, SEO, and more.',
        keywords: [
            'Contact Digital PA',
            'Get in Touch',
            'Digital Marketing Consultation',
            'Marketing Support',
        ],
        openGraph: {
            title: 'Contact Us | Digital PA Singapore',
            description:
                'Reach out to Digital PA for expert advice on digital marketing, automation, SEO, and more.',
            url: `${metadataBase}/contact-us`,
            images: defaultImage,
        },
    },

    insights: {
        metadataBase,
        title: 'Insights | Digital PA Singapore',
        description:
            'Stay updated with the latest digital marketing trends, guides, and case studies curated by our team.',
        keywords: [
            'Marketing Insights',
            'Digital Trends',
            'Growth Strategies',
            'Case Studies',
        ],
        openGraph: {
            title: 'Insights | Digital PA Singapore',
            description:
                'Stay updated with the latest digital marketing trends, guides, and case studies curated by our team.',
            url: `${metadataBase}/insights`,
            images: defaultImage,
        },
    },

    sem: {
        metadataBase,
        title: 'Search Engine Marketing (SEM) Services | Digital PA Singapore',
        description:
            'Maximize your online visibility with paid ads and expert SEM strategies tailored to your goals.',
        keywords: [
            'Search Engine Marketing',
            'SEM Services',
            'Google Ads',
            'Paid Search',
        ],
        openGraph: {
            title: 'Search Engine Marketing (SEM) Services | Digital PA Singapore',
            description:
                'Maximize your online visibility with paid ads and expert SEM strategies tailored to your goals.',
            url: `${metadataBase}/our-services/ads-campaign/search-engine-marketing`,
            images: defaultImage,
        },
    },

    seo: {
        metadataBase,
        title: 'SEO Services | Digital PA Singapore',
        description:
            'Grow your organic traffic and improve search rankings with our proven SEO strategies.',
        keywords: [
            'Search Engine Optimization',
            'SEO Services',
            'On-Page SEO',
            'Technical SEO',
        ],
        openGraph: {
            title: 'SEO Services | Digital PA Singapore',
            description:
                'Grow your organic traffic and improve search rankings with our proven SEO strategies.',
            url: `${metadataBase}/our-services/ads-campaign/search-engine-optimization`,
            images: defaultImage,
        },
    },

    seoCopywriting: {
        metadataBase,
        title: 'SEO Copywriting Services | Digital PA Singapore',
        description:
            'We create optimized content that engages your audience and ranks high on search engines.',
        keywords: [
            'SEO Copywriting',
            'Content Writing',
            'Search Optimized Content',
            'SEO Blog',
        ],
        openGraph: {
            title: 'SEO Copywriting Services | Digital PA Singapore',
            description:
                'We create optimized content that engages your audience and ranks high on search engines.',
            url: `${metadataBase}/our-services/ads-campaign/seo-copywriting`,
            images: defaultImage,
        },
    },

    blog: {
        metadataBase,
        title: 'Blog Articles | Digital PA Singapore',
        description:
            'Explore our blog to find expert tips, industry trends, and digital growth strategies.',
        keywords: [
            'Digital Marketing Blog',
            'Marketing Tips',
            'SEO Blog',
            'Growth Hacking',
        ],
        openGraph: {
            title: 'Blog Articles | Digital PA Singapore',
            description:
                'Explore our blog to find expert tips, industry trends, and digital growth strategies.',
            url: `${metadataBase}/content-marketing/blog-article`,
            images: defaultImage,
        },
    },

    contentMarketing: {
        metadataBase,
        title: 'Content Marketing Services | Digital PA Singapore',
        description:
            'Drive traffic and engagement with strategic content marketing tailored to your business goals.',
        keywords: [
            'Content Marketing',
            'Content Strategy',
            'Inbound Marketing',
            'Content Creation',
        ],
        openGraph: {
            title: 'Content Marketing Services | Digital PA Singapore',
            description:
                'Drive traffic and engagement with strategic content marketing tailored to your business goals.',
            url: `${metadataBase}/content-marketing/content-marketing`,
            images: defaultImage,
        },
    },

    copywriting: {
        metadataBase,
        title: 'Copywriting Services | Digital PA Singapore',
        description:
            'Engage your audience and drive action with persuasive, brand-focused copywriting services.',
        keywords: [
            'Copywriting Services',
            'Marketing Copy',
            'Sales Copy',
            'Website Copy',
        ],
        openGraph: {
            title: 'Copywriting Services | Digital PA Singapore',
            description:
                'Engage your audience and drive action with persuasive, brand-focused copywriting services.',
            url: `${metadataBase}/content-marketing/copywriting`,
            images: defaultImage,
        },
    },

    infographic: {
        metadataBase,
        title: 'Infographic Design & Content Services | Digital PA Singapore',
        description:
            'Turn complex data into engaging visual stories with our infographic content services.',
        keywords: [
            'Infographic Content',
            'Data Visualization',
            'Graphic Design',
            'Content Marketing',
        ],
        openGraph: {
            title: 'Infographic Design & Content Services | Digital PA Singapore',
            description:
                'Turn complex data into engaging visual stories with our infographic content services.',
            url: `${metadataBase}/content-marketing/infographic-content`,
            images: defaultImage,
        },
    },

    skyscraper: {
        metadataBase,
        title: 'Skyscraper Content Services | Digital PA Singapore',
        description:
            'Dominate your niche with comprehensive, high-quality skyscraper content that ranks.',
        keywords: [
            'Skyscraper Content',
            'SEO Content',
            'Long-Form Articles',
            'Authority Building',
        ],
        openGraph: {
            title: 'Skyscraper Content Services | Digital PA Singapore',
            description:
                'Dominate your niche with comprehensive, high-quality skyscraper content that ranks.',
            url: `${metadataBase}/content-marketing/skyscraper-content`,
            images: defaultImage,
        },
    },

    socialContent: {
        metadataBase,
        title: 'Social Media Content Services | Digital PA Singapore',
        description:
            'We create thumb-stopping, brand-focused content for all your social platforms.',
        keywords: [
            'Social Media Content',
            'Social Graphics',
            'Instagram Posts',
            'Facebook Content',
        ],
        openGraph: {
            title: 'Social Media Content Services | Digital PA Singapore',
            description:
                'We create thumb-stopping, brand-focused content for all your social platforms.',
            url: `${metadataBase}/content-marketing/social-media-content`,
            images: defaultImage,
        },
    },

    paidSocialAds: {
        metadataBase,
        title: 'Paid Social Ads Management | Digital PA Singapore',
        description:
            'Maximize your ROI with strategic paid campaigns on Facebook, Instagram, LinkedIn, and more.',
        keywords: [
            'Paid Social Ads',
            'Facebook Ads',
            'Instagram Ads',
            'Social PPC',
        ],
        openGraph: {
            title: 'Paid Social Ads Management | Digital PA Singapore',
            description:
                'Maximize your ROI with strategic paid campaigns on Facebook, Instagram, LinkedIn, and more.',
            url: `${metadataBase}/social-media-marketing/paid-social-ads`,
            images: defaultImage,
        },
    },

    socialManagement: {
        metadataBase,
        title: 'Social Media Management Services | Digital PA Singapore',
        description:
            'We handle your strategy, content, and community management across all major platforms.',
        keywords: [
            'Social Media Management',
            'Community Management',
            'Social Strategy',
            'Social Branding',
        ],
        openGraph: {
            title: 'Social Media Management Services | Digital PA Singapore',
            description:
                'We handle your strategy, content, and community management across all major platforms.',
            url: `${metadataBase}/social-media-marketing/social-media-management`,
            images: defaultImage,
        },
    },

    webDesign: {
        metadataBase,
        title: 'Website Design & Development Services | Digital PA Singapore',
        description:
            'Create stunning, responsive websites that align with your business goals and drive results.',
        keywords: [
            'Website Design',
            'Web Development',
            'Responsive Website',
            'Business Website',
        ],
        openGraph: {
            title: 'Website Design & Development Services | Digital PA Singapore',
            description:
                'Create stunning, responsive websites that align with your business goals and drive results.',
            images: defaultImage,
        },
    },

    webMaintenance: {
        metadataBase,
        title: 'Website Maintenance Services | Digital PA Singapore',
        description:
            'Ensure your site remains fast, secure, and up-to-date with our reliable maintenance services.',
        keywords: [
            'Website Maintenance',
            'Web Updates',
            'Site Security',
            'Backup & Support',
        ],
        openGraph: {
            title: 'Website Maintenance Services | Digital PA Singapore',
            description:
                'Ensure your site remains fast, secure, and up-to-date with our reliable maintenance services.',
            url: `${metadataBase}/website-development/website-maintenance`,
            images: defaultImage,
        },
    },

    aiAutomation: {
        metadataBase,
        title: 'AI Automation Solutions | Your Digital Partner in Digital Products',
        description:
            'Discover how Digital PA’s AI automation services help businesses in Singapore streamline operations, reduce costs, and enhance efficiency through intelligent automation and digital transformation.',
        keywords: [
            'AI Automation',
            'Automation Services',
            'Digital Transformation',
            'Automation Tools',
        ],
        openGraph: {
            title: 'AI Automation Solutions | Your Digital Partner in Digital Products',
            description:
                'Discover how Digital PA’s AI automation services help businesses in Singapore streamline operations, reduce costs, and enhance efficiency through intelligent automation and digital transformation.',
            url: `${metadataBase}/ai-solutions/ai-automation`,
            images: defaultImage,
        },
    },

    success: {
        metadataBase,
        title: 'Thank You | Digital PA Singapore',
        description:
            'We’ve successfully received your inquiry. Our team will get back to you shortly to assist with your automation needs.',
        keywords: [
            'Lead Submitted',
            'Thank You Page',
            'AI Automation Contact',
            'Digital PA Success Page',
        ],
        openGraph: {
            title: 'Thank You | Digital PA Singapore',
            description:
                'We’ve successfully received your inquiry. Our team will get back to you shortly.',
            url: `${metadataBase}/success`,
            images: defaultImage,
        },
    },

    tuition: {
        metadataBase,
        title: 'DPA Tuition Centre | Digital PA Singapore',
        description: 
            'Learn about DPA Tuition Centre’s academic coaching, teaching philosophy, and the services we offer to help students thrive in their studies and mindset development.',
        keywords: [
        'Academic Coaching',
        'DPA Tuition Centre Services',
        'Tuition Singapore',
        'Mindset Development',
        'Game-based Learning',
        'Mock Exams',
        ],
        openGraph: {
        title: 'DPA Tuition Centre | Digital PA Singapore',
        description: 
            'Explore the comprehensive academic coaching services offered by DPA Tuition Centre, focused on academic success and personal development.',
        url: `${metadataBase}/tuition-center-knowledge-base`,
        images: defaultImage,
        },
    },
}
