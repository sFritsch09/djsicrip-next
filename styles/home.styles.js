import styled, { css } from 'styled-components';
import { Image } from '@nextui-org/react';
import { VscClose } from 'react-icons/vsc';

const Active = css`
	width: 100%;
	background: ${(props) => props.theme.lightColor};
	transition: width 0.2s;
`;

export const Angle = styled.div`
	position: relative;
	height: 2em;
	padding-bottom: 2em;
	background-color: ${(props) => props.theme.Darkcolor};
	&:before {
		transform: skewY(2.6deg);
		transform-origin: 100% 0;
		background: inherit;
		content: '';
		display: block;
		height: 10em;
		left: 0;
		position: absolute;
		right: 0;
		backface-visibility: hidden; // for Chrome Windows
		@media screen and (min-width: 2000px) {
			top: -20px;
		}
		@media screen and (max-width: 900px) {
			top: -6em;
		}
	}
`;
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
	padding-bottom: 2em;
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

// NOTE MusicPlayer
export const PlayerContainer = styled.div`
	width: 100%;
	height: 80px;
	position: fixed;
	transition: 0.6s;
	bottom: 0;
	display: ${(props) => (props.show ? 'flex' : 'none')};
	background-color: ${(props) =>
		props.theme.mode === 'Dark' ? props.theme.Darkcolor : props.theme.lightColor};
	box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.2);

	@media screen and (max-width: 980px) {
		bottom: 5rem;
	}
`;

export const ImgContainer = styled.div`
	width: 25%;
	border-right: 1px solid ${(props) => props.theme.color};
	display: flex;
`;

export const NavContainer = styled.div`
	width: 100%;
	height: 2em;
	display: flex;
	align-items: center;
	padding: 0 1em;
	margin-bottom: 2em;
	justify-content: space-evenly;
	color: ${(props) => props.theme.color};

	@media screen and (max-width: 680px) {
		padding: 0;
		margin-bottom: 1em;
	}
`;

export const NavItem = styled.div`
	cursor: pointer;
	font-size: 2em;

	@media screen and (max-width: 680px) {
		font-size: 1em;
	}

	&::after {
		width: 0;
		content: '';
		display: block;
		height: 3px;
		${(props) => (props.active ? Active : null)}
	}

	&:hover {
		color: ${(props) => props.theme.contrastColor};
		transition: width 0.3s;
	}
`;

export const TitleWrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	flex: 1;
	padding: 5px 0;
	margin: 0 10px;
	overflow: hidden;
`;

export const Artist = styled.div`
	color: ${(props) =>
		props.theme.mode === 'Dark' ? props.theme.contrastDark : props.theme.contrastColor};
	margin-bottom: 10px;
	margin-top: 5px;
`;

export const SongTitle = styled.div`
	padding-left: 5px;
	white-space: nowrap;
	animation: floatText 10s infinite linear;
	color: ${(props) =>
		props.theme.mode === 'Dark' ? props.theme.contrastColor : props.theme.contrastDark};

	&:hover {
		animation-play-state: paused;
	}
	@keyframes floatText {
		to {
			transform: translateX(-25%);
		}
	}
`;

export const ImgCover = styled.img`
	background: url(${(props) => (props.cover === 'Cover' ? `${Img}` : props.cover)});
	background-size: cover;
	background-repeat: no-repeat;
	width: 88px;
	height: 100%;
`;

export const CloseWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 5%;
	height: 100%;
	cursor: pointer;
	border-left: 1px solid ${(props) => props.theme.color};

	@media screen and (max-width: 900px) {
		width: 25%;
	}
`;

