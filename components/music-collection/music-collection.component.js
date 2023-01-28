'use client';
import { Fragment, useState, useEffect } from 'react';
import { useMusicUpdate } from '../hooks/MusicContext';
import Image from 'next/image';
import {
	CoverPause,
	CoverPlay,
	CoverWrapper,
	GridContainer,
	ItemA,
	SubTitle,
	SubTitleWrapper,
	TitleWrapper,
	TrackTitle,
	PlayWrapper,
	ArtistTitle,
} from './music-collection.styles';
import { AnimatePresence } from 'framer-motion';

const Collection = ({ onPlay, play, pause, itemPlay, covers }) => {
	const [isMobile, setIsMobile] = useState(false);
	const windowDimension = () => {
		if (window.innerWidth <= 980) {
			setIsMobile(true);
		} else {
			setIsMobile(false);
		}
	};
	// is Mobile
	useEffect(() => {
		windowDimension();
	}, []);
	const MusicAnimation = {
		initial: {
			x: isMobile ? 30 : 100,
			opacity: 0,
		},
		animate: {
			x: 0,
			opacity: 1,
			transition: {
				ease: 'backInOut',
				duration: 0.65,
			},
		},
	};
	const setAudioSrc = useMusicUpdate();
	return (
		<GridContainer>
			<AnimatePresence mode="wait">
				{covers?.map((item) => (
					<ItemA
						key={item.id}
						layout
						variants={MusicAnimation}
						initial={'initial'}
						animate={'animate'}
					>
						{
							// NOTE Cover
						}
						<CoverWrapper
							onClick={() =>
								setAudioSrc(`https://pb.djsicrip.com/api/files/covers/${item.id}/${item.track}`)
							}
						>
							<div className="cover">
								<Image
									src={
										`https://pb.djsicrip.com/api/files/covers/${item.id}/${item.cover}` ??
										'https://pb.djsicrip.com/api/files/xaxun5rjt3q4ncb/26w1c1e32p6nyz9/crip_beatz_KLML7YYccC.jpg'
									}
									alt="Cover"
									fill
									// placeholder="blur"
									sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw,18vw"
								/>
							</div>
							{onPlay === 'pause' && itemPlay.includes(item.id) ? (
								<PlayWrapper onClick={play}>
									<CoverPause />
								</PlayWrapper>
							) : onPlay === 'play' && itemPlay.includes(item.id) ? (
								<PlayWrapper onClick={pause}>
									<CoverPlay />
								</PlayWrapper>
							) : (
								<PlayWrapper onClick={play}>
									<CoverPlay />
								</PlayWrapper>
							)}
						</CoverWrapper>
						{
							// NOTE Track title
						}
						<TitleWrapper>
							<TrackTitle>{item.title}</TrackTitle>
						</TitleWrapper>
						{
							// NOTE Genre, BPM
						}
						<ArtistTitle>{item.artist}</ArtistTitle>
						<SubTitleWrapper>
							<SubTitle>{item.genre}</SubTitle>
							<SubTitle>{item.bpm}</SubTitle>
						</SubTitleWrapper>
					</ItemA>
				))}
			</AnimatePresence>
		</GridContainer>
	);
};

const MusicCollection = ({ onPlay, play, pause, itemPlay, covers }) => {
	return (
		<Fragment>
			<Collection covers={covers} onPlay={onPlay} play={play} pause={pause} itemPlay={itemPlay} />
		</Fragment>
	);
};

export default MusicCollection;
