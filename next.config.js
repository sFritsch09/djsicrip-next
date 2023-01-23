/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['pb.djsicrip.com', 'localhost'],
	},
	basePath: '',
	experimental: {
		appDir: true,
	},
	reactStrictMode: true,
	swcMinify: true,
	compiler: {
		// ssr and displayName are configured by default
		styledComponents: true,
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: ['@svgr/webpack'],
		});

		return config;
	},
	i18n: {
		locales: ['en', 'de'],
		defaultLocale: 'de',
		localeDetection: false,
	},
};

module.exports = nextConfig;