export const Close = styled(VscClose)`
	font-size: 200%;
	color: ${(props) => props.theme.color};
`;
export const PlayerWrapper = styled.div`
	width: 70%;

	@media screen and (max-width: 900px) {
		display: flex;
		flex: 1;
	}
	.rhap_container {
		z-index: 20;
		display: flex;
		flex-direction: column;
		line-height: 1;
		width: 100%;
		padding: 10px 25px;
		background-color: ${(props) =>
			props.theme.mode === 'Dark' ? props.theme.Darkcolor : props.theme.lightColor};

		@media screen and (max-width: 900px) {
			padding: 2px 5px;
		}

		&:focus:not(:focus-visible) {
			outline: 0;
		}

		svg {
			vertical-align: initial; // overwrite Bootstrap default
		}
	}

	.rhap_header {
		margin-bottom: 10px;
	}

	.rhap_footer {
		margin-top: 5px;
	}

	.rhap_main {
		display: flex;
		flex-direction: column;
		flex: 1 1 auto;
	}

	.rhap_stacked {
		.rhap_controls-section {
			margin-top: 8px;
		}
	}

	.rhap_horizontal {
		flex-direction: row;

		.rhap_controls-section {
			margin-left: 8px;
		}
	}

	.rhap_horizontal-reverse {
		flex-direction: row-reverse;

		.rhap_controls-section {
			margin-right: 8px;
		}
	}

	.rhap_stacked-reverse {
		flex-direction: column-reverse;

		.rhap_controls-section {
			margin-bottom: 8px;
		}
	}

	.rhap_progress-section {
		display: flex;
		flex: 3 1 auto;
		align-items: center;
		@media screen and (max-width: 900px) {
			display: none;
		}
	}

	.rhap_progress-container {
		display: flex;
		align-items: center;
		height: 20px;
		flex: 1 0 auto;
		align-self: center;
		margin: 0 calc(10px + 1%);
		cursor: pointer;
		-webkit-user-select: none;

		&:focus:not(:focus-visible) {
			outline: 0;
		}
	}

	.rhap_time {
		color: ${(props) => props.theme.color};
		font-size: 16px;
		padding: 0 2px;
		user-select: none;
		-webkit-user-select: none;
	}

	.customTime {
		color: ${(props) => props.theme.color};
	}
	.rhap_progress-bar {
		box-sizing: border-box;
		position: relative;
		z-index: 0;
		width: 100%;
		height: 5px;
		background-color: ${(props) => props.theme.color};
		border-radius: 2px;
	}

	.rhap_progress-filled {
		height: 100%;
		position: absolute;
		z-index: 2;
		background-color: ${(props) =>
			props.theme.mode === 'Dark' ? props.theme.lightColor : props.theme.color};
		border-radius: 2px;
	}

	.rhap_progress-bar-show-download {
		background-color: ${(props) =>
			props.theme.mode === 'Dark' ? props.theme.contrastColor : props.theme.contrastDark};
	}

	.rhap_download-progress {
		height: 100%;
		position: absolute;
		z-index: 1;
		background-color: ${(props) =>
			props.theme.mode === 'Dark' ? props.theme.contrastDark : props.theme.contrastColor};
		border-radius: 2px;
	}

	.rhap_progress-indicator {
		box-sizing: border-box;
		position: absolute;
		z-index: 3;
		width: 20px;
		height: 20px;
		margin-left: -10px;
		top: -8px;
		background: ${(props) =>
			props.theme.mode === 'Dark' ? props.theme.lightColor : props.theme.color};
		border-radius: 50px;
		box-shadow: ${(props) => props.theme.color} 0 0 5px;
	}

	.rhap_controls-section {
		display: flex;
		flex: 1 1 auto;
		justify-content: space-between;
		align-items: center;
	}

	.rhap_additional-controls {
		display: flex;
		flex: 1 0 auto;
		align-items: center;
	}

	.rhap_repeat-button {
		font-size: 26px;
		width: 26px;
		height: 26px;
		color: ${(props) => props.theme.color};
		margin-right: 6px;
	}

	.rhap_main-controls {
		flex: 0 1 auto;
		display: flex;
		justify-content: center;
		align-items: center;

		@media screen and (max-width: 900px) {
			flex: 0;
			justify-content: stretch;
			width: 100%;
		}
	}

	.rhap_main-controls-button {
		margin: 0 3px;
		color: ${(props) => props.theme.color};
		font-size: 35px;
		width: 35px;
		height: 35px;
	}

	.rhap_play-pause-button {
		font-size: 40px;
		width: 40px;
		height: 40px;
	}

	.rhap_volume-controls {
		display: flex;
		flex: 1 0 auto;
		justify-content: flex-end;
		align-items: center;
	}

	.rhap_volume-button {
		flex: 0 0 26px;
		font-size: 26px;
		width: 26px;
		height: 26px;
		color: ${(props) => props.theme.color};
		margin-right: 6px;
	}

	.rhap_volume-container {
		display: flex;
		align-items: center;
		flex: 0 1 100px;
		-webkit-user-select: none;
	}

	.rhap_volume-bar-area {
		display: flex;
		align-items: center;
		width: 100%;
		height: 14px;
		cursor: pointer;

		&:focus:not(:focus-visible) {
			outline: 0;
		}
	}

	.rhap_volume-bar {
		box-sizing: border-box;
		position: relative;
		width: 100%;
		height: 4px;
		background: ${(props) =>
			props.theme.mode === 'Dark' ? props.theme.contrastColor : props.theme.contrastDark};
		border-radius: 2px;
	}

	.rhap_volume-indicator {
		box-sizing: border-box;
		position: absolute;
		width: 12px;
		height: 12px;
		margin-left: -6px;
		left: 0;
		top: -4px;
		background: ${(props) =>
			props.theme.mode === 'Dark' ? props.theme.lightColor : props.theme.color};
		opacity: 0.9;
		border-radius: 50px;
		box-shadow: ${(props) => props.theme.color} 0 0 3px;
		cursor: pointer;

		&:hover {
			opacity: 0.9;
		}
	}

	.rhap_volume-filled {
		height: 100%;
		position: absolute;
		z-index: 2;
		background-color: ${(props) => props.theme.color};
		border-radius: 2px;
	}

	/* Utils */
	.rhap_button-clear {
		background-color: transparent;
		border: none;
		padding: 0;
		overflow: hidden;
		cursor: pointer;

		&:hover {
			opacity: 0.9;
			transition-duration: 0.2s;
		}

		&:active {
			opacity: 0.95;
		}

		&:focus:not(:focus-visible) {
			outline: 0;
		}
	}
`;
