import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Single = styled(motion.div)`
	.container {
		padding-top: 6rem;
		display: block;
		@media screen and (max-width: 980px) {
			padding-top: 0;
		}
		.top-row {
			height: 50vh;
			width: 100%;
			align-items: flex-end;
			display: flex;
			justify-content: center;
			@media screen and (max-width: 600px) {
				margin-top: 0;
				height: 30vh;
			}
			.top {
				margin: 40px;
				width: 100%;
				max-height: 100%;
				justify-content: center;
				display: flex;
				.model {
					.first {
						margin-right: 72px;
						@media screen and (max-width: 600px) {
							margin-right: 30px;
						}
					}
					span {
						display: inline-block;
						position: relative;
						color: var(--lightColor);
						font-weight: 400;
						font-size: 180px;
						@media screen and (max-width: 1500px) {
							font-size: 100px;
						}
						@media screen and (max-width: 900px) {
							font-size: 60px;
						}
						@media screen and (max-width: 600px) {
							font-size: 50px;
						}
						@media screen and (max-width: 490px) {
							font-size: 35px;
						}
					}
				}
			}
		}
	}
`;

export const ImageWrapper = styled(motion.div)`
	position: relative;
	width: 60%;
	height: 850px;
	border: 4px solid var(--lightColor);
	border-radius: 20px;
	margin: 0 auto;
	overflow: hidden;

	@media screen and (max-width: 980px) {
		width: 80%;
		height: 500px;
	}
`;

export const FaqWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	margin-top: 2em;
	padding: 2em 12em;
	color: var(--about);

	@media screen and (max-width: 980px) {
		padding: 1em 2em;
		margin-bottom: 8em;
	}

	.faq {
		width: 50%;

		@media screen and (max-width: 980px) {
			width: fit-content;
		}
	}
`;
