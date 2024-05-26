/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.chec.io'
            },
            {
                protocol: 'https',
                hostname: 'nextui.org'
            }
        ]
    }
};

export default nextConfig;
