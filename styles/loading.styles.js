'use client';
import styled from 'styled-components';

export const LoadingWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 18em;
	overflow: hidden;
	padding: 0 8em;
	margin-top: 12rem;

	@media screen and (max-width: 980px) {
		padding: 0 6em;
	}
	@media screen and (max-width: 680px) {
		padding: 0 2em;
		height: 19em;
	}
`;
