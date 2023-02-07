import { Container } from '../../styles/music.styles';
import { SoundCloud } from './music.component';

export default function Music() {
	return (
		<div className="main">
			<Container>
				<SoundCloud />
			</Container>
		</div>
	);
}
