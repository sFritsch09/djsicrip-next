import { useContext, useState, createContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme, invertTheme } from '../../styles/globalStyles';

const DarkModeContext = createContext();
const DarkModeUpdateContext = createContext();

export const useDarkMode = () => {
	return useContext(DarkModeContext);
};

export const useDarkModeUpdate = () => {
	return useContext(DarkModeUpdateContext);
};

export const DarkModeProvider = ({ children }) => {
	const [isDarkMode, setIsDarkMode] = useState(false);

	const toggleDarkMode = () => {
		setIsDarkMode((prevTheme) => !prevTheme);
	};

	return (
		<DarkModeContext.Provider value={isDarkMode}>
			<DarkModeUpdateContext.Provider value={toggleDarkMode}>
				<ThemeProvider theme={isDarkMode ? theme : invertTheme}>{children}</ThemeProvider>
			</DarkModeUpdateContext.Provider>
		</DarkModeContext.Provider>
	);
};
