/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        domains: ['source.unsplash.com', 'quotes.rest', 'quote.rest'],
    },    

}

module.exports = nextConfig
