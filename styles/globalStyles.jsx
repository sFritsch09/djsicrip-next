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
	color: ${(props) => props.theme.color};
`;
export const LogoWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 300px;
	height: 300px;
	overflow: hidden;

	@media screen and (min-width: 2000px) {
		width: 500px;
		height: 500px;
	}
	@media screen and (max-width: 1200px) {
		width: 250px;
		height: 250px;
	}
	@media screen and (max-width: 900px) {
		width: 150px;
		height: 150px;
		padding: 0;
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
