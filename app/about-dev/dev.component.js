'use client';
import {
	AboutContact,
	AboutContainer,
	AboutHeader,
	AboutImage,
	AboutImageWrapper,
	ReactLogo,
	StackChild,
	StackHeader,
	StackRow,
	AboutContactHeader,
} from '../../styles/about-dev.styles';
import styledLogo from '../../public/images/techstack/styledComponents-logo.png';
import nextUiLogo from '../../public/images/techstack/nextui.png';
import framerLogo from '../../public/images/techstack/framerMotion-logo.png';
import nodeLogo from '../../public/images/techstack/node-logo.webp';
import expressLogo from '../../public/images/techstack/express-logo.png';
import googleLogo from '../../public/images/techstack/google-logo.png';
import nginxLogo from '../../public/images/techstack/nginx-logo.png';
import dockerLogo from '../../public/images/techstack/docker-logo.webp';
import githubLogo from '../../public/images/techstack/github.webp';
import kubernetesLogo from '../../public/images/techstack/Kubernetes.png';
import nextLogo from '../../public/images/techstack/Next-logo.png';
import digitaloceanLogo from '../../public/images/techstack/Digitalocean-logo.png';
import { SocialProfileJsonLd } from 'next-seo';

import { RiMailFill, RiLinkedinBoxFill, RiGithubFill } from 'react-icons/ri';
import Image from 'next/image';
import Link from 'next/link';

export default function Dev() {
	const parentVariant = {
		show: {
			transition: { staggerChildren: 0.3, delayChildrend: 0.2 },
		},
	};
	const childrenVariant = {
		initial: {
			y: -60,
			opacity: 0,
		},
		show: {
			y: 0,
			opacity: 1,
			transition: {
				ease: 'backInOut',
				duration: 0.95,
			},
		},
	};

	const techStack = {
		frontend: [
			{ title: 'NextJS', logo: nextLogo },
			{ title: 'Styled Components', logo: styledLogo },
			{ title: 'Next UI', logo: nextUiLogo },
			{ title: 'Framer Motion', logo: framerLogo },
		],
		backend: [
			{ title: 'Node.js', logo: nodeLogo },
			{ title: 'Express', logo: expressLogo },
			{ title: 'Google API', logo: googleLogo },
			{ title: 'Nginx', logo: nginxLogo },
		],
		ciCd: [
			{ title: 'Github Actions', logo: githubLogo },
			{ title: 'Docker', logo: dockerLogo },
			{ title: 'Kubernetes', logo: kubernetesLogo },
			{ title: 'DigitalOcean', logo: digitaloceanLogo },
		],
	};
	return (
		<div className="main">
			<SocialProfileJsonLd
				type="Person"
				name="DJ Si Crip - Sebastian Fritsch"
				url="https://djsicrip.com"
				sameAs={[
					'https://www.instagram.com/djsicrip2',
					'https://www.linkedin.com/in/sebastian-fritsch-3676831bb',
					'https://github.com/sFritsch09',
				]}
			/>
			<AboutContainer>
				<AboutHeader>
					<div className="box">
						<div className="title">
							<span className="block"></span>
							<h1>
								Sebastian Fritsch<span></span>
							</h1>
						</div>

						<div className="role">
							<div className="block"></div>
							<p>DevOps Engineer</p>
						</div>
					</div>
				</AboutHeader>
				<AboutImageWrapper>
					<AboutImage>
						<Image
							alt="me"
							fill
							style={{ objectFit: 'cover', objectPosition: '50% 20%' }}
							placeholder="blur"
							blurDataURL="https://pb.djsicrip.com/api/files/xaxun5rjt3q4ncb/4qh90wbu0s351fe/me03_NLN4dW24Fk.jpeg?thumb=100x50f"
							src="https://pb.djsicrip.com/api/files/xaxun5rjt3q4ncb/4qh90wbu0s351fe/me03_NLN4dW24Fk.jpeg"
							sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw,18vw"
						/>
					</AboutImage>
				</AboutImageWrapper>
				<StackHeader big>Tech Stack</StackHeader>
				<StackHeader>Frontend:</StackHeader>
				<StackRow border="true" whileInView="show" variants={parentVariant} initial="initial">
					{techStack.frontend.map((frontend) => (
						<StackChild variants={childrenVariant} key={frontend.title}>
							<ReactLogo>
								<Image
									alt={frontend.title}
									fill
									src={frontend.logo}
									style={{ objectFit: 'contain' }}
								/>
							</ReactLogo>
							{frontend.title}
						</StackChild>
					))}
				</StackRow>
				<StackHeader>Backend:</StackHeader>
				<StackRow border="true" whileInView="show" variants={parentVariant} initial="initial">
					{techStack.backend.map((backend) => (
						<StackChild variants={childrenVariant} key={backend.title}>
							<ReactLogo>
								<Image
									alt={backend.title}
									fill
									src={backend.logo}
									style={{ objectFit: 'contain' }}
								/>
							</ReactLogo>
							{backend.title}
						</StackChild>
					))}
				</StackRow>
				<StackHeader>CI/CD:</StackHeader>
				<StackRow border="true" whileInView="show" variants={parentVariant} initial="initial">
					{techStack.ciCd.map((ciCd) => (
						<StackChild variants={childrenVariant} key={ciCd.title}>
							<ReactLogo>
								<Image alt={ciCd.title} fill src={ciCd.logo} style={{ objectFit: 'contain' }} />
							</ReactLogo>
							{ciCd.title}
						</StackChild>
					))}
				</StackRow>
				<AboutContact>
					<AboutContactHeader>
						<h1>Kontakt</h1>
					</AboutContactHeader>
					<div>
						<div>
							<RiLinkedinBoxFill size="30" />
						</div>
						<div style={{ marginLeft: '1em' }}>
							<Link href="https://www.linkedin.com/in/sebastian-fritsch-3676831bb" target="_blank">
								Sebastian Fritsch
							</Link>
						</div>
					</div>
					<div>
						<div>
							<RiMailFill size="30" />
						</div>
						<div style={{ marginLeft: '1em' }}>sfritsch09@gmail.com</div>
					</div>
					<div>
						<div>
							<RiGithubFill size="30" />
						</div>
						<div style={{ marginLeft: '1em' }}>
							<Link href="https://github.com/sFritsch09" target="_blank">
								sfritsch09
							</Link>
						</div>
					</div>
				</AboutContact>
			</AboutContainer>
		</div>
	);
}
