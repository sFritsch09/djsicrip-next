import { DarkModeProvider } from '../components/hooks/DarkModeContext';
import GlobalStyle from '../styles/globalStyles';
import { Navbar } from '../components';
import { Footer } from '../components';
import { MusicProvider } from '../components/hooks/MusicContext';
import { ScrollProvider } from '../components/hooks/ScrollContext';

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
							<Footer />
						</ScrollProvider>
					</MusicProvider>
				</DarkModeProvider>
			</div>
		</div>
	);
}

export default MyApp;
