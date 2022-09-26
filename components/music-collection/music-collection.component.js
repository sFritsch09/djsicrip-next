import React, { useState } from 'react';
import { useMusicUpdate } from '../hooks/MusicContext';
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

export const items = {
	active: [
		{
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
			column: 3,
			row: 1,
			title: 'Under constructions 🚧',
			artist: 'EBTG vs. Soul Vision',
			image: 'Cover',
			genre: 'House',
			bpm: '125',
		},
		{
			column: 4,
			row: 1,
			title: 'Under constructions 🚧',
			artist: 'EBTG vs. Soul Vision',
			image: 'Cover',
			genre: 'House',
			bpm: '125',
		},
		{
			column: 1,
			row: 2,
			title: 'Under constructions 🚧',
			artist: 'EBTG vs. Soul Vision',
			image: 'Cover',
			genre: 'House',
			bpm: '125',
		},
		{
			column: 2,
			row: 2,
			title: 'Under constructions 🚧',
			artist: 'EBTG vs. Soul Vision',
			image: 'Cover',
			genre: 'House',
			bpm: '125',
		},
		{
			column: 3,
			row: 2,
			title: 'Under constructions 🚧',
			artist: 'EBTG vs. Soul Vision',
			image: 'Cover',
			genre: 'House',
			bpm: '125',
		},
		{
			column: 4,
			row: 2,
			title: 'Under constructions 🚧',
			artist: 'EBTG vs. Soul Vision',
			image: 'Cover',
			genre: 'House',
			bpm: '125',
		},
	],
	activeB: [
		{
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
			{coll.map((item, index) => (
				<ItemA key={index} column={item.column} row={item.row}>
					{
						// NOTE Cover
					}
					<CoverWrapper onClick={() => setAudioSrc(item.audio)} cover={item.image}>
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
