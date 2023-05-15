'use client';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CustomImage, Angle, ImageWrapper, ImageText } from '../styles/home.styles';
import { useDarkMode } from '../components/hooks/DarkModeContext';
import { Fragment } from 'react';

export default function HeroSection() {
	const [isDarkMode, _] = useDarkMode();

	const imageOptions = [
		{
			src: isDarkMode
				? 'https://pb.techchase.de/api/files/images/yi5rdkjtnhxxz0g/dark_turntables_brFb5AUtGp.webp'
				: 'https://pb.techchase.de/api/files/images/58lq84mvfnf2fir/light_music_fair_nkiStOlX44.webp',
			alt: 'turntables',
			blurDataURL: isDarkMode
				? 'https://pb.techchase.de/api/files/images/yi5rdkjtnhxxz0g/dark_turntables_brFb5AUtGp.webp?thumb=100x50f'
				: 'https://pb.techchase.de/api/files/images/58lq84mvfnf2fir/light_music_fair_nkiStOlX44.webp?thumb=100x50f',
			pos: isDarkMode ? '50% 40%' : '50% 90%',
			text: 'DJ in Mainz 🎧',
		},
		{
			src: isDarkMode
				? 'https://pb.techchase.de/api/files/xaxun5rjt3q4ncb/almkbmbofl6dd7x/extrablatt_zTO35ZvB4L.jpeg'
				: 'https://pb.techchase.de/api/files/xaxun5rjt3q4ncb/almkbmbofl6dd7x/extrablatt_zTO35ZvB4L.jpeg',
			alt: 'turntables',
			blurDataURL: isDarkMode
				? 'https://pb.techchase.de/api/files/xaxun5rjt3q4ncb/almkbmbofl6dd7x/extrablatt_zTO35ZvB4L.jpeg?thumb=100x50f'
				: 'https://pb.techchase.de/api/files/xaxun5rjt3q4ncb/almkbmbofl6dd7x/extrablatt_zTO35ZvB4L.jpeg?thumb=100x50f',
			pos: isDarkMode ? '50% 0%' : '50% 0%',
			text: 'Firmenfeier 🥂',
		},
		{
			src: isDarkMode
				? 'https://pb.techchase.de/api/files/images/j0u76itog11eapd/dark_djset_SIuX1An8YA.webp'
				: 'https://pb.techchase.de/api/files/images/y3t8hycdzky7gve/light_outside_xM9J2F2Wsy.webp',
			alt: 'setup',
			blurDataURL: isDarkMode
				? 'https://pb.techchase.de/api/files/images/j0u76itog11eapd/dark_djset_SIuX1An8YA.webp?thumb=100x50f'
				: 'https://pb.techchase.de/api/files/images/y3t8hycdzky7gve/light_outside_xM9J2F2Wsy.webp?thumb=100x50f',
			pos: isDarkMode ? '50% 70%' : '50% 50%',
			text: 'Hochzeiten 💒',
		},
		{
			src: isDarkMode
				? 'https://pb.techchase.de/api/files/images/swrkh0jkq71850u/dark_logo_old_pLokmp0N4y.jpg'
				: 'https://pb.techchase.de/api/files/images/9xhfn7yuzvhbvrq/light_fritsch09_ccT8SM8nZv.webp',
			alt: 'setup',
			blurDataURL: isDarkMode
				? 'https://pb.techchase.de/api/files/images/swrkh0jkq71850u/dark_logo_old_pLokmp0N4y.jpg?thumb=100x50f'
				: 'https://pb.techchase.de/api/files/images/9xhfn7yuzvhbvrq/light_fritsch09_ccT8SM8nZv.webp?thumb=100x50f',
			pos: isDarkMode ? '10% 20%' : '50% 60%',
			text: 'Geburtstag 🎉',
		},
	];
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
		<Fragment>
			<Slider {...settings}>
				{imageOptions.map((image, index) => (
					<ImageWrapper key={index}>
						<CustomImage
							alt={image.alt}
							src={image.src}
							fill
							placeholder="blur"
							blurDataURL={image.blurDataURL}
							style={{ objectFit: 'cover', objectPosition: image.pos }}
						/>
						<ImageText>
							<span>{image.text}</span>
						</ImageText>
					</ImageWrapper>
				))}
			</Slider>
			<Angle />
		</Fragment>
	);
}
