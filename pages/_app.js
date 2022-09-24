import { DarkModeProvider } from '../components/hooks/DarkModeContext';
import GlobalStyle from '../styles/globalStyles';
import { Navbar } from '../components';
import { MusicProvider } from '../components/hooks/MusicContext';

function MyApp({ Component, pageProps }) {
	return (
		<DarkModeProvider>
			<GlobalStyle />
			<Navbar />
			<MusicProvider>
				<Component {...pageProps} />
			</MusicProvider>
		</DarkModeProvider>
	);
}

export default MyApp;
