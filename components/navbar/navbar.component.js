import React, { useState, useEffect } from 'react';
import { BiUser } from 'react-icons/bi';
import DarkModeToggle from 'react-dark-mode-toggle';
import { useDarkMode, useDarkModeUpdate } from '../hooks/DarkModeContext';
import Logo from '../../images/Logo-sicrip.svg';
import Link from 'next/link';
import {
	LogoContainer,
	Nav,
	NavIcon,
	NavIconWrapper,
	NavItem,
	NavLink,
	NavMenu,
	NavTools,
	NavbarContainer,
	NavDarkMode,
	NavWrapper,
} from './navbar.styles';

const Navbar = () => {
	const isDarkMode = useDarkMode();
	const setIsDarkMode = useDarkModeUpdate();
	useEffect(() => {
		const state = JSON.parse(localStorage.getItem('theme'));
		if (state) {
			setIsDarkMode(state);
		}
	}, []);
	useEffect(() => {
		localStorage.setItem('theme', isDarkMode);
	}, [isDarkMode]);
	// is Mobile
	const [windowDimension, setWindowDimension] = useState(null);

	useEffect(() => {
		setWindowDimension(window.innerWidth);
	}, []);

	useEffect(() => {
		function handleResize() {
			setWindowDimension(window.innerWidth);
		}

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const isMobile = windowDimension <= 900;
	// is scrolling
	const [scroll, setScroll] = useState(0);

	useEffect(() => {
		document.addEventListener('scroll', () => {
			const scrollCheck = window.scrollY > 0 && window.scrollY < 9000;
			if (scrollCheck !== scroll) {
				setScroll(scrollCheck);
			}
		});
	});
	return (
		<NavWrapper>
			<Nav className={scroll ? 'sticky' : ''}>
				<NavbarContainer>
					<LogoContainer>
						<Link href="/">
							<NavIconWrapper href="/" className={scroll ? 'sticky' : ''}>
								<NavIcon className={scroll ? 'sticky' : ''} />
							</NavIconWrapper>
						</Link>
					</LogoContainer>
					<NavMenu>
						<NavItem>
							<Link href="/">
								<NavLink className={scroll ? 'sticky' : ''}>HOME</NavLink>
							</Link>
						</NavItem>
						<NavItem>
							<Link href="/music">
								<NavLink className={scroll ? 'sticky' : ''}>MUSIC</NavLink>
							</Link>
						</NavItem>
						<NavItem>
							<Link href="/about">
								<NavLink className={scroll ? 'sticky' : ''}>ÜBER MICH</NavLink>
							</Link>
						</NavItem>
						<NavItem>
							<Link href="/equipment">
								<NavLink className={scroll ? 'sticky' : ''}>EQUIPMENT</NavLink>
							</Link>
						</NavItem>
						<NavItem>
							<Link href="/price">
								<NavLink className={scroll ? 'sticky' : ''}>PREISE</NavLink>
							</Link>
						</NavItem>
						<NavItem>
							<Link href="/booking">
								<NavLink className={scroll ? 'sticky' : ''}>ANFRAGE</NavLink>
							</Link>
						</NavItem>
						<Link href="/login">
							<NavTools className={scroll ? 'sticky' : ''}>
								<BiUser />
							</NavTools>
						</Link>
					</NavMenu>
					<NavDarkMode>
						<DarkModeToggle onChange={setIsDarkMode} checked={isDarkMode} size={40} />
					</NavDarkMode>
				</NavbarContainer>
			</Nav>
		</NavWrapper>
	);
};

export default Navbar;
