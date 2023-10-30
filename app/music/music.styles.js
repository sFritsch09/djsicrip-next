'use client';
import styled from 'styled-components';

export const SoundCloudContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 4em 12em;
	gap: 1em;
	justify-items: center;

	div {
		width: 100% !important;
	}

	@media screen and (max-width: 980px) {
		padding: 1em 2em;
	}
`;
