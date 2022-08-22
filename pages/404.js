import Link from 'next/link';
import { FourOhFourContainer } from '../styles/globalStyles';
import Button from '@nextui-org/react/Button';
import Lottie from 'react-lottie';

export default function FourOhFour() {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		path: 'https://assets10.lottiefiles.com/packages/lf20_GIyuXJ.json',
	};
	return (
		<FourOhFourContainer>
			<h1 style={{ marginTop: '2em' }}>Page Not Found</h1>
			<Lottie options={defaultOptions} height={200} width={200} />
			<div className="dark" style={{ marginTop: '2em' }}>
				<Link href="/">
					<Button ghost color="error" css={{ zIndex: '1' }}>
						Go back home
					</Button>
				</Link>
			</div>
		</FourOhFourContainer>
	);
}
