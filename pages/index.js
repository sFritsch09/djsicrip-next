import Head from 'next/head';
import { Logo, MusicCollection } from '../components';
import { CustomButton, LogoWrapper } from '../styles/globalStyles';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CustomImage, MusicContainer, MusicWrapper } from './home.styles';

export default function Home() {
	const settings = {
		dots: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		speed: 1000,
		autoplaySpeed: 6000,
		easing: 'easeOutElastic',
		arrows: false,
		pauseOnHover: true,
	};
	return (
		<div>
			<Head>
				<title>DJ Si Crip</title>
				<meta name="description" content="DJ Si Crip - Never trust a DJ who can't dance!" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Slider {...settings}>
				<div>
					<CustomImage
						alt="First Pic"
						src={'https://hausboot.fra1.digitaloceanspaces.com/hompage-blau.jpg'}
						objectFit="cover"
					/>
				</div>
				<div>
					<CustomImage
						alt="First Pic"
						src={'https://hausboot.fra1.digitaloceanspaces.com/View-river2.jpg'}
						objectFit="cover"
					/>
				</div>
				<div>
					<CustomImage
						alt="First Pic"
						src={'https://hausboot.fra1.digitaloceanspaces.com/View-pond.jpg'}
						objectFit="cover"
					/>
				</div>
				<div>
					<CustomImage
						alt="First Pic"
						src={'https://hausboot.fra1.digitaloceanspaces.com/View-sluice.jpg'}
						objectFit="cover"
					/>
				</div>
			</Slider>
			<LogoWrapper>
				<div>
					<CustomButton>Buchen</CustomButton>
				</div>
				<Logo />
			</LogoWrapper>
			<MusicContainer>
				<MusicWrapper>
					<MusicCollection
					// onPlay={pause}
					// itemPlay={onPlaying}
					// play={handlePlay}
					// pause={handlePause}
					/>
				</MusicWrapper>
			</MusicContainer>
		</div>
	);
}
