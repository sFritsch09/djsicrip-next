'use client';
import { useState, useEffect } from 'react';
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
	NavbarContainer,
	NavDarkMode,
	MobileIcon,
	BurgerIcon,
	NavMenuMotion,
	NavItemMotion,
	IconWrapper,
	LinkWrapper,
	MobileNav,
} from './navbar.styles';
import ThemeSwitch from './themeSwitch.component';

const Navbar = () => {
	const [isMobile, setIsMobile] = useState(true);
	const [active, setActive] = useState(false);

	const handleClick = () => setActive(!active);

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
							<NavDarkMode>
								<ThemeSwitch />
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
					<MobileNav $active={active}>
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
								<ThemeSwitch mobile />
							</NavItemMotion>
						</NavMenuMotion>
					</MobileNav>
				</div>
			)}
		</div>
	);
};

export default Navbar;
