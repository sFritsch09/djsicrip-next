import React, { useRef, useLayoutEffect } from 'react';
import { useScroll } from '../../components/hooks/ScrollContext';
import useScrollBlock from '../../components/hooks/useScrollBlock';

import Gallery from '../../components/gallery/gallery.component';
import { Container, Section, Section2, Section3, Spacer } from './equipment.styles';

const Equipment = () => {
	// images
	const Controller1 = '/images/equipment/KontrollS2Front.png';
	const Soundboks = '/images/equipment/SoundBoks.png';
	const Programm = '/images/equipment/TraktorProNew.png';
	const TraktorZ2 = '/images/equipment/TraktorZ2wide.png';
	const Turntable = '/images/equipment/Turntable.png';
	// ref
	const titleRef = useRef();
	const titleRef2 = useRef();
	const titleRef3 = useRef();
	const titleRef4 = useRef();
	const titleRef5 = useRef();

	const handleClick = () => {
		titleRef.current.scrollIntoView({ behavior: 'smooth' });
	};
	const handleClick2 = () => {
		titleRef2.current.scrollIntoView({ behavior: 'smooth' });
	};
	const handleClick3 = () => {
		titleRef3.current.scrollIntoView({ behavior: 'smooth' });
	};
	const handleClick4 = () => {
		titleRef4.current.scrollIntoView({ behavior: 'smooth' });
	};
	const handleClick5 = () => {
		titleRef5.current.scrollIntoView({ behavior: 'smooth' });
	};
	const hideScroll = useScroll();
	const [blockScroll, allowScroll] = useScrollBlock();
	//scrolltargets
	// const targetElement = document.querySelector('html');
	useLayoutEffect(() => {
		if (hideScroll) {
			// targetElement.classList.add('no-scroll');
			blockScroll();
		} else {
			// targetElement.classList.remove('no-scroll');
			allowScroll();
		}
	}, [hideScroll, allowScroll, blockScroll]); // Empty array ensures effect is only run on mount and unmount

	return (
		<React.Fragment>
			<Spacer />
			<Container>
				<Section ref={titleRef5}>
					<Gallery
						arrowClick={handleClick}
						imageClick={handleClick5}
						header="DJ Controller"
						desc="Traktor Kontrol S2 MK3 von Native Instruments"
						image={Controller1}
						title="Traktor Kontrol S2 MK3"
					/>
				</Section>
				<Section ref={titleRef}>
					<Gallery
						arrowClick={handleClick2}
						imageClick={handleClick}
						header="DJ Programm"
						desc="Traktor Pro 3 von Native Instruments für ein professionelles auflegen auf dem Macbook Pro"
						image={Programm}
						title="Traktor Pro 3"
					/>
				</Section>

				<Section2 ref={titleRef2}>
					<Gallery
						arrowClick={handleClick3}
						imageClick={handleClick2}
						header="Soundanlage"
						desc="Soundboks 3"
						image={Soundboks}
						title="Soundboks 3"
					/>
				</Section2>
				<Section3 ref={titleRef3}>
					<Gallery
						arrowClick={handleClick4}
						imageClick={handleClick3}
						header="DJ Controller"
						desc="Traktor Kontrol Z2 von Native Instruments"
						image={TraktorZ2}
						title="Kontrol Z2"
					/>
				</Section3>
				<Section ref={titleRef4}>
					<Gallery
						arrowClick={handleClick5}
						imageClick={handleClick4}
						header="Turntables x 2"
						desc="High-Torque DJ-Plattenspieler ST.150 von Stanton"
						image={Turntable}
						title="Stanton ST.150"
					/>
				</Section>
			</Container>
		</React.Fragment>
	);
};

export default Equipment;
