import styled from 'styled-components';

export const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4em;
	box-sizing: border-box;
	margin: 0 25vw;
`;

export const FormHeader = styled.h1`
	color: ${(props) => props.theme.color};
`;
