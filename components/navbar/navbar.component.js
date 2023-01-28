'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { BiUser } from 'react-icons/bi';
import { SunIcon } from '../../images/SunIcon';
import { MoonIcon } from '../../images/MoonIcon';
import { useDarkMode } from '../hooks/DarkModeContext';
import Link from 'next/link';
import { BiMusic, BiFace, BiBriefcaseAlt2, BiEuro, BiChat, BiHome } from 'react-icons/bi';
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
	IconWrapper,
	LinkWrapper,
	MobileNav,
} from './navbar.styles';
import { Switch } from '@nextui-org/react';

const Navbar = () => {
	const [isDarkMode, setIsDarkMode] = useDarkMode();
	const [isMobile, setIsMobile] = useState(true);
	const [active, setActive] = useState(false);

	const handleClick = () => setActive(!active);
	const router = useRouter();
	// const getLocale = () => {
	// 	console.log(router);
	// };
	const changeLocale = (locale) => {
		// router.push(
		// 	{
		// 		route: router.pathname,
		// 		query: router.query,
		// 	},
		// 	router.asPath,
		// 	{ locale }
		// );
		console.log('%c Language: ', 'color: yellow;', router.locale);
	};

	const setDarkMode = (prevTheme) => {
		if (typeof window === 'undefined') {
			return;
		}
		if (prevTheme === typeof Boolean) {
			localStorage.setItem('theme', prevTheme);
			setIsDarkMode(prevTheme);
		} else {
			localStorage.setItem('theme', !isDarkMode);
			setIsDarkMode(!isDarkMode);
		}
	};
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
		offscreen: { x: 80, opacity: 0 },
		onscreen: {
			x: 0,
			opacity: 1,
			transition: { type: 'spring', bounce: 0.4, duration: 0.6 },
		},
	};
	return (
		<div>
			{isMobile ? (
				<Nav className={scroll ? 'sticky' : ''}>
					<NavbarContainer>
						<LogoContainer>
							<NavIconWrapper className={isMobile && scroll ? 'sticky' : ''}>
								<Link href="/">
									<NavIcon className={scroll ? 'sticky' : ''} />
								</Link>
							</NavIconWrapper>
						</LogoContainer>
						<MobileIcon onClick={handleClick}>
							<BurgerIcon className={active ? 'open' : ''}>
								<span className={active ? 'active-one' : 'bar-one'} />
								<span className={active ? 'active-two' : 'bar-two'} />
								<span className={active ? 'active-three' : 'bar-three'} />
							</BurgerIcon>
						</MobileIcon>
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
							<NavItem onClick={() => changeLocale()}>
								<Link href="/price" locale="en">
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
								<Switch
									css={{ color: '#006d77' }}
									onChange={(e) => setDarkMode(e)}
									checked={isDarkMode}
									iconOn={<SunIcon filled />}
									iconOff={<MoonIcon filled />}
								/>
							</NavDarkMode>
						</NavMenu>
					</NavbarContainer>
				</Nav>
			) : (
				<div>
					<Nav className={scroll ? '' : 'is-hidden'}>
						<NavbarContainer>
							<LogoContainer>
								<NavIconWrapper className={isMobile && scroll ? 'sticky' : ''}>
									<Link href="/">
										<NavIcon className={scroll ? 'sticky' : ''} />
									</Link>
								</NavIconWrapper>
							</LogoContainer>
							<MobileIcon onClick={handleClick}>
								<BurgerIcon className={active ? 'open' : ''}>
									<span className={active ? 'active-one' : 'bar-one'} />
									<span className={active ? 'active-two' : 'bar-two'} />
									<span className={active ? 'active-three' : 'bar-three'} />
								</BurgerIcon>
							</MobileIcon>
						</NavbarContainer>
					</Nav>
					<MobileNav active={active}>
						<NavMenuMotion
							onClick={handleClick}
							$active={active}
							initial="offscreen"
							animate={active ? 'onscreen' : 'hidden'}
							transition={{ staggerChildren: 0.1, delayChildren: 0.1 }}
						>
							<NavItemMotion variants={navAnimation}>
								<Link href="/">
									<NavLink className={scroll ? 'sticky' : ''}>
										<LinkWrapper>
											<IconWrapper>
												<BiHome />
											</IconWrapper>
											<div style={{ marginRight: '4em' }}>HOME</div>
										</LinkWrapper>
									</NavLink>
								</Link>
							</NavItemMotion>
							<NavItemMotion variants={navAnimation}>
								<Link href="/music">
									<NavLink className={scroll ? 'sticky' : ''}>
										<LinkWrapper>
											<IconWrapper>
												<BiMusic />
											</IconWrapper>
											<div style={{ marginRight: '4em' }}>MUSIC</div>
										</LinkWrapper>
									</NavLink>
								</Link>
							</NavItemMotion>
							<NavItemMotion variants={navAnimation}>
								<Link href="/about">
									<NavLink className={scroll ? 'sticky' : ''}>
										<LinkWrapper>
											<IconWrapper>
												<BiFace />
											</IconWrapper>
											<div style={{ marginRight: '4em' }}>ÜBER MICH</div>
										</LinkWrapper>
									</NavLink>
								</Link>
							</NavItemMotion>
							<NavItemMotion variants={navAnimation}>
								<Link href="/equipment">
									<NavLink className={scroll ? 'sticky' : ''}>
										<LinkWrapper>
											<IconWrapper>
												<BiBriefcaseAlt2 />
											</IconWrapper>
											<div style={{ marginRight: '4em' }}>EQUIPMENT</div>
										</LinkWrapper>
									</NavLink>
								</Link>
							</NavItemMotion>
							<NavItemMotion variants={navAnimation}>
								<Link href="/price">
									<NavLink className={scroll ? 'sticky' : ''}>
										<LinkWrapper>
											<IconWrapper>
												<BiEuro />
											</IconWrapper>
											<div style={{ marginRight: '4em' }}>PREISE</div>
										</LinkWrapper>
									</NavLink>
								</Link>
							</NavItemMotion>
							<NavItemMotion variants={navAnimation}>
								<Link href="/booking">
									<NavLink className={scroll ? 'sticky' : ''}>
										<LinkWrapper>
											<IconWrapper>
												<BiChat />
											</IconWrapper>
											<div style={{ marginRight: '4em' }}>ANFRAGE</div>
										</LinkWrapper>
									</NavLink>
								</Link>
							</NavItemMotion>
							<NavItemMotion variants={navAnimation}>
								<DarkModeMobile onClick={(e) => setDarkMode(e)}>
									Theme
									<NavDarkMode>
										<div>
											{isDarkMode ? <SunIcon fill="#FFDDD2" /> : <MoonIcon fill="#006d77" />}
										</div>
									</NavDarkMode>
								</DarkModeMobile>
							</NavItemMotion>
						</NavMenuMotion>
					</MobileNav>
				</div>
			)}
		</div>
	);
};

export default Navbar;
