import { motion } from 'framer-motion';
import Image from 'next/image';
import { Collapse, Text, Link } from '@nextui-org/react';
import { FaqWrapper, ImageWrapper, Single } from './about.styles';

export default function About() {
	// FAQ

	const items = [
		{
			question: 'Wie lange legst du schon auf?',
			answer: 'Ich lege schon seit 10 Jahren auf.',
		},
		{
			question: 'Welche Musik hörst du am liebsten?',
			answer: 'Ich höre gern Soulful House und Disco House. Was ich genau höre findest du hier:',
			linkText: 'Music',
			link: '/music',
		},
		{
			question: 'Welche Musik spielst du am liebsten?',
			answer:
				'Ich spiele am liebsten meine Ladies Playlist, wo alle mit singen/tanzen und ich die verrückte Seite meines Pupliukums herauskitzle.',
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
			link: '#',
		},
	];

	// Framer
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
									<motion.span variants={letter}>S</motion.span>
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
					src="/images/profile-green.jpg"
					alt="profile"
					width="100%"
					height="100%"
					layout="fill"
					objectFit="cover"
					objectPosition="50% 10%"
				/>
			</ImageWrapper>
			<FaqWrapper>
				<div className="faq">
					<Collapse.Group bordered>
						{items.map((item, index) => (
							<Collapse key={index} title={item.question}>
								<Text>{item.answer} </Text>
								<Link color="secondary" href={item.link}>
									{item.linkText}
								</Link>
							</Collapse>
						))}
					</Collapse.Group>
				</div>
			</FaqWrapper>
		</div>
	);
}
