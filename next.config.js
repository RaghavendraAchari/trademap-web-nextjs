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
    // exportPathMap: async function () {
    //     //you can get route by fetch
    //     const paths = {
    //         '/': { page: '/' }
    //     };

    //     routes.forEach((pathObject) => {
    //         paths[`${pathObject.path}`] = { page: pathObject.path, };
    //     });
    //     return paths;
    // },
    // generateStaticParams: function () {
    //     const paths = {
    //         '/': { page: '/' }
    //     };

    //     routes.forEach((pathObject) => {
    //         paths[`${pathObject.path}`] = { page: pathObject.path, };
    //     });
    //     return paths;
    // }

}

module.exports = nextConfig
