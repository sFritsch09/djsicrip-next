'use client';
import styled from 'styled-components';

export const Container = styled.div`
	iframe {
		border: 4px solid ${(props) => props.theme.lightColor};
		border-radius: 12px;
	}
`;
