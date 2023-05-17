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

import { RiMailFill, RiLinkedinBoxFill, RiGithubFill } from 'react-icons/ri';
import Image from 'next/image';
import Link from 'next/link';

export default function Dev() {
	const socialProfile = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: 'DJ Si Crip - Sebastian Fritsch',
		url: 'https://djsicrip.com',
		sameAs: [
			'https://www.instagram.com/djsicrip2',
			'https://www.linkedin.com/in/sebastian-fritsch-3676831bb',
			'https://github.com/sFritsch09',
		],
	};
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
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(socialProfile) }}
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
							blurDataURL="data:image/jpeg;base64,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"
							src="https://pb.techchase.de/api/files/xaxun5rjt3q4ncb/4qh90wbu0s351fe/me03_NLN4dW24Fk.jpeg"
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
