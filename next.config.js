/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['pb.techchase.de', 'localhost'],
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: ['@svgr/webpack'],
		});

		return config;
	},
	// i18n: {
	// 	locales: ['en', 'de'],
	// 	defaultLocale: 'de',
	// 	localeDetection: false,
	// },
};

module.exports = nextConfig;
