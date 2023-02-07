'use client';
import { useState, useEffect, useRef, Fragment } from 'react';
import { Logo, MusicCollection } from '../components';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import { useMusic, useMusicUpdate } from '../components/hooks/MusicContext';
import PocketBase from 'pocketbase';
import {
	MusicContainer,
	MusicWrapper,
	PlayerContainer,
	PlayerWrapper,
	Close,
	CloseWrapper,
	ImgContainer,
	TitleWrapper,
	SongTitle,
	Artist,
	NavContainer,
	NavItem,
} from '../styles/home.styles';
import { Image } from '@nextui-org/react';
import { useDarkMode } from '../components/hooks/DarkModeContext';
import { CustomButton, LogoWrapper, ToolTip } from '../styles/globalStyles';
// Modal
import { Modal, useModal, Text } from '@nextui-org/react';

export default function MusicSection() {
	const [isDarkMode, _] = useDarkMode();

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

	// title length

	const [animateTitle, setAnimateTitle] = useState(false);
	const songRef = useRef();
	const titleRef = useRef();
	useEffect(() => {
		let titleWidth = titleRef.current?.offsetWidth;
		let songWidth = songRef.current?.offsetWidth;
		if (titleWidth > songWidth - 100) {
			setAnimateTitle(true);
		} else {
			setAnimateTitle(false);
		}
	}, [titleRef.current]);

	// Music Player
	const audioSrc = useMusic();
	const setAudioSrc = useMusicUpdate();
	const [playing, setPlaying] = useState('');
	const [pause, setPause] = useState('');
	const [open, setOpen] = useState(false);

	const playerRef = useRef();

	useEffect(() => {
		if (audioSrc) {
			setOpen(true);
			setPlaying(audioSrc);
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
	};
	const handleOnPause = () => {
		setPause('play');
	};

	const handleClosePlayer = () => {
		setOpen(false);
		handlePlay();
	};
	// Navbar MusicCollection
	const [state, setState] = useState({
		status: 'house',
	});

	const { status } = state;
	const handleClick = (name) => {
		switch (name) {
			case 'showA':
				setState({ status: 'house' });
				break;
			case 'showB':
				setState({ status: 'classic' });
				break;
			case 'showC':
				setState({ status: 'party' });
				break;
			case 'showD':
				setState({ status: 'hip hop' });
				break;
			default:
				setState({ status: 'house' });
		}
	};
	const [xPosition, setXPosition] = useState(0);
	// // fetching covers
	const [covers, setCovers] = useState([]);
	const pb = new PocketBase('https://pb.djsicrip.com');
	const getCovers = async () => {
		const covers = await pb.collection('covers').getList(1, 50, { $autoCancel: false });
		setCovers(covers);
	};
	useEffect(() => {
		let ignore = false;
		if (!ignore) {
			getCovers();
		}
		return () => {
			ignore = true;
		};
	}, []);
	const { setVisible, bindings } = useModal();
	return (
		<Fragment>
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
			<LogoWrapper>
				<ToolTip onMouseMove={(e) => setXPosition(e.clientX)} position={xPosition}>
					<CustomButton onClick={() => setVisible(true)}>Buchen</CustomButton>
					<span className="tooltip">
						<Image src="/images/speed.gif" alt="gif here" />
					</span>
				</ToolTip>
				<Logo animation={pause === 'pause'} vinyl />
			</LogoWrapper>
			<MusicContainer>
				<MusicWrapper>
					<NavContainer>
						<NavItem active={status === 'house'} onClick={() => handleClick('showA')}>
							House
						</NavItem>
						<NavItem active={status === 'classic'} onClick={() => handleClick('showB')}>
							Classics
						</NavItem>
						<NavItem active={status === 'party'} onClick={() => handleClick('showC')}>
							Party
						</NavItem>
						<NavItem active={status === 'hip hop'} onClick={() => handleClick('showD')}>
							Hip Hop
						</NavItem>
					</NavContainer>
					<MusicCollection
						covers={covers.items?.filter((coll) => coll.genre === status)}
						onPlay={pause}
						itemPlay={playing}
						play={handlePlay}
						pause={handlePause}
						status={status}
						active={status}
					/>
				</MusicWrapper>
			</MusicContainer>
			{!isMobile ? (
				<PlayerContainer $show={open}>
					{covers.items?.map((item) =>
						playing.includes(item.id) ? (
							<Fragment key={item.id}>
								<Image
									src={
										`https://pb.djsicrip.com/api/files/covers/${item.id}/${item.cover}` ??
										'https://pb.djsicrip.com/api/files/xaxun5rjt3q4ncb/26w1c1e32p6nyz9/crip_beatz_KLML7YYccC.jpg'
									}
									alt="Cover"
									placeholder="blur"
									sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw,18vw"
								/>
							</Fragment>
						) : null
					)}
					<PlayerWrapper>
						<AudioPlayer
							onPause={handleOnPause}
							onPlay={handleOnPlay}
							ref={playerRef}
							src={playing}
							volume={0.5}
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
				<PlayerContainer $show={open}>
					<ImgContainer ref={songRef}>
						{covers.items?.map((item) =>
							playing.includes(item.id) ? (
								<Fragment key={item.id}>
									<Image
										src={
											`https://pb.djsicrip.com/api/files/covers/${item.id}/${item.cover}` ??
											'https://pb.djsicrip.com/api/files/xaxun5rjt3q4ncb/26w1c1e32p6nyz9/crip_beatz_KLML7YYccC.jpg'
										}
										alt="Cover"
										placeholder="blur"
										sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw,18vw"
									/>
									<TitleWrapper>
										<Artist>{item.artist}</Artist>
										<SongTitle animate={animateTitle}>
											<span ref={titleRef}>{item.title}</span>
										</SongTitle>
									</TitleWrapper>
								</Fragment>
							) : null
						)}
					</ImgContainer>
					<PlayerWrapper>
						<AudioPlayer
							onPause={handleOnPause}
							onPlay={handleOnPlay}
							ref={playerRef}
							src={playing}
							volume={0.5}
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
		</Fragment>
	);
}