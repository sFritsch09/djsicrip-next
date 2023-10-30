'use client';
import styled from 'styled-components';

export const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4em;
	box-sizing: border-box;
	margin: 0 25vw;

	@media screen and (max-width: 980px) {
		width: 100%;
		margin: 0;
	}
`;

export const FormHeader = styled.h1`
	color: var(--color);
`;

export const Label = styled.label`
	display: block;
	font-weight: var(--nextui-fontWeights-normal);
	font-size: calc(var(--nextui--checkboxSize) * 0.9);
	color: var(--nextui-colors-accents8);
	margin-bottom: var(--nextui-space-3);
`;
