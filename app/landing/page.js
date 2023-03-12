import Image from 'next/image';
import { ImageWrapper, LandingContainer } from './landing.styles';

export default function Landing() {
	return (
		<div className="main">
			<LandingContainer>
				<span className="header">Successfully Booked!</span>
				<ImageWrapper>
					<Image
						src="https://pb.djsicrip.com/api/files/xaxun5rjt3q4ncb/we5mquac053349w/giphy_S6NUckttrp.gif"
						fill
						alt="gif"
					/>
				</ImageWrapper>
			</LandingContainer>
		</div>
	);
}
