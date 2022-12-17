import styled from 'styled-components';
import { BiPlay } from 'react-icons/bi';
import { IoPauseOutline } from 'react-icons/io5';
import { motion } from 'framer-motion';

export const GridContainer = styled.div`
	height: 100%;
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-template-rows: 1fr 1fr;
	row-gap: 5em;
	align-items: center;
	justify-items: center;
	position: relative;

	@media screen and (max-width: 980px) {
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr 1fr 1fr;
	}
	@media screen and (max-width: 680px) {
		column-gap: 2em;
		row-gap: 2em;
	}
`;

export const ItemA = styled(motion.div)`
	width: 80%;
	height: 100%;
	display: flex;
	justify-content: stretch;
	flex-direction: column;
	align-items: center;
	color: ${(props) => props.theme.color};
	border-bottom: 2px solid ${(props) => props.theme.color};
	cursor: pointer;

	@media screen and (max-width: 980px) {
		width: 100%;
	}
`;

export const CoverWrapper = styled.div`
	width: 100%;
	display: flex;
	font-size: 1em;
	justify-content: center;
	align-items: center;
	background-size: contain;
	background-repeat: no-repeat;

	&:before {
		content: '';
		float: left;
		padding-top: 100%;
	}

	.cover {
		z-index: 0;
		position: relative;
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
`;

export const PlayWrapper = styled.div`
	border: 1px solid
		${(props) => (props.theme.mode === 'Dark' ? props.theme.color : props.theme.Darkcolor)};
	border-radius: 50%;
	width: 5em;
	height: 5em;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	z-index: 1;
	transition: transform 0.1s ease-out;

	@media screen and (max-width: 680px) {
		width: 3em;
		height: 3em;
	}
	${ItemA}:hover & {
		transform: scale(1.2);
	}
`;

export const CoverPlay = styled(BiPlay)`
	font-size: 3em;
	margin-left: 8%;
	color: ${(props) => (props.theme.mode === 'Dark' ? props.theme.color : props.theme.Darkcolor)};
	z-index: 1;
`;
export const CoverPause = styled(IoPauseOutline)`
	font-size: 3em;
	color: ${(props) => (props.theme.mode === 'Dark' ? props.theme.color : props.theme.Darkcolor)};
	z-index: 1;
`;

export const TitleWrapper = styled.div`
	padding: 0.5em 0;
	display: flex;
	width: 100%;

	@media screen and (max-width: 980px) {
		padding-bottom: 0;
	}
`;

export const TrackTitle = styled.h2`
	letter-spacing: 0.035em;
	text-transform: uppercase;
	font-weight: bolder;
	-webkit-text-stroke: 0.05em;
	text-align: start;
	font-size: 1.2em;
	@media screen and (max-width: 680px) {
		font-size: 0.8em;
	}
`;
export const ArtistTitle = styled.div`
	width: 100%;
	text-align: start;
	font-size: 1em;
	color: ${(props) => props.theme.color};
	filter: brightness(70%);
`;

export const SubTitleWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	padding: 0.5em 0;
	margin-top: auto;
`;

export const SubTitle = styled.h4`
	font-size: 1em;
	text-transform: capitalize;
`;
