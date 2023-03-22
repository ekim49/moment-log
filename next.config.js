/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'lh3.googleusercontent.com',
				port: '',
				pathname: '/a/**',
			},
			{
				protocol: 'http',
				hostname: 'k.kakaocdn.net',
				port: '',
				pathname: '/dn/**',
			},
		],
	},
};

module.exports = nextConfig;
