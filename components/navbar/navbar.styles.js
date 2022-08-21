import styled from 'styled-components';
import Logo from '../../images/Logo-sicrip.svg';

export const NavWrapper = styled.div`
	padding: 40px 0;
`;
export const Nav = styled.nav`
	width: 100%;
	height: 80px;
	position: fixed;
	transition: 0.6s;
	flex-direction: row;
	top: 0;
	z-index: 20;

	&.sticky {
		background: ${(props) => props.theme.color};
	}
	@media screen and (max-width: 900px) {
		bottom: 0 !important;
		left: 0 !important;
		top: initial;
		position: fixed;
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
	height: 80px;
	max-width: 100%;
	margin-right: auto;
	margin-left: auto;
	padding: 0 100px;

	@media screen and (min-width: 2000px) {
		padding: 0 120px;
	}
	@media screen and (max-width: 900px) {
	}
	@media screen and (max-width: 1200px) {
		padding: 0 40px;
	}
	@media screen and (max-width: 1050px) {
		padding-left: 10px;
	}
`;

export const MobileIcon = styled.div`
	display: none;
	@media screen and (max-width: 900px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 70%);
		font-size: 1.8rem;
		z-index: 21;
		cursor: pointer;
	}
`;

export const LogoContainer = styled.div`
	flex-basis: 40%;
	height: 80px;
	display: flex;
	justify-content: flex-start;

	@media screen and (min-width: 2000px) {
		flex-basis: 40%;
	}
	@media screen and (max-width: 1400px) {
		flex-basis: 20%;
	}
	@media screen and (max-width: 1200px) {
		flex-basis: 10%;
	}
	@media screen and (max-width: 1100px) {
		flex-basis: 5%;
	}
`;

export const NavIconWrapper = styled.a`
	text-decoration: none;
	color: ${(props) => props.theme.color};
	justify-content: flex-start;
	margin-bottom: 1.2rem;
	position: relative;
	transition: transform ease 0.6s;

	&.sticky {
		transform: scale(0.6);
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

	&.sticky {
		color: ${(props) => props.theme.Darkcolor};
	}
`;

// ul tag
export const NavMenu = styled.ul`
	display: flex;
	position: relative;
	list-style: none;
	align-items: center;
	justify-content: space-between;
	flex-basis: 50%;

	@media screen and (min-width: 2300px) {
		flex-basis: 40%;
	}
	@media screen and (max-width: 2300px) {
		flex-basis: 45%;
	}
	@media screen and (max-width: 1750px) {
		flex-basis: 50%;
	}
	@media screen and (max-width: 1600px) {
		flex-basis: 40%;
	}
	@media screen and (max-width: 1400px) {
		flex-basis: 70%;
	}
	@media screen and (max-width: 1200px) {
		flex-basis: 75%;
	}

	@media screen and (max-width: 900px) {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100vh;
		position: absolute;
		bottom: 0;
		left: ${({ click }) => (click ? 0 : '-100%')};
		opacity: 1;
		transition: all 0.5s ease;
		background: ${(props) => props.theme.Darkcolor};
	}
`;

// li tag
export const NavItem = styled.li`
	position: relative;
	font-size: 16px;

	@media screen and (min-width: 2000px) {
		font-size: 20px;
	}

	@media screen and (max-width: 900px) {
		width: 100%;
		&:hover {
			border: none;
		}
	}
`;
// a tag
export const NavLink = styled.a`
	cursor: pointer;
	position: relative;
	margin: 0 15px;
	letter-spacing: 1px;
	color: ${(props) => props.theme.color};
	display: flex;
	justify-content: space-between;
	align-items: center;
	text-decoration: none;
	transition: 0.6s;
	display: inline-block;

	@media screen and (max-width: 1100px) {
		margin: 0 10px;
	}

	&::after {
		content: '';
		display: block;
		width: 0;
		height: 3px;
		background: ${(props) => props.theme.lightColor};
		transition: width 0.3s;
	}

	&:hover::after {
		width: 100%;
		transition: width 0.3s;
	}

	&.sticky {
		color: ${(props) => props.theme.Darkcolor};
	}

	@media screen and (max-width: 900px) {
		text-align: center;
		border-spacing: 30px;
		margin: auto;
		width: 100%;
		display: table;
		max-width: 100%;
		white-space: nowrap;
		&:hover {
			color: ${(props) => props.theme.lightColor};
			transition: all 0.3s ease;
		}
		&::after {
			display: none;
		}
	}
`;

export const NavTools = styled.a`
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 32px;
	color: ${(props) => props.theme.color};

	@media screen and (max-width: 900px) {
		display: none;
	}

	&.sticky {
		color: ${(props) => props.theme.Darkcolor};
	}
`;

export const NavDarkMode = styled.div`
	padding-left: 15px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	overflow: auto;

	*:focus {
		outline: none;
	}

	@media screen and (max-width: 900px) {
		display: none;
	}
`;
