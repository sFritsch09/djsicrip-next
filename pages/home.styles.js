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

export const MusicContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-bottom: 1em;
	width: 100%;
	height: 80em;
	@media screen and (max-width: 980px) {
		padding-bottom: 8em;
		height: 140em;
	}
	@media screen and (max-width: 680px) {
		padding-bottom: 8em;
		height: 80em;
	}
`;

export const MusicWrapper = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
	padding: 4em 7em;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	@media screen and (max-width: 680px) {
		padding: 1em 2em;
	}
`;
