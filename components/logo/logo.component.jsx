'use client';
import { motion } from 'framer-motion';
import { LogoContainer, VinylImg, VinylWrapper, MainContainer } from './logo.styles';

const pathVariants = {
	hidden: {
		opacity: 0,
		pathLength: 0,
		fill: '#ddd',
	},

	visible: (i) => ({
		opacity: 1,
		pathLength: 1,

		transition: {
			duration: 1,
			delay: i * 0.3,
		},
	}),
};

const textMotion = {
	rest: {
		transition: {
			duration: 2,
		},
	},
	hover: {
		rotate: 15,
		transition: {
			duration: 0.4,
		},
	},
};

const vinylMotion = {
	rest: {
		transition: {
			duration: 2,
		},
	},
	hover: {
		rotate: 360,
		transition: {
			ease: 'linear',
			duration: 2,
			repeat: Infinity,
		},
	},
};

const Logo = ({ animation, vinyl }) => {
	// const [animate, cycle] = useCycle(
	// 	{ scale: 1, rotate: 0 },
	// 	{ rotate: 360, transition: { ease: 'linear', duration: 2, repeat: Infinity } }
	// );
	return (
		<div>
			<MainContainer
				initial="rest"
				animate={animation ? 'hover' : 'rest'}
				whileHover="hover"
				playing="hover"
			>
				<LogoContainer variants={textMotion}>
					<motion.svg
						className="logo"
						version="1.0"
						xmlns="http://www.w3.org/2000/svg"
						width="100%"
						height="100%"
						viewBox="0 0 676.000000 492.000000"
						preserveAspectRatio="xMidYMid meet"
						variants={pathVariants}
						initial="hidden"
						animate="visible"
					>
						<g
							transform="translate(0.000000,492.000000) scale(0.100000,-0.100000)"
							fill="#000000"
							stroke="none"
						>
							{/* i dot */}
							<motion.path
								fill="none"
								strokeWidth="60"
								strokeLinecap="butt"
								stroke="black"
								d="M4182 4691 c-52 -20 -94 -40 -94 -44 0 -4 14 -46 31 -92 l32 -84 66
		25 c129 48 136 53 128 71 -4 10 -18 47 -32 83 -13 36 -28 68 -31 71 -4 4 -49
		-9 -100 -30z"
								variants={pathVariants}
								custom={8}
							/>
							{/* p without ending */}
							<motion.path
								fill="none"
								strokeWidth="60"
								strokeLinecap="butt"
								stroke="black"
								d="M5270 4707 c-25 -8 -130 -47 -235 -87 -218 -84 -275 -119 -320 -201
		-27 -48 -30 -63 -29 -134 1 -79 3 -86 168 -510 92 -236 437 -1136 767 -2000
		331 -863 604 -1573 607 -1576 4 -4 49 9 100 29 81 31 93 39 89 57 -3 16 -718
		1890 -1361 3566 -86 223 -156 419 -156 435 0 35 8 47 38 63 41 22 387 151 404
		151 49 0 57 -13 129 -202 51 -135 58 -173 37 -201 -7 -9 -95 -48 -196 -86
		-101 -39 -187 -73 -191 -76 -11 -6 61 -195 74 -195 19 0 379 141 412 161 49
		31 100 96 119 152 26 78 15 139 -62 340 -56 148 -75 187 -111 227 -73 81 -185
		115 -283 87z"
								variants={pathVariants}
								custom={7}
							/>
							{/*  i */}
							<motion.path
								fill="none"
								strokeWidth="60"
								strokeLinecap="butt"
								stroke="black"
								d="M4317 4345 c-49 -18 -91 -36 -94 -39 -4 -3 60 -178 140 -388 80 -211
		150 -395 156 -410 l10 -26 98 37 c66 26 97 42 95 52 -6 31 -306 809 -311 809
		-3 -1 -46 -16 -94 -35z"
								variants={pathVariants}
								custom={5}
							/>
							{/*  r */}
							<motion.path
								fill="none"
								strokeWidth="60"
								strokeLinecap="butt"
								stroke="black"
								d="M3827 4158 c-205 -79 -246 -98 -287 -135 -67 -60 -94 -120 -93 -208
		0 -65 8 -91 111 -359 61 -158 113 -291 116 -294 6 -5 176 56 190 68 4 5 -39
		133 -98 285 -58 153 -106 286 -106 295 0 53 8 58 290 165 113 43 206 79 208
		80 7 6 -72 195 -82 195 -6 -1 -118 -42 -249 -92z"
								variants={pathVariants}
								custom={4}
							/>
							{/*  C */}
							<motion.path
								fill="none"
								strokeWidth="60"
								strokeLinecap="butt"
								stroke="black"
								d="M2716 4041 c-410 -158 -441 -175 -489 -264 -18 -34 -22 -59 -22 -132
		l0 -90 108 -280 c60 -154 117 -298 129 -320 49 -98 137 -150 253 -149 65 1 95
		10 445 144 206 79 376 144 378 145 7 5 -72 195 -82 195 -5 0 -169 -61 -363
		-135 -194 -74 -366 -135 -381 -135 -16 0 -37 9 -46 19 -16 17 -217 526 -232
		586 -9 35 4 63 35 80 16 8 183 73 372 145 189 72 347 134 350 138 7 7 -56 182
		-69 193 -4 3 -177 -60 -386 -140z"
								variants={pathVariants}
								transition={{ duration: 3, times: [0, 0.2, 1] }}
								custom={3}
							/>
							{/*  S */}
							<motion.path
								fill="none"
								strokeWidth="60"
								strokeLinecap="butt"
								stroke="black"
								d="M844 3327 c-302 -117 -571 -225 -597 -240 -63 -37 -123 -115 -143
		-185 -46 -157 37 -347 184 -419 49 -24 69 -28 142 -28 83 1 90 3 340 99 150
		58 270 100 292 100 94 2 159 -118 109 -200 -21 -35 -36 -41 -573 -245 -174
		-66 -248 -98 -247 -109 1 -35 68 -185 81 -182 25 6 753 285 788 303 107 54
		181 167 182 280 3 167 -96 314 -239 355 -106 31 -166 19 -448 -90 -262 -101
		-310 -112 -351 -78 -50 40 -68 125 -39 181 17 34 18 34 436 194 178 68 415
		159 527 202 111 43 201 81 200 84 -2 4 -19 48 -38 99 -19 51 -39 92 -45 91 -5
		0 -258 -96 -561 -212z"
								variants={pathVariants}
								custom={1}
							/>
							{/* i after S */}
							<motion.path
								fill="none"
								strokeWidth="60"
								strokeLinecap="butt"
								stroke="black"
								d="M1415 3233 c-49 -20 -91 -37 -93 -38 -3 -2 306 -817 312 -823 2 -1
		47 14 100 34 86 33 97 40 92 58 -13 51 -305 801 -313 802 -4 1 -48 -14 -98
		-33z"
								variants={pathVariants}
								custom={2}
							/>
							{/*  p ending */}
							<motion.path
								fill="none"
								strokeWidth="60"
								strokeLinecap="butt"
								stroke="black"
								d="M6143 1072 c-10 -6 126 -378 282 -774 l14 -36 -106 -41 c-58 -23
		-108 -40 -110 -37 -2 2 -72 181 -154 397 -83 217 -152 396 -155 398 -2 2 -13
		0 -23 -5 -19 -8 -9 -37 156 -469 97 -253 178 -462 179 -463 4 -6 304 112 302
		119 -2 3 -82 212 -178 463 -96 251 -179 456 -185 456 -5 0 -15 -4 -22 -8z"
								variants={pathVariants}
								custom={8}
							/>
						</g>
					</motion.svg>
				</LogoContainer>
				<VinylWrapper
					variants={vinylMotion}
					whileHover="hover"
					animate={animation ? 'hover' : 'rest'}
					onTap="hover"
				>
					<VinylImg />
				</VinylWrapper>
			</MainContainer>
		</div>
	);
};

export default Logo;
