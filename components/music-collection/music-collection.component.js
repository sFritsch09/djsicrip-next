import React from 'react';
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

const MusicAnimation = {
	initial: {
		x: 80,
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
export const items = {
	active: [
		{
			key: 1,
			column: 1,
			row: 1,
			title: 'Tracey In My Room (Lazy Dog Bootleg Dub Mix)',
			artist: 'EBTG vs. Soul Vision',
			image: '/images/cover/Cover-TraceyInMyRoom.jpg',
			genre: 'House',
			bpm: '125',
			audio: 'audioA1',
		},
		{
			key: 2,
			column: 2,
			row: 1,
			title: 'I Feel The Love (Birdee Remix)',
			artist: 'Body Heat Gang Band',
			image: '/images/cover/Cover-IFeelTheLove.jpeg',
			genre: 'Disco',
			bpm: '122',
			audio: 'audioA2',
		},
		{
			key: 3,
			column: 3,
			row: 1,
			title: 'Under constructions 🚧',
			artist: 'EBTG vs. Soul Vision',
			genre: 'House',
			bpm: '125',
		},
		{
			key: 4,
			column: 4,
			row: 1,
			title: 'Under constructions 🚧',
			artist: 'EBTG vs. Soul Vision',
			genre: 'House',
			bpm: '125',
		},
		{
			key: 5,
			column: 1,
			row: 2,
			title: 'Under constructions 🚧',
			artist: 'EBTG vs. Soul Vision',
			genre: 'House',
			bpm: '125',
		},
		{
			key: 6,
			column: 2,
			row: 2,
			title: 'Under constructions 🚧',
			artist: 'EBTG vs. Soul Vision',
			genre: 'House',
			bpm: '125',
		},
		{
			key: 7,
			column: 3,
			row: 2,
			title: 'Under constructions 🚧',
			artist: 'EBTG vs. Soul Vision',
			genre: 'House',
			bpm: '125',
		},
		{
			key: 8,
			column: 4,
			row: 2,
			title: 'Under constructions 🚧',
			artist: 'EBTG vs. Soul Vision',
			genre: 'House',
			bpm: '125',
		},
	],
	activeB: [
		{
			key: 9,
			column: 1,
			row: 1,
			title: 'Tracey In My Room (Lazy Dog Bootleg Dub Mix)',
			artist: 'EBTG vs. Soul Vision',
			image: '/images/cover/Cover-TraceyInMyRoom.jpg',
			genre: 'House',
			bpm: '125',
			audio: 'audioA1',
		},
	],
	activeC: [
		{
			key: 10,
			column: 1,
			row: 1,
			title: 'Tracey In My Room (Lazy Dog Bootleg Dub Mix)',
			artist: 'EBTG vs. Soul Vision',
			image: '/images/cover/Cover-TraceyInMyRoom.jpg',
			genre: 'House',
			bpm: '125',
			audio: 'audioA1',
		},
	],
	activeD: [
		{
			key: 11,
			column: 1,
			row: 1,
			title: 'Tracey In My Room (Lazy Dog Bootleg Dub Mix)',
			artist: 'EBTG vs. Soul Vision',
			image: '/images/cover/Cover-TraceyInMyRoom.jpg',
			genre: 'House',
			bpm: '125',
			audio: 'audioA1',
		},
	],
};

const Collection = ({ status, onPlay, play, pause, itemPlay }) => {
	const setAudioSrc = useMusicUpdate();

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
	return (
		<GridContainer>
			<AnimatePresence mode="wait">
				{coll.map((item) => (
					<ItemA
						key={item.key}
						layout
						variants={MusicAnimation}
						initial={'initial'}
						animate={'animate'}
						column={item.column}
						row={item.row}
					>
						{
							// NOTE Cover
						}
						<CoverWrapper onClick={() => setAudioSrc(item.audio)}>
							<div className="cover">
								<Image
									src={item.image ?? '/Crip-Beatz.jpg'}
									alt="Cover"
									fill
									// placeholder="blur"
									sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw,18vw"
								/>
							</div>
							{onPlay === 'pause' && itemPlay === item.audio ? (
								<PlayWrapper onClick={play}>
									<CoverPause />
								</PlayWrapper>
							) : onPlay === 'play' && itemPlay === item.audio ? (
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

const MusicCollection = ({ onPlay, play, pause, itemPlay, active }) => {
	return (
		<React.Fragment>
			<Collection status={active} onPlay={onPlay} play={play} pause={pause} itemPlay={itemPlay} />
		</React.Fragment>
	);
};

export default MusicCollection;
