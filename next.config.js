/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['hausboot.fra1.digitaloceanspaces.com', 'localhost'],
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
};

module.exports = nextConfig;
