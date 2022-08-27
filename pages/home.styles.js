import styled from 'styled-components';
import Image from '@nextui-org/react/Image';

export const CustomImage = styled(Image)`
	width: 100%;
	height: 600px;
	background-position: 50% 45%;
	background-size: cover !important;
	background-repeat: no-repeat;
	transition: all 0.5s ease;
	&:hover {
		transform: scale(1.1);
	}
`;
