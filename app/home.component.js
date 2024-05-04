'use client';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CustomImage, Angle, ImageWrapper, ImageText } from '../styles/home.styles';
import { Fragment } from 'react';
import { useTheme } from 'next-themes';

export default function HeroSection() {
	const { theme, setTheme } = useTheme();

	const imageOptions = [
		{
			src:
				theme === 'dark'
					? 'https://pb.techchase.de/api/files/baa8qw390ee8nzl/6n5tpjz4mqt7srt/extrablatt_z_to35_zv_b4_l_vQTKNxJwYJ.jpeg'
					: 'https://pb.techchase.de/api/files/baa8qw390ee8nzl/dntpu827plqxtpw/light_fritsch09_cc_t8_sm8n_zv_N1Ns1a7Kwo.webp',
			alt: 'turntables',
			blurDataURL:
				theme === 'dark'
					? 'https://pb.techchase.de/api/files/images/yi5rdkjtnhxxz0g/dark_turntables_brFb5AUtGp.webp?thumb=100x50f'
					: 'https://pb.techchase.de/api/files/baa8qw390ee8nzl/yout2dyopa2zpj4/light_music_fair_nki_st_ol_x44_Bn7leEvAnK.webp?token=',
			pos: theme === 'dark' ? '50% 40%' : '50% 90%',
			text: 'DJ in Mainz 🎧',
		},
		{
			src:
				theme === 'dark'
					? 'https://pb.techchase.de/api/files/baa8qw390ee8nzl/j0a9e4vaig7h2zg/dark_setup_ympyl_hcp_fa_cjjD2sPlJo.jpeg'
					: 'https://pb.techchase.de/api/files/baa8qw390ee8nzl/yout2dyopa2zpj4/light_music_fair_nki_st_ol_x44_Bn7leEvAnK.webp',
			alt: 'turntables',
			blurDataURL:
				theme === 'dark'
					? 'https://pb.techchase.de/api/files/xaxun5rjt3q4ncb/almkbmbofl6dd7x/extrablatt_zTO35ZvB4L.jpeg?thumb=100x50f'
					: 'https://pb.techchase.de/api/files/xaxun5rjt3q4ncb/almkbmbofl6dd7x/extrablatt_zTO35ZvB4L.jpeg?thumb=100x50f',
			pos: theme === 'dark' ? '50% 0%' : '50% 80%',
			text: 'Firmenfeier 🥂',
		},
		{
			src:
				theme === 'dark'
					? 'https://pb.techchase.de/api/files/baa8qw390ee8nzl/c6d0f655ce6o27n/dark_turntables_br_fb5_aut_gp_WuT9liurMr.webp'
					: 'https://pb.techchase.de/api/files/baa8qw390ee8nzl/wyotpeixe4z49pn/light_outside_x_m9_j2_f2_wsy_KB5Q2rn90k.webp',
			alt: 'setup',
			blurDataURL:
				theme === 'dark'
					? 'https://pb.techchase.de/api/files/images/j0u76itog11eapd/dark_djset_SIuX1An8YA.webp?thumb=100x50f'
					: 'https://pb.techchase.de/api/files/images/y3t8hycdzky7gve/light_outside_xM9J2F2Wsy.webp?thumb=100x50f',
			pos: theme === 'dark' ? '50% 70%' : '50% 50%',
			text: 'Hochzeiten 💒',
		},
		{
			src:
				theme === 'dark'
					? 'https://pb.techchase.de/api/files/baa8qw390ee8nzl/sfq487o49ymsv31/dark_logo_old_p_lokmp0_n4y_iIaIGFZT1c.jpg'
					: 'https://pb.techchase.de/api/files/baa8qw390ee8nzl/blhnbf9r9nzbse2/dark_djset_siu_x1_an8_ya_xRyz3NwAqR.webp',
			alt: 'setup',
			blurDataURL:
				theme === 'dark'
					? 'https://pb.techchase.de/api/files/baa8qw390ee8nzl/sfq487o49ymsv31/dark_logo_old_p_lokmp0_n4y_iIaIGFZT1c.jpg'
					: 'https://pb.techchase.de/api/files/images/9xhfn7yuzvhbvrq/light_fritsch09_ccT8SM8nZv.webp?thumb=100x50f',
			pos: theme === 'dark' ? '10% 20%' : '50% 60%',
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
