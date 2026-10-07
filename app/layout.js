import { DarkModeProvider } from './_components/hooks/DarkModeProvider';
import { MusicProvider } from './_components/hooks/MusicContext';
import StyledComponentsRegistry from './lib/registry';
import GlobalStyle from '../styles/globalStyles';
import { Navbar } from './_components';
import { Footer } from './_components';
import { ScrollProvider } from './_components/hooks/ScrollContext';
import '@/styles/globals.css';
import { ProviderUI } from './lib/nextui';

export const viewport = {
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: '#FFDDD2' },
		{ media: '(prefers-color-scheme: dark)', color: '#006d77' },
	],
};
export const metadata = {
	title: 'DJ Si Crip',
	description: 'Best DJ in Mainz!',
	metadataBase: new URL('https://mainzdj.de'),
	icons: {
		icon: '/logo512.png',
	},
	keywords: ['Mainz DJ', 'Hochzeit', 'Firmenfeier', 'Equipment', 'Musikanlage', 'Lichter'],
	openGraph: {
		type: 'website',
		locale: 'de_DE',
		url: 'https://mainzdj.de',
		title: 'Best DJ Mainz',
		description: 'Best DJ in Mainz!',
		siteName: 'MainzDJ.de',
		images: [
			{
				url: 'https://s3.techchase.de/djsicrip/light_fritsch09.webp',
				width: 800,
				height: 600,
			},
		],
	},
	robots: {
		index: true,
	},
};
export default function RootLayout({ children }) {
	return (
		<html suppressHydrationWarning>
			<head />
			<body>
				<StyledComponentsRegistry>
					<DarkModeProvider>
						<GlobalStyle />
						<MusicProvider>
							<ScrollProvider>
								<ProviderUI>
									<Navbar />
									{children}
									<Footer />
								</ProviderUI>
							</ScrollProvider>
						</MusicProvider>
					</DarkModeProvider>
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}
