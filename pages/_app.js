import { DarkModeProvider } from '../components/hooks/DarkModeContext';
import GlobalStyle from '../styles/globalStyles';
import { Navbar } from '../components';
import { Footer } from '../components';
import { MusicProvider } from '../components/hooks/MusicContext';
import { ScrollProvider } from '../components/hooks/ScrollContext';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';

function MyApp({ Component, pageProps }) {
	return (
		<div className="page-container">
			<div className="content-wrap">
				<DarkModeProvider>
					<GlobalStyle />
					<Navbar />
					<MusicProvider>
						<ScrollProvider>
							<Component {...pageProps} />
							<DefaultSeo {...SEO} />
							<Footer />
						</ScrollProvider>
					</MusicProvider>
				</DarkModeProvider>
			</div>
		</div>
	);
}

export default MyApp;
