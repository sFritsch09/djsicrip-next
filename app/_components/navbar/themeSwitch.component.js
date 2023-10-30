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
								{theme === 'dark' ? <SunIcon fill="#55b3f3" /> : <MoonIcon fill="#55b3f3" />}
							</IconWrapper>
							<div style={{ marginRight: '4em' }}>
								{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
							</div>
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
