/** @type {import('next').NextConfig} */

//to deploy it as a static files in IIS
const routes = [
    {
        path: '/allTrades'
    },
    {
        path: '/insights'
    },
    {
        path: '/notes'
    },
    {
        path: '/pending'
    },
    {
        path: '/settings'
    }
];

const nextConfig = {
    trailingSlash: true,
    reactStrictMode: false,
    distDir: (process.env.NODE_ENV === "development" ? "devBuild" : 'build'),
    output: 'export',
    images: { unoptimized: true },
}

module.exports = nextConfig
