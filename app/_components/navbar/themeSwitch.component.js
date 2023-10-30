'use client';
import { useTheme } from 'next-themes';
import { SunIcon } from './SunIcon';
import { MoonIcon } from './MoonIcon';
import { Switch } from '@nextui-org/react';
import { Fragment, useEffect, useState } from 'react';
import { IconWrapper, NavDarkMode } from './navbar.styles';

export default function ThemeSwitch({ mobile }) {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	const setDarkMode = (prevTheme) => {
		if (prevTheme === 'light') {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	};
	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<Fragment>
			{mounted ? (
				<Fragment>
					{mobile ? (
						<NavDarkMode onClick={() => setDarkMode(theme)}>
							<IconWrapper>
								{theme === 'dark' ? <SunIcon fill="#FFDDD2" /> : <MoonIcon fill="#E29578" />}
							</IconWrapper>
							<div className="icon">{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</div>
						</NavDarkMode>
					) : (
						<Switch
							onValueChange={() => setDarkMode(theme)}
							isSelected={theme === 'dark'}
							startContent={<SunIcon />}
							endContent={<MoonIcon filled />}
						/>
					)}
				</Fragment>
			) : (
				<div style={{ margin: '1.46em' }}></div>
			)}
		</Fragment>
	);
}
