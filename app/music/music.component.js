'use client';
import ReactSoundCloud from 'react-player';
import { SoundCloudContainer } from './music.styles';

export const SoundCloud = () => {
	const Bodyswerve = 'https://soundcloud.com/sebastian-fitch/want-to-bodyswerve-crip-beatz-edit';
	const BreakNight = 'https://soundcloud.com/sebastian-fitch/break-night-oh-oh-crip-beatz-edit';
	const Kickerz = 'https://soundcloud.com/sebastian-fitch/kickerz-crip-beatz-extended-tv-theme';
	const FlowSong = 'https://soundcloud.com/sebastian-fitch/flow-6th-september';
	const ModusSong = 'https://soundcloud.com/sebastian-fitch/modus';
	const WellaSong = 'https://soundcloud.com/sebastian-fitch/si-crip-wella';
	const HighriseSong = 'https://soundcloud.com/sebastian-fitch/si-crip-highrise-fever';
	const MixE3 =
		'https://soundcloud.com/lectrofeld/lectrofeld-radio-pussy-power-with-dj-si-crip-episode-3';
	const MixE2 =
		'https://soundcloud.com/lectrofeld/lectrofeld-radio-munchfeld-with-dj-si-crip-episode-2';

	return (
		<SoundCloudContainer>
			<label>My Edits/Remix:</label>
			<div>
				<ReactSoundCloud url={Bodyswerve} />
			</div>
			<div>
				<ReactSoundCloud url={Kickerz} />
			</div>
			<div>
				<ReactSoundCloud url={BreakNight} />
			</div>
			<label>My Songs:</label>
			<div>
				<ReactSoundCloud url={ModusSong} />
			</div>
			<div>
				<ReactSoundCloud url={HighriseSong} />
			</div>
			<div>
				<ReactSoundCloud url={WellaSong} />
			</div>
			<div>
				<ReactSoundCloud url={FlowSong} />
			</div>
			<label>My Mixtapes:</label>
			<div>
				<ReactSoundCloud url={MixE3} />
			</div>
			<div>
				<ReactSoundCloud url={MixE2} />
			</div>
		</SoundCloudContainer>
	);
};
