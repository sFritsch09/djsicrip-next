'use client';
import { ThemeProvider } from 'next-themes';

export const DarkModeProvider = ({ children }) => {
	return (
		<ThemeProvider enableSystem attribute="class">
			{children}
		</ThemeProvider>
	);
};
