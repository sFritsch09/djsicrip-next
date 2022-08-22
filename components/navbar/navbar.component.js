import React, { useState, useEffect } from 'react';
import { BiUser } from 'react-icons/bi';
import DarkModeToggle from 'react-dark-mode-toggle';
import { useDarkMode, useDarkModeUpdate } from '../hooks/DarkModeContext';
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
	MobileIcon,
	CloseIcon,
	BurgerIcon,
	DarkModeMobile,
} from './navbar.styles';

const Navbar = () => {
	const isDarkMode = useDarkMode();
	const setIsDarkMode = useDarkModeUpdate();
	const [isMobile, setIsMobile] = useState(true);
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);
	useEffect(() => {
		const state = JSON.parse(localStorage.getItem('theme'));
		if (state) {
			setIsDarkMode(state);
		}
	}, []);
	useEffect(() => {
		localStorage.setItem('theme', isDarkMode);
	}, [isDarkMode]);

	const windowDimension = () => {
		if (window.innerWidth <= 980) {
			setIsMobile(false);
		} else {
			setIsMobile(true);
		}
	};
	// is Mobile
	useEffect(() => {
		windowDimension();
	}, []);

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
		<Nav className={scroll ? 'sticky' : ''}>
			<NavbarContainer>
				<LogoContainer>
					<Link href="/">
						<NavIconWrapper href="/" className={scroll ? 'sticky' : ''}>
							<NavIcon className={scroll ? 'sticky' : ''} />
						</NavIconWrapper>
					</Link>
				</LogoContainer>
				<MobileIcon onClick={handleClick}>
					<BurgerIcon className={click ? 'open' : ''}>
						<span className={click ? 'active-one' : 'bar-one'} />
						<span className={click ? 'active-two' : 'bar-two'} />
						<span className={click ? 'active-three' : 'bar-three'} />
					</BurgerIcon>
				</MobileIcon>
				<NavMenu onClick={handleClick} click={click}>
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
					{isMobile ? (
						<NavDarkMode>
							<DarkModeToggle onChange={setIsDarkMode} checked={isDarkMode} size={40} />
						</NavDarkMode>
					) : (
						<NavItem>
							<DarkModeMobile onClick={setIsDarkMode}>
								Theme
								<NavDarkMode onClick={setIsDarkMode}>
									<DarkModeToggle onChange={setIsDarkMode} checked={isDarkMode} size={40} />
								</NavDarkMode>
							</DarkModeMobile>
						</NavItem>
					)}
				</NavMenu>
			</NavbarContainer>
		</Nav>
	);
};

export default Navbar;
