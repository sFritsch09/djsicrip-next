import Head from 'next/head';
import React, { useState, useEffect, useRef } from 'react';
import { Logo, MusicCollection, items } from '../components';
import { CustomButton, LogoWrapper, ToolTip } from '../styles/globalStyles';
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
	NavContainer,
	NavItem,
	Angle,
} from '../styles/home.styles';
import { Image } from '@nextui-org/react';
// Modal
import { Modal, useModal, Text } from '@nextui-org/react';

export default function Home() {
	// Modal
	const { setVisible, bindings } = useModal();
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
	// Navbar MusicCollection
	const [state, setState] = useState({
		status: 'active',
	});
	const [xPosition, setXPosition] = useState(0);

	const { status } = state;
	let coll = items.active;
	const handleClick = (name) => {
		switch (name) {
			case 'showA':
				setState({ status: 'active' });
				break;
			case 'showB':
				setState({ status: 'activeB' });
				break;
			case 'showC':
				setState({ status: 'activeC' });
				break;
			case 'showD':
				setState({ status: 'activeD' });
				break;
			default:
				setState({ status: 'active' });
		}
	};
	useEffect(() => {
		let coll = items.active;
		if (status === 'active') {
			coll = items.active;
		} else if (status === 'activeB') {
			coll = items.activeB;
		} else if (status === 'activeC') {
			coll = items.activeC;
		} else if (status === 'activeD') {
			coll = items.activeD;
		}
	}, [status]);
	return (
		<div>
			<Head>
				<title>DJ Si Crip</title>
				<meta name="description" content="DJ Si Crip - Never trust a DJ who can't dance!" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Modal
				blur
				preventClose
				width="600px"
				aria-labelledby="modal-title"
				aria-describedby="modal-description"
				{...bindings}
			>
				<Modal.Header>
					<Text id="modal-title" size={18}>
						Hinweis!
					</Text>
				</Modal.Header>
				<Modal.Body>
					<Text id="modal-description" size={20}>
						Meine Webseite ist noch nicht fertiggestellt und ist noch in Arbeit 🚧 Bis dahin können
						Anfragen über Email oder Mobil angenommen werden ✨
						<br />
						<br />
						📧 Email: sfritsch09@gmail.com
						<br />
						📱 Mobil: 017632694016
					</Text>
				</Modal.Body>
				<Modal.Footer>
					<CustomButton auto onClick={() => setVisible(false)}>
						OK
					</CustomButton>
				</Modal.Footer>
			</Modal>
			<Slider {...settings}>
				<div>
					<CustomImage alt="First Pic" src={'/images/darkTurntables.jpeg'} objectFit="cover" />
				</div>
				<div>
					<CustomImage
						alt="First Pic"
						src={'https://source.unsplash.com/cKwPLSR5XAo'}
						objectFit="cover"
					/>
				</div>
				<div>
					<CustomImage
						alt="First Pic"
						src={'https://source.unsplash.com/5WrxWltrCTg'}
						objectFit="cover"
					/>
				</div>
				<div>
					<CustomImage
						alt="First Pic"
						src={'https://source.unsplash.com/9P1pZy3gwxg'}
						objectFit="cover"
					/>
				</div>
			</Slider>
			<Angle />
			<LogoWrapper>
				<ToolTip onMouseMove={(e) => setXPosition(e.clientX)} position={xPosition}>
					<CustomButton onClick={() => setVisible(true)}>Buchen</CustomButton>
					<span className="tooltip">
						<Image src="/images/speed.gif" alt="gif here" />
					</span>
				</ToolTip>
				<Logo animation={animate} />
			</LogoWrapper>
			<MusicContainer>
				<MusicWrapper>
					<NavContainer>
						<NavItem active={status === 'active'} onClick={() => handleClick('showA')}>
							House
						</NavItem>
						<NavItem active={status === 'activeB'} onClick={() => handleClick('showB')}>
							Classics
						</NavItem>
						<NavItem active={status === 'activeC'} onClick={() => handleClick('showC')}>
							Party
						</NavItem>
						<NavItem active={status === 'activeD'} onClick={() => handleClick('showD')}>
							Hip Hop
						</NavItem>
					</NavContainer>
					<MusicCollection
						onPlay={pause}
						itemPlay={onPlaying}
						play={handlePlay}
						pause={handlePause}
						status={status}
						active={status}
					/>
				</MusicWrapper>
			</MusicContainer>
			{!isMobile ? (
				<PlayerContainer show={open}>
					{coll.map((item, index) =>
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
						{coll.map((item, index) =>
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
