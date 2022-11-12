import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import { Button } from '@nextui-org/react';

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
	font-family: 'Avant Garde', sans-serif;
	font-weight: bold;
}

body {
	background: ${(props) => props.theme.Darkcolor};
	color: ${(props) => props.theme.color};
}

.page-container {
	display: flex;
	  flex-direction: column;
	  min-height: 100vh;
}

.content-wrap {
	flex: 1;
}

:root {
	--nextui-colors-primary: ${(props) => props.theme.contrastColor} !important;
	--nextui-colors-secondary: ${(props) => props.theme.contrastDark} !important;
	--nextui-colors-primarySolidContrast: ${(props) => props.theme.darkColor} !important;
	--nextui-zIndices-2: 1 !important;
	--nextui-zIndices-1: 1 !important;
	--nextui-fontSizes-lg: 2.5rem;
	--nextui-colors-border: ${(props) => props.theme.contrastDark} !important;
	--nextui-colors-foreground: ${(props) => props.theme.contrastColor} !important;
	--nextui-colors-text: ${(props) => props.theme.color} !important;
	--nextui-colors-accents0: ${(props) => props.theme.darkColor} !important;
	--nextui-colors-accents7: ${(props) =>
		props.theme.mode === 'Dark' ? props.theme.Darkcolor : props.theme.color} !important;
	--nextui-colors-primarySolidHover: ${(props) => props.theme.darkColor} !important;
	--nextui-colors-backgroundContrast: ${(props) => props.theme.darkColor} !important;
}


.no-scroll {
	overflow-y: hidden;
}

a:-webkit-any-link {
    color: inherit;
    cursor: pointer;
    text-decoration: none;
}

.main {
	margin-top: 12em;
	padding: 1em 15em;

	@media screen and (max-width: 980px) {
	margin-top: 0;
		padding: 1em 2em;
	}

	thead > tr:first-child, th {
		background-color: ${(props) => props.theme.lightColor};
	}

	div {
		border-color: ${(props) => props.theme.lightColor}; 
	}
}
`;

export const FourOhFourContainer = styled.div`
	margin: auto;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;
export const CustomButton = styled(Button)`
	background-color: ${(props) => props.theme.contrastColor};
	color: ${(props) => props.theme.darkColor};
	font-size: 2.5rem !important;
	padding: 2rem !important;
	z-index: 3;
	position: relative;

	@media screen and (max-width: 680px) {
		padding: 0.5rem 1rem !important;
		min-width: 9rem !important;
		font-size: 1.5rem !important;
	}

	&:hover {
		background-color: initial;
		border: 3px solid ${(props) => props.theme.contrastColor};
		color: ${(props) => props.theme.contrastColor};
	}
`;

export const ToolTip = styled.div`
	position: relative;

	.tooltip {
		position: absolute;
		padding: 0.5rem 0.2rem;
		bottom: 50%;
		right: 0;
		display: block;
		opacity: 0;
		visibility: hidden;
		transform: translateX(-15rem) translateX(${(props) => props.position}px);
		z-index: 6;
	}

	&:hover {
		.tooltip {
			opacity: 1;
			visibility: visible;
		}
	}
`;

export const LogoWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 18em;
	overflow: hidden;
	padding: 0 8em;
	padding-top: 2em;

	@media screen and (max-width: 980px) {
		padding: 0 6em;
	}
	@media screen and (max-width: 680px) {
		padding: 0 2em;
		height: 10em;
	}
`;

export const theme = {
	mode: 'Dark',
	darkColor: '#006d77',
	color: '#EDF6F9',
	lightColor: '#83C5BE',
	contrastColor: '#FFDDD2',
	contrastDark: '#E29578',
	Darkcolor: '#002f33',
};

export const invertTheme = {
	color: '#006d77',
	Darkcolor: '#EDF6F9',
	lightColor: '#83C5Be',
	contrastDark: '#FFDDD2',
	contrastColor: '#E29578',
	darkColor: '#FFDDD2',
};

export default GlobalStyle;
