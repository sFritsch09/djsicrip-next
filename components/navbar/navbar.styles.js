import styled from 'styled-components';
import Logo from '../../images/Logo-sicrip.svg';
import { motion } from 'framer-motion';

export const Nav = styled.nav`
	height: 4em;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.2rem;
	position: fixed;
	top: 0;
	z-index: 20;
	transition: background 0.3s ease-out;

	&.sticky {
		background: ${(props) =>
			props.theme.mode === 'Dark' ? props.theme.darkColor : props.theme.lightColor};
	}
	@media screen and (max-width: 980px) {
		background: ${(props) =>
			props.theme.mode === 'Dark' ? props.theme.darkColor : props.theme.lightColor};
		bottom: 0 !important;
		left: 0 !important;
		top: initial;
		position: fixed;
		display: block;
		width: 100%;
		opacity: 1;
		&.is-hidden {
			opacity: 0;
			transition: transform 0.4s, opacity 0.2s;
		}
	}
`;

export const NavbarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	height: 4em;
	/* Container */
	max-width: 100%;
	margin-right: auto;
	margin-left: auto;
	padding-right: 2em;
	padding-left: 2em;
	@media screen and (max-width: 980px) {
		padding-left: 30px;
		padding-right: 30px;
	}
	@media screen and (max-width: 1100px) {
		padding: 0 2em;
		margin: 0;
	}
`;

export const MobileIcon = styled.div`
	display: none;
	color: ${(props) => props.theme.darkColor};

	@media screen and (max-width: 980px) {
		display: block;
		position: absolute;
		top: 0.5em;
		right: 0.5em;
		font-size: 1.8rem;
		cursor: pointer;
	}
`;

export const BurgerIcon = styled.div`
	color: ${(props) => props.theme.color};
	width: 35px;
	height: 30px;
	margin: 10px 10px;
	position: relative;
	cursor: pointer;
	display: inline-block;
	transform: ${(props) => (props.open ? 'rotate(45deg)' : null)};
	span {
		background-color: ${(props) => props.theme.color};
		position: absolute;
		border-radius: 2px;
		transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);
		width: 100%;
		height: 4px;
		transition-duration: 500ms;
	}
	.bar-one {
		top: 0px;
		left: 0px;

		&:hover {
			transform: rotate(-3deg) scaleY(1.1);
		}
	}
	.active-one {
		transform: rotate(45deg);
		top: 13px;
	}
	.bar-two {
		top: 13px;
		left: 0px;
		opacity: 1;
		&:hover {
			transform: rotate(3deg) scaleY(1.1);
		}
	}
	.active-two {
		opacity: 0;
	}
	.bar-three {
		bottom: 0px;
		left: 0px;
		&:hover {
			transform: rotate(-4deg) scaleY(1.1);
		}
	}
	.active-three {
		transform: rotate(-45deg);
		top: 13px;
	}
`;

export const LogoContainer = styled.div`
	justify-self: flex-start;
	cursor: pointer;
	text-decoration: none;
	display: flex;
	align-items: center;
	@media screen and (max-width: 1250px) {
		width: 20%;
	}
`;

export const NavIconWrapper = styled.a`
	text-decoration: none;
	justify-content: flex-start;
	width: 100%;
	height: 100%;
	position: relative;
	transition: transform ease 0.6s, margin-bottom ease-out 0.4s;

	&.sticky {
		transform: scale(0.5);
		margin-bottom: 2em;
	}

	@media screen and (max-width: 600px) {
		width: 40px;
	}
`;

export const NavIcon = styled(Logo)`
	width: 20rem;
	margin-top: 1.2rem;
	height: auto;
	color: ${(props) => props.theme.color};

	@media screen and (max-width: 1250px) {
		width: 15rem;
	}

	&.sticky {
		color: ${(props) => (props.theme.mode === 'Dark' ? props.theme.color : props.theme.color)};
	}
`;

// ul tag
export const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;
	margin-right: 4em;
	margin-bottom: 0;
`;
export const NavMenuMotion = styled(motion.ul)`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	width: 100%;
	margin-right: 0;
	height: 100vh;
	position: absolute;
	padding-top: 3em;
	bottom: 4em;
	left: 0;
	transform: translateX(${({ $active }) => ($active ? '0' : '100%')});
	-webkit-transform: -webkit-translateX(${({ $active }) => ($active ? '0' : '100%')});
	opacity: 1;
	transition: transform 0.3s ease-out;
	-webkit-transition: -webkit-transform 0.3s ease-out;
	background: ${(props) => props.theme.darkColor};
`;

// li tag
export const NavItem = styled.li`
	height: 80px;
	border-bottom: 2px solid transparent;
	display: flex;
	align-items: center;
	flex-direction: column;
	flex-shrink: 0;

	@media screen and (max-width: 980px) {
		width: 100%;
		height: 10vh;
	}
`;
export const NavItemMotion = styled(motion.li)`
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 100%;
`;
export const IconWrapper = styled.div`
	font-size: 2rem;
	vertical-align: center;
	display: flex;
	align-items: center;
	flex-direction: row;
	margin-right: 1em;
	color: ${(props) => props.theme.contrastColor};
`;
// a tag
export const NavLink = styled.a`
	color: ${(props) => props.theme.color};
	align-items: center;
	text-decoration: none;
	display: flex;
	padding: 0.5rem 1rem;
	height: 100%;
	width: 100%;
	position: relative;
	cursor: pointer;

	@media screen and (max-width: 980px) {
		text-align: center;
		padding: 0;
		width: 100%;
		display: table;
		align-items: center;
		&:hover {
			color: ${(props) => props.theme.color};
			transition: all 0.3s ease;
		}
	}

	@media screen and (min-width: 980px) {
		&::after {
			content: '';
			display: block;
			position: absolute;
			width: 100%;
			bottom: 0;
			height: 4px;
			left: 0;
			background: ${(props) => props.theme.color};
			transition: width 0.3s;
			transform: scaleX(0);
			transform-origin: bottom right;
			transition: transform 0.3s ease-out;
		}

		&:hover::after {
			transform: scaleX(1);
			transform-origin: bottom left;
		}
	}

	&.sticky {
		color: ${(props) => (props.theme.mode === 'Dark' ? props.theme.color : props.theme.color)};
	}
`;

export const LinkWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const NavTools = styled.a`
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 32px;
	margin-left: 2em;
	color: ${(props) => props.theme.color};

	&:hover {
		color: ${(props) =>
			props.theme.mode === 'Dark' ? props.theme.lightColor : props.theme.lightColor};
	}

	@media screen and (max-width: 900px) {
		display: none;
	}

	&.sticky {
		color: ${(props) => (props.theme.mode === 'Dark' ? props.theme.color : props.theme.color)};
		&:hover {
			color: ${(props) =>
				props.theme.mode === 'Dark' ? props.theme.lightColor : props.theme.Darkcolor};
		}
	}
`;

export const NavDarkMode = styled.div`
	padding-left: 1em;
	display: flex;
	align-items: center;
	*:focus {
		outline: none;
	}
	button {
		margin: auto;
		line-height: normal;
		overflow: visible !important;
	}
	@media screen and (max-width: 980px) {
		width: 20%;
		&:hover {
			border: none;
		}
	}
`;
export const DarkModeMobile = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	padding: 1em;
	color: ${(props) => props.theme.color};
	cursor: pointer;
`;
