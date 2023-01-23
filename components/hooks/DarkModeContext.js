'use client';
import { useContext, useState, createContext, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme, invertTheme } from '../../styles/globalStyles';

const DarkModeContext = createContext();

export const useDarkMode = () => {
	return useContext(DarkModeContext);
};

export const DarkModeProvider = ({ children }) => {
	const [isDarkMode, setIsDarkMode] = useState(false);

	useEffect(() => {
		if (typeof window === 'undefined') {
			return;
		}

		const state = JSON.parse(localStorage.getItem('theme')) || isDarkMode;
		setIsDarkMode(state);
	}, [isDarkMode]);

	return (
		<DarkModeContext.Provider value={[isDarkMode, setIsDarkMode]}>
			<ThemeProvider theme={isDarkMode ? theme : invertTheme}>{children}</ThemeProvider>
		</DarkModeContext.Provider>
	);
};
