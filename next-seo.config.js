const DEFAULT_SEO = {
	description: 'Mainz DJ für Hochzeit, Firmenfeier. Professionell mit Equipment und Musikanlage',
	openGraph: {
		type: 'website',
		locale: 'de_DE',
		url: 'https://mainzdj.de',
		title: 'Best DJ Mainz',
		description: 'Best DJ in Mainz!',
		image:
			'https://pb.djsicrip.com/api/files/images/9xhfn7yuzvhbvrq/light_fritsch09_ccT8SM8nZv.webp',
		site_name: 'MainzDJ.de',
		imageWidth: 800,
		imageHeight: 600,
	},
	additionalLinkTags: [
		{
			rel: 'icon',
			href: 'https://djsicrip.com/favicon.ico',
		},
		{
			rel: 'manifest',
			href: '/manifest.json',
		},
	],
};

export default DEFAULT_SEO;
