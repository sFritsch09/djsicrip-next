import { DarkModeProvider } from '../components/hooks/DarkModeContext';
import GlobalStyle from '../styles/globalStyles';
import { Navbar } from '../components';

function MyApp({ Component, pageProps }) {
	return (
		<DarkModeProvider>
			<GlobalStyle />
			<Navbar />
			<Component {...pageProps} />
		</DarkModeProvider>
	);
}

export default MyApp;
