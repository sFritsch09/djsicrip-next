'use client';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { Fragment } from 'react';
import { ImageWrapper, LandingContainer } from './landing.styles';

export default function LandingComponent() {
	const searchParams = useSearchParams();

	return (
		<LandingContainer>
			{searchParams.get('fail') !== 'true' ? (
				<Fragment>
					<span className="header">Successfully Booked!</span>
					<ImageWrapper>
						<Image
							src="https://s3.techchase.de/djsicrip/giphy_s6.gif"
							fill
							sizes="(max-width: 768px) 90vw, (max-width: 1200px) 25vw,18vw"
							alt="gif"
						/>
					</ImageWrapper>
				</Fragment>
			) : (
				<Fragment>
					<span className="header">Booking Failed!</span>
					<ImageWrapper>
						<Image
							src="https://s3.techchase.de/djsicrip/dj_fail.gif"
							fill
							sizes="(max-width: 768px) 90vw, (max-width: 1200px) 25vw,18vw"
							alt="gif"
						/>
					</ImageWrapper>
				</Fragment>
			)}
		</LandingContainer>
	);
}
