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
	BurgerIcon,
	DarkModeMobile,
	NavMenuMotion,
	NavItemMotion,
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
			const scrollCheck = window.scrollY > 0;
			if (scrollCheck !== scroll) {
				setScroll(scrollCheck);
			}
		});
	});
	// animation
	const navAnimation = {
		offscreen: { x: -80, opacity: 0 },
		onscreen: {
			x: 0,
			opacity: 1,
			transition: { type: 'spring', bounce: 0.4, duration: 0.6 },
		},
	};
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
				{isMobile ? (
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
						<NavDarkMode>
							<DarkModeToggle onChange={setIsDarkMode} checked={isDarkMode} size={40} />
						</NavDarkMode>
					</NavMenu>
				) : (
					<NavMenuMotion
						onClick={handleClick}
						click={click}
						initial="offscreen"
						animate={click ? 'onscreen' : ''}
						transition={{ staggerChildren: 0.1, delayChildren: 0.1 }}
					>
						<NavItemMotion variants={navAnimation}>
							<Link href="/">
								<NavLink className={scroll ? 'sticky' : ''}>HOME</NavLink>
							</Link>
						</NavItemMotion>
						<NavItemMotion variants={navAnimation}>
							<Link href="/music">
								<NavLink className={scroll ? 'sticky' : ''}>MUSIC</NavLink>
							</Link>
						</NavItemMotion>
						<NavItemMotion variants={navAnimation}>
							<Link href="/about">
								<NavLink className={scroll ? 'sticky' : ''}>ÜBER MICH</NavLink>
							</Link>
						</NavItemMotion>
						<NavItemMotion variants={navAnimation}>
							<Link href="/equipment">
								<NavLink className={scroll ? 'sticky' : ''}>EQUIPMENT</NavLink>
							</Link>
						</NavItemMotion>
						<NavItemMotion variants={navAnimation}>
							<Link href="/price">
								<NavLink className={scroll ? 'sticky' : ''}>PREISE</NavLink>
							</Link>
						</NavItemMotion>
						<NavItemMotion variants={navAnimation}>
							<Link href="/booking">
								<NavLink className={scroll ? 'sticky' : ''}>ANFRAGE</NavLink>
							</Link>
						</NavItemMotion>
						<NavItemMotion variants={navAnimation}>
							<DarkModeMobile onClick={setIsDarkMode}>
								Theme
								<NavDarkMode onClick={setIsDarkMode}>
									<DarkModeToggle onChange={setIsDarkMode} checked={isDarkMode} size={40} />
								</NavDarkMode>
							</DarkModeMobile>
						</NavItemMotion>
					</NavMenuMotion>
				)}
			</NavbarContainer>
		</Nav>
	);
};

export default Navbar;
