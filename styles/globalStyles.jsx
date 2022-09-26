import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import Button from '@nextui-org/react/Button';

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
:root {
	--nextui-colors-primary: ${(props) => props.theme.contrastColor} !important;
	--nextui-colors-secondary: ${(props) => props.theme.contrastDark} !important;
	--nextui-colors-primarySolidContrast: ${(props) => props.theme.darkColor} !important;
	--nextui-zIndices-2: 1;
	--nextui-zIndices-1: 1;
	--nextui-fontSizes-lg: 2.5rem;
}


.no-scroll {
	overflow-y: hidden;
}

a:-webkit-any-link {
    color: inherit;
    cursor: pointer;
    text-decoration: none;
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
	font-size: 2.5rem;
	padding: 2rem;

	@media screen and (max-width: 680px) {
		font-size: 1.5rem;
		padding: 0.5rem 0.2rem;
		min-width: 10rem;
	}

	&:hover {
		background-color: initial;
		border: 3px solid ${(props) => props.theme.contrastColor};
		color: ${(props) => props.theme.contrastColor};
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
