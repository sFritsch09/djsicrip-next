import { Fragment } from 'react';
import HeroSection from './home.component';
import MusicSection from './musicSection.component';

export default function Home() {
	return (
		<Fragment>
			<HeroSection />
			<MusicSection />
		</Fragment>
	);
}
