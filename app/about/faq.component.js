'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { FaqWrapper, ImageWrapper, Single } from '../../styles/about.styles';
import { useEffect, useState } from 'react';
import AboutCollapse from '../_components/collapse/about.collapse';

export default function FAQ() {
	// FAQ
	const items = [
		{
			question: 'Wie lange legst du schon auf?',
			answer: 'Ich lege schon seit mehr als 10 Jahren auf.',
		},
		{
			question: 'Produzierst du auch Musik?',
			answer:
				'Ja, ich bearbeite Songs damit sie besser für Übergänge passen, produziere komplette Songs oder Remix. All das findest du hier:',
			linkText: 'Music',
			link: '/music',
		},
		{
			question: 'Welche Musik spielst du am liebsten?',
			answer:
				'Ich spiele am liebsten meine Ladies Playlist, wo alle mit singen/tanzen und ich die verrückte Seite meines Publiukums herauskitzle.',
		},
		{
			question: 'Wie kann ich dich am Besten buchen?',
			answer: 'Unter folgendem Link findest du die frei verfügbaren Termine:',
			linkText: 'Book Now',
			link: '/booking',
		},
		{
			question: 'Wie kamst du zum Auflegen?',
			answer:
				'Zum aller ersten Mal legte ich durch mein Bruder auf Uni Partys auf und lernte die ersten Schritte für saubere Übergänge mit einem kostenlosen Programm (Virtual DJ).',
		},
		{
			question: 'Was für ein DJ bist du?',
			answer:
				'Ich bin Hip Hop DJ und lege daher mit Plattenspieler auf. Für ein kreatives Mixing kann natürlich auch House, Pop, Rock, etc. gespielt werden.',
		},
		{
			question: 'Was kostet mich ein Auftritt für einen Geburtstag?',
			answer: 'Die Preise für einen Geburtstag oder anderen Veranstaltungen findest du hier:',
			linkText: 'Preise',
			link: '/price',
		},
		{
			question: 'Kann ich mir auch eine Soundanlage mieten ohne DJ?',
			answer: 'Klar, das Equipment findest du hier:',
			linkText: 'Equipment',
			link: '/equipment',
		},
		{
			question: 'Kannst du mir auch solch eine coole Webseite entwerfen?',
			answer:
				'Meine Webseite habe ich selbst entworfen Frontend + Backend und für Anfragen findest du hier meine Kontaktdaten:',
			linkText: 'Kontakt',
			link: '/about-dev',
		},
	];

	// Framer
	const { scrollYProgress } = useScroll();
	const position = useTransform(scrollYProgress, [0, 1], [10, 80]);
	const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
	const [pos, setPos] = useState('50% 10%');
	const [scaler, setScaler] = useState(1);
	useEffect(() => {
		return position.onChange((latest) => {
			setPos(`50% ${latest}%`);
		});
	}, [position]);
	useEffect(() => {
		return scale.onChange((latest) => {
			setScaler(latest);
		});
	}, [scale]);
	const transition = { duration: 0.6, ease: 'backOut' };

	const firstName = {
		initial: {
			y: 0,
		},
		animate: {
			y: 0,
			transition: {
				delayChildren: 0.6,
				staggerChildren: 0.06,
				staggerDirection: -1,
			},
		},
	};

	const lastName = {
		initial: {
			y: 0,
		},
		animate: {
			y: 0,
			transition: {
				delayChildren: 0.6,
				staggerChildren: 0.06,
				staggerDirection: 1,
			},
		},
	};

	const letter = {
		initial: {
			y: 400,
			opacity: 0,
		},
		animate: {
			y: 0,
			opacity: 1,
			transition: { duration: 0.9, ...transition },
		},
	};
	const image = {
		initial: {
			y: -120,
			opacity: 0,
		},
		animate: {
			y: 0,
			opacity: 1,
			transition: {
				ease: 'backInOut',
				duration: 0.95,
			},
		},
	};
	return (
		<div>
			<Single initial="initial" animate="animate" exit="exit">
				<div className="container">
					<div className="top-row">
						<div className="top">
							<motion.div className="model">
								<motion.span className="first" variants={firstName}>
									<motion.span animate={{ y: position, opacity: 1 }} variants={letter}>
										S
									</motion.span>
									<motion.span variants={letter}>e</motion.span>
									<motion.span variants={letter}>b</motion.span>
									<motion.span variants={letter}>a</motion.span>
									<motion.span variants={letter}>s</motion.span>
									<motion.span variants={letter}>t</motion.span>
									<motion.span variants={letter}>i</motion.span>
									<motion.span variants={letter}>a</motion.span>
									<motion.span variants={letter}>n</motion.span>
								</motion.span>
								<motion.span className="last" variants={lastName}>
									<motion.span variants={letter}>F</motion.span>
									<motion.span variants={letter}>r</motion.span>
									<motion.span variants={letter}>i</motion.span>
									<motion.span variants={letter}>t</motion.span>
									<motion.span variants={letter}>s</motion.span>
									<motion.span variants={letter}>c</motion.span>
									<motion.span variants={letter}>h</motion.span>
								</motion.span>
							</motion.div>
						</div>
					</div>
				</div>
			</Single>
			<ImageWrapper variants={image} initial="initial" animate="animate">
				<Image
					blurDataURL="data:image/jpeg;base64,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"
					src="https://pb.techchase.de/api/files/xaxun5rjt3q4ncb/4cemge11tngg9b2/profile_green_cOhqkENIBR.jpg"
					alt="profile"
					fill
					placeholder="blur"
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					style={{
						objectFit: 'cover',
						objectPosition: pos,
						scale: scaler,
					}}
					priority
				/>
			</ImageWrapper>
			<FaqWrapper>
				<div className="faq">
					<AboutCollapse items={items} />
				</div>
			</FaqWrapper>
		</div>
	);
}
