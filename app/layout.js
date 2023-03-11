import { DarkModeProvider } from '../components/hooks/DarkModeContext';
import { MusicProvider } from '../components/hooks/MusicContext';
import StyledComponentsRegistry from './lib/registry';
import GlobalStyle from '../styles/globalStyles';
import { Navbar } from '../components';
import { Footer } from '../components';
import { ScrollProvider } from '../components/hooks/ScrollContext';

export const metadata = {
	title: 'DJ Si Crip',
	description: 'Best DJ in Mainz!',
	themeColor: '#006d77',
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
				url: 'https://pb.djsicrip.com/api/files/images/9xhfn7yuzvhbvrq/light_fritsch09_ccT8SM8nZv.webp',
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
		<html>
			<head />
			<body>
				<DarkModeProvider>
					<MusicProvider>
						<ScrollProvider>
							<StyledComponentsRegistry>
								<GlobalStyle />
								<Navbar />
								{children}
								<Footer />
							</StyledComponentsRegistry>
						</ScrollProvider>
					</MusicProvider>
				</DarkModeProvider>
			</body>
		</html>
	);
}
