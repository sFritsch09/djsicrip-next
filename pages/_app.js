import { DarkModeProvider } from '../components/hooks/DarkModeContext';
import GlobalStyle from '../styles/globalStyles';
import { Navbar } from '../components';
import { MusicProvider } from '../components/hooks/MusicContext';
import { ScrollProvider } from '../components/hooks/ScrollContext';

function MyApp({ Component, pageProps }) {
	return (
		<DarkModeProvider>
			<GlobalStyle />
			<Navbar />
			<MusicProvider>
				<ScrollProvider>
					<Component {...pageProps} />
				</ScrollProvider>
			</MusicProvider>
		</DarkModeProvider>
	);
}

export default MyApp;
