import React, { useState } from 'react';
import { useMusicUpdate } from '../hooks/MusicContext';
import CoverB1 from '../../images/cover/Cover-IFeelTheLove.jpeg';
import CoverA1 from '../../images/cover/Cover-TraceyInMyRoom.jpg';
import {
	CoverPause,
	CoverPlay,
	CoverWrapper,
	GridContainer,
	ItemA,
	NavContainer,
	NavItem,
	SubTitle,
	SubTitleWrapper,
	TitleWrapper,
	TrackTitle,
	PlayWrapper,
	ArtistTitle,
} from './music-collection.styles';

export const items = [
	{
		column: 1,
		row: 1,
		title: 'Tracey In My Room (Lazy Dog Bootleg Dub Mix)',
		artist: 'EBTG vs. Soul Vision',
		image: `${CoverA1}`,
		genre: 'House',
		bpm: '125',
		audio: 'audioA1',
	},
	{
		column: 2,
		row: 1,
		title: 'I Feel The Love (Birdee Remix)',
		artist: 'Body Heat Gang Band',
		image: `${CoverB1}`,
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
];

const Collection = ({ active, bgColor, onPlay, play, pause, itemPlay }) => {
	const setAudioSrc = useMusicUpdate();

	return (
		<GridContainer>
			{active === 'active' &&
				items.map((item, index) => (
					<ItemA key={index} bgColor={bgColor} column={item.column} row={item.row}>
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

const MusicCollection = ({ onPlay, play, pause, itemPlay }) => {
	const [state, setState] = useState({
		status: 'active',
		bgColor: 'black',
	});

	const { status, bgColor } = state;

	const handleClick = (name) => {
		switch (name) {
			case 'showA':
				setState({ status: 'active', bgColor: 'black' });
				break;
			case 'showB':
				setState({ status: 'activeB', bgColor: 'darkgoldenrod' });
				break;
			case 'showC':
				setState({ status: 'activeC', bgColor: 'darkgreen' });
				break;
			case 'showD':
				setState({ status: 'activeD', bgColor: 'darkred' });
				break;
			default:
				setState({ status: 'active' });
		}
	};

	return (
		<React.Fragment>
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
			<Collection
				active={status}
				bgColor={bgColor}
				onPlay={onPlay}
				play={play}
				pause={pause}
				itemPlay={itemPlay}
			/>
		</React.Fragment>
	);
};

export default MusicCollection;
