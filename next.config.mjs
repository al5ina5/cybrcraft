/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/discord',
                destination: 'https://discord.gg/KsJ7BzcnVS', // Replace with your actual Discord invite link
                permanent: true, // Use 'true' for a 308 permanent redirect or false for a 307 temporary redirect
            },
        ];
    },
};

export default nextConfig;
