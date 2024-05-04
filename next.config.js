/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'pb.techchase.de',
			},
			{
				protocol: 'http',
				hostname: 'localhost',
			},
		],
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: ['@svgr/webpack'],
		});

		return config;
	},
	compiler: {
		styledComponents: true,
	},
	output: 'standalone',
	// i18n: {
	// 	locales: ['en', 'de'],
	// 	defaultLocale: 'de',
	// 	localeDetection: false,
	// },
};

module.exports = nextConfig;
