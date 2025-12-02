/** @type {import('next').NextConfig} */
const nextConfig = {
    // Image optimization
    images: {
        domains: ["localhost", "api.digital-pa.com.sg", "dev-api.digital-pa.com.sg"],
        formats: ['image/avif', 'image/webp'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        minimumCacheTTL: 60,
    },

    // Compiler optimizations
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production' ? {
            exclude: ['error', 'warn'],
        } : false,
    },

    // SWC minification (faster than Terser)
    swcMinify: true,

    // Experimental features for better performance
    experimental: {
        optimizePackageImports: [
            '@heroicons/react',
            '@radix-ui/react-accordion',
            '@radix-ui/react-checkbox',
            '@radix-ui/react-collapsible',
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-label',
            '@radix-ui/react-navigation-menu',
            '@radix-ui/react-popover',
            '@radix-ui/react-radio-group',
            '@radix-ui/react-select',
            '@radix-ui/react-slot',
            '@radix-ui/react-tabs',
            'lucide-react',
            'framer-motion',
        ],
    },

    // Production optimizations
    productionBrowserSourceMaps: false,
    
    // Compression
    compress: true,

    // Power by header removal
    poweredByHeader: false,
};

export default nextConfig;