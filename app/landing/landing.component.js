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
							src="https://pb.techchase.de/api/files/xaxun5rjt3q4ncb/we5mquac053349w/giphy_S6NUckttrp.gif"
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
							src="http://pb.techchase.de/api/files/xaxun5rjt3q4ncb/ter07rbgf7h6t7v/dj_fail_RcDyBIqewc.gif"
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
