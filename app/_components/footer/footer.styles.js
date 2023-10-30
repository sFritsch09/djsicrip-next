'use client';
import styled from 'styled-components';

export const FooterContainer = styled.div`
	display: flex;
	background: var(--darkColor);
	color: var(--color);
	padding-top: 2em;
	flex-direction: column;
	margin-top: 12em;
	position: relative;
	z-index: 2;

	@media screen and (max-width: 980px) {
		padding-bottom: 6em;
	}
`;
export const SeoText = styled.span`
	color: var(--darkColor);
`;

export const FooterWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	flex-direction: row;
	padding: 2em;
	@media screen and (max-width: 980px) {
		padding: 1em;
	}
`;

export const FooterSection = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: center;
	@media screen and (max-width: 980px) {
		padding: 1em;
	}

	.header {
		padding: 10px;
	}
	.content {
		padding: 2px;
	}
`;
export const AboutWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	text-decoration: none;
	color: inherit;
	padding: 0.5em 0;
	z-index: 21;

	&:hover {
		background-color: var(--lightColor);
		color: var(--darkColor);
		transition: all 0.3s ease-out;
	}
`;

export const SocialIconWrapper = styled.ul`
	list-style: none none;
	display: inline-flex;
	font-size: 2em;
	padding: 2px;
	gap: 0.3em;

	li {
		transition: scale 0.1s ease-in;
		cursor: pointer;
		&:hover {
			scale: 1.2;
		}
	}
`;
