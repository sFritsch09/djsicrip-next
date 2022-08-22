import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

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
