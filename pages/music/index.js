import dynamic from 'next/dynamic';
import { Container } from '../../styles/music.styles';

const SoundCloud = dynamic(
	() => {
		return import('../../components/music/music.component');
	},
	{ ssr: false }
);

export default function Music() {
	return (
		<div>
			<Container>
				<SoundCloud />
			</Container>
		</div>
	);
}
