import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import { Product, ProductImage } from './gallery.styles.js';
import { useScrollUpdate } from '../hooks/ScrollContext';
//icons
import { BiChevronLeft as Chevron } from 'react-icons/bi';
import { VscClose as Close } from 'react-icons/vsc';
import { IoArrowDownCircleOutline as DownArrow } from 'react-icons/io5';

import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { CustomButton } from '../../styles/globalStyles.js';

const Gallery = ({ header, desc, image, title, arrowClick, imageClick, showButton }) => {
	const scrollContext = useScrollUpdate();

	const ease = [0.6, 0.05, -0.01, 0.99];
	let x = useMotionValue(0, { stiffness: 300, damping: 200, ease: ease });
	const fadeIn = useTransform(x, [-100, 0], [1, 0]);
	const fadeOut = useTransform(x, [-60, 0], [0, 1]);
	const scale = useTransform(x, [-100, 0], [1.5, 1]);
	const width = useTransform(x, [-950, 0], [350, 0]);
	const up = useTransform(x, [-100, 0], [-100, 0]);
	const down = useTransform(x, [-100, 0], [100, 0]);
	//state
	const [state, setState] = useState(false);

	// Update the state to check if the user has dragged the product
	useEffect(() => {
		x.onChange(() => {
			x.get() > -100 ? setState(false) : setState(true);
			x.get() < -20 ? scrollContext(true) : scrollContext(false);
		});
	}, [x, scrollContext]);

	// Closing the drag product
	const closeProductDrag = () => {
		x.stop();
		x.set(0);
	};

	const handleRenting = () => {
		Router.push({
			pathname: '/booking',
			query: { booking: 'rent' },
		});
	};

	return (
		<Product>
			<div className="product-inner">
				<div className="product-content">
					<motion.div style={{ translateY: up }} className="product-content-inner">
						<h1>{header}</h1>
						<p>{desc}</p>
						<div className="btn-row">
							{showButton ? <CustomButton onClick={handleRenting}>Mieten</CustomButton> : <div />}
							<DownArrow onClick={arrowClick} />
						</div>
					</motion.div>
				</div>
			</div>
			<div className="product-slide-enlarge">
				<motion.div className="background" style={{ opacity: fadeIn }}></motion.div>
				{state ? (
					<AnimatePresence>
						<motion.div
							initial={{ y: -30, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							exit={{ y: -30, opacity: 0 }}
							className="product-drag-header"
						>
							<div className="company-name">{title}</div>
							<div onClick={closeProductDrag} className="close">
								<Close />
							</div>
						</motion.div>
					</AnimatePresence>
				) : (
					<AnimatePresence></AnimatePresence>
				)}
				<div className="product-container">
					<motion.div
						drag="x"
						style={{ x, scale, cursor: 'grab' }}
						animate={{ y: -45 }}
						dragElastic={0.05}
						className="product-image"
						dragConstraints={{ left: -400, right: 0 }}
						whileTap={{ cursor: 'grabbing' }}
					>
						<ProductImage image={image} onClick={imageClick} />
					</motion.div>
				</div>
				<motion.div style={{ paddingBottom: down }} className="product-drag">
					<div className="product-drag-inner">
						<div className="product-drag-label">
							<motion.h6 style={{ x, opacity: fadeOut }}>
								<Chevron className="arrow-left" />
								Zieh zum vergrößern
							</motion.h6>
						</div>
						<div className="product-drag-progress-background">
							<motion.div style={{ width }} className="product-drag-progress"></motion.div>
						</div>
					</div>
				</motion.div>
			</div>
		</Product>
	);
};

export default Gallery;
