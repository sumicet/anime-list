/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['cdn.myanimelist.net'],
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/1',
                permanent: true,
            },
        ];
    },
};

module.exports = nextConfig;
