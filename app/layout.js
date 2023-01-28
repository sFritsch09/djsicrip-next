import { DarkModeProvider } from '../components/hooks/DarkModeContext';
import { MusicProvider } from '../components/hooks/MusicContext';
import StyledComponentsRegistry from './lib/registry';
import GlobalStyle from '../styles/globalStyles';
import { Navbar } from '../components';
import { Footer } from '../components';
import { NextSeo } from 'next-seo';
import SEO from '../next-seo.config';
import { ScrollProvider } from '../components/hooks/ScrollContext';

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
								<NextSeo useAppDir={true} {...SEO} />
								<Footer />
							</StyledComponentsRegistry>
						</ScrollProvider>
					</MusicProvider>
				</DarkModeProvider>
			</body>
		</html>
	);
}
