import { useRouter } from 'next/router';
import { CustomButton, FourOhFourContainer } from '../styles/globalStyles';
import Lottie from 'react-lottie';

export default function FourOhFour() {
	const router = useRouter();
	const defaultOptions = {
		loop: true,
		autoplay: true,
		path: 'https://assets10.lottiefiles.com/packages/lf20_GIyuXJ.json',
	};
	const handleGoBack = () => {
		router.push('/');
	};
	return (
		<FourOhFourContainer>
			<h1 style={{ marginTop: '2em' }}>Page Not Found</h1>
			<Lottie options={defaultOptions} height={200} width={200} />
			<div className="dark" style={{ marginTop: '2em' }}>
				<CustomButton onClick={handleGoBack}>Go back home</CustomButton>
			</div>
		</FourOhFourContainer>
	);
}
