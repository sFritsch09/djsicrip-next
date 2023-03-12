'use client';
import styled from 'styled-components';

export const LandingContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	.header {
		font-size: 2em;
		margin-bottom: 1em;
		@media screen and (max-width: 980px) {
			font-size: 1.5em;
		}
	}
`;

export const ImageWrapper = styled.div`
	position: relative;
	width: 100%;
	height: 12em;
	max-width: 21em;
`;
