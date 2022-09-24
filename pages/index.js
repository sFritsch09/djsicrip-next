import Head from 'next/head';
import React, { useState, useEffect, useRef } from 'react';
import { Logo, MusicCollection, items } from '../components';
import { CustomButton, LogoWrapper } from '../styles/globalStyles';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import { useMusic, useMusicUpdate } from '../components/hooks/MusicContext';
import {
	CustomImage,
	MusicContainer,
	MusicWrapper,
	PlayerContainer,
	PlayerWrapper,
	Close,
	CloseWrapper,
	ImgContainer,
	ImgCover,
	TitleWrapper,
	SongTitle,
	Artist,
} from './home.styles';

export default function Home() {
	const settings = {
		dots: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		speed: 1000,
		autoplaySpeed: 6000,
		easing: 'easeOutElastic',
		arrows: false,
		pauseOnHover: true,
	};
	const [isMobile, setIsMobile] = useState(true);
	const windowDimension = () => {
		if (window.innerWidth <= 980) {
			setIsMobile(false);
		} else {
			setIsMobile(true);
		}
	};
	// is Mobile
	useEffect(() => {
		windowDimension();
	}, []);

	// Music Player
	const audioSrc = useMusic();
	const setAudioSrc = useMusicUpdate();
	const [playing, setPlaying] = useState('');
	const [onPlaying, setOnPlaying] = useState('');
	const [pause, setPause] = useState('');
	const [open, setOpen] = useState(false);
	const [animate, setAnimate] = useState(false);

	const playerRef = useRef();

	const AudioSrcA1 = '/audio/Tracey In My Room (Lazy Dog Bootleg Dub Mix).mp3';
	const AudioSrcA2 = '/audio/I Feel The Love (Birdee Remix).mp3';
	useEffect(() => {
		if (audioSrc === 'audioA1') {
			setPlaying(AudioSrcA1);
			setOnPlaying('audioA1');
			setOpen(true);
		}
		if (audioSrc === 'audioA2') {
			setPlaying(AudioSrcA2);
			setOnPlaying('audioA2');
			setOpen(true);
		}
		if (audioSrc === 'pause') {
			setPlaying('');
			setPause('pause');
		}
		return function cleanup() {
			setAudioSrc('');
		};
	}, [setPlaying, audioSrc, setAudioSrc]);

	const handlePause = () => {
		playerRef.current.audio.current.play();
	};
	const handlePlay = () => {
		playerRef.current.audio.current.pause();
	};

	const handleOnPlay = () => {
		setPause('pause');
		setAnimate(true);
	};
	const handleOnPause = () => {
		setPause('play');
		setAnimate(false);
	};

	const handleClosePlayer = () => {
		setOpen(false);
		handlePlay();
	};
	return (
		<div>
			<Head>
				<title>DJ Si Crip</title>
				<meta name="description" content="DJ Si Crip - Never trust a DJ who can't dance!" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Slider {...settings}>
				<div>
					<CustomImage
						alt="First Pic"
						src={'https://hausboot.fra1.digitaloceanspaces.com/hompage-blau.jpg'}
						objectFit="cover"
					/>
				</div>
				<div>
					<CustomImage
						alt="First Pic"
						src={'https://hausboot.fra1.digitaloceanspaces.com/View-river2.jpg'}
						objectFit="cover"
					/>
				</div>
				<div>
					<CustomImage
						alt="First Pic"
						src={'https://hausboot.fra1.digitaloceanspaces.com/View-pond.jpg'}
						objectFit="cover"
					/>
				</div>
				<div>
					<CustomImage
						alt="First Pic"
						src={'https://hausboot.fra1.digitaloceanspaces.com/View-sluice.jpg'}
						objectFit="cover"
					/>
				</div>
			</Slider>
			<LogoWrapper>
				<div>
					<CustomButton>Buchen</CustomButton>
				</div>
				<Logo animation={animate} />
			</LogoWrapper>
			<MusicContainer>
				<MusicWrapper>
					<MusicCollection
						onPlay={pause}
						itemPlay={onPlaying}
						play={handlePlay}
						pause={handlePause}
					/>
				</MusicWrapper>
			</MusicContainer>
			{!isMobile ? (
				<PlayerContainer show={open}>
					{items.map((item, index) =>
						onPlaying === item.audio ? (
							<React.Fragment key={index}>
								<ImgCover cover={item.image} />
							</React.Fragment>
						) : null
					)}
					<PlayerWrapper>
						<AudioPlayer
							onPause={handleOnPause}
							onPlay={handleOnPlay}
							ref={playerRef}
							src={playing}
							customAdditionalControls={[]}
							progressJumpSteps={{
								forward: 30000,
								backward: 10000,
							}}
							customProgressBarSection={
								[
									// RHAP_UI.PROGRESS_BAR,
									// RHAP_UI.CURRENT_TIME,
									// <div className="customTime">/</div>,
									// RHAP_UI.DURATION,
								]
							}
							customVolumeControls={[]}
						/>
						<CloseWrapper onClick={handleClosePlayer}>
							<Close></Close>
						</CloseWrapper>
					</PlayerWrapper>
				</PlayerContainer>
			) : (
				<PlayerContainer show={open}>
					<ImgContainer>
						{items.map((item, index) =>
							onPlaying === item.audio ? (
								<React.Fragment key={index}>
									<ImgCover cover={item.image} />
									<TitleWrapper>
										<Artist>{item.artist}</Artist>
										<SongTitle>{item.title}</SongTitle>
									</TitleWrapper>
								</React.Fragment>
							) : null
						)}
					</ImgContainer>
					<PlayerWrapper>
						<AudioPlayer
							onPause={handleOnPause}
							onPlay={handleOnPlay}
							ref={playerRef}
							src={playing}
							customAdditionalControls={[]}
							progressJumpSteps={{
								forward: 30000,
								backward: 10000,
							}}
							customProgressBarSection={[
								RHAP_UI.PROGRESS_BAR,
								RHAP_UI.CURRENT_TIME,
								<div key="time" className="customTime">
									/
								</div>,
								RHAP_UI.DURATION,
							]}
						/>
					</PlayerWrapper>
					<CloseWrapper onClick={handleClosePlayer}>
						<Close></Close>
					</CloseWrapper>
				</PlayerContainer>
			)}
		</div>
	);
}
