'use client';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import { Button } from '@nextui-org/react';

const GlobalStyle = createGlobalStyle`
:root {
	--darkColor: #FFDDD2;
	--color: #006d77;
    --lightColor: #83C5BE;
	--contrastColor: #E29578;
	--contrastDark: #FFDDD2;
	--Darkcolor: #EDF6F9;

	--artistColor: #006d77;
	--calendarColor: #006d77;
	--nav: rgba(255, 255, 255, 0);
	--navBg: #83C5BE;
	--navTools: #EDF6F9;
	--product: #EDF6F9; 
	--about: #83C5BE; 
}	
[class="dark"] {
	--darkColor: #006d77;
	--color: #EDF6F9;
    --lightColor: #83C5BE;
	--contrastColor: #FFDDD2;
	--contrastDark: #E29578;
	--Darkcolor: #002f33;

	--artistColor: #E29578;
	--calendarColor: #006d77;
	--calendarColor: #FFDDD2;
	--navBg: #006d77;
	--navTools: #83C5BE;
	--product: #EDF6F9; 
	--about: #E29578; 
}
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
	font-family: 'Avant Garde', sans-serif;
	font-weight: bold;
}

body {
	background: var(--Darkcolor);
	color: var(--color);
}

.page-container {
	display: flex;
	  flex-direction: column;
	  min-height: 100vh;
}

.content-wrap {
	flex: 1;
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
	display: block;
	margin: 0 auto;
	padding-top: 8rem;
	width: 80%;
	div {
		border-color: var(--lightColor); 
	}
	@media screen and (max-width: 980px) {
		padding-top: 0;
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
	background-color: var(--contrastColor);
	color: var(--darkColor);
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
		border: 3px solid var(--contrastColor);
		color: var(--contrastColor);
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
		transform: translateX(-15rem) translateX(${(props) => props.$position}px);
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
