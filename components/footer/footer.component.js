import Link from 'next/link';
import React from 'react';
import {
	AboutWrapper,
	FooterContainer,
	FooterSection,
	FooterWrapper,
	SocialIconWrapper,
} from './footer.styles';
import {
	RiFacebookBoxFill,
	RiInstagramFill,
	RiLinkedinBoxFill,
	RiYoutubeFill,
	RiSoundcloudFill,
	RiSpotifyFill,
	RiTwitterFill,
} from 'react-icons/ri';

export default function Footer() {
	return (
		<FooterContainer>
			<FooterWrapper>
				<FooterSection>
					<h3 className="header">Kontakt</h3>
					<div className="content">sfritsch09@gmail.com</div>
					<div className="content">017632694016</div>
					<Link href="about">
						<div className="content">FAQ</div>
					</Link>
					<Link href="https://imginn.com/p/BfQcdSOFS5-/" target="_blank">
						<div className="content">Videos</div>
					</Link>
				</FooterSection>
				<FooterSection>
					<h3 className="header">Social</h3>
					<SocialIconWrapper>
						<Link href="https://www.facebook.com/djsicrip" target="_blank">
							<li>
								<RiFacebookBoxFill />
							</li>
						</Link>
						<Link href="https://www.instagram.com/djsicrip2" target="_blank">
							<li>
								<RiInstagramFill />
							</li>
						</Link>
						<Link href="https://www.linkedin.com/in/sebastian-fritsch-3676831bb/" target="_blank">
							<li>
								<RiLinkedinBoxFill />
							</li>
						</Link>
						<Link href="https://www.youtube.com/c/SiCrip09/featured" target="_blank">
							<li>
								<RiYoutubeFill />
							</li>
						</Link>
						<Link href="https://soundcloud.com/sebastian-fitch" target="_blank">
							<li>
								<RiSoundcloudFill />
							</li>
						</Link>
						<Link
							href="https://open.spotify.com/artist/1Givl5CVSswZ3r5PKiqUKh?si=MWmuCfLsTZK8_rovu07NLg"
							target="_blank"
						>
							<li>
								<RiSpotifyFill />
							</li>
						</Link>
						<Link href="https://twitter.com/DjSiCrip" target="_blank">
							<li>
								<RiTwitterFill />
							</li>
						</Link>
					</SocialIconWrapper>
				</FooterSection>
				<FooterSection>
					<h3 className="header">Rechtliches</h3>
					<Link href="/privacy">
						<div className="content">Datenschutz & Impressum</div>
					</Link>
				</FooterSection>
			</FooterWrapper>
			<Link href="about-dev">
				<AboutWrapper>Created By Sebastian Fritsch 💙💛</AboutWrapper>
			</Link>
		</FooterContainer>
	);
}
