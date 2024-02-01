/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    distDir: (process.env.NODE_ENV === "development" ? "devBuild" : 'build'),
    output: 'export',
    images: { unoptimized: true }
}

module.exports = nextConfig
