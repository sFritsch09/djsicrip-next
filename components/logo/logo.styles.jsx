'use client';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Vinyl from '../../images/vinyl.svg';

export const MainContainer = styled(motion.div)`
	display: flex;
	justify-content: center;
	position: relative;
	height: 100%;
	width: 100%;
`;

export const LogoContainer = styled(motion.div)`
	width: 70%;
	position: absolute;
	height: 20%;
	z-index: 1;

	.logo {
		transform: rotate(21deg) scale(3);
		width: 110%;
		height: 140%;
		margin-top: -6%;
	}
`;
export const VinylWrapper = styled(motion.div)`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 60%;
	width: 60%;
	cursor: grab;
`;

export const VinylImg = styled(Vinyl)`
	width: 100%;
	height: 100%;
`;
