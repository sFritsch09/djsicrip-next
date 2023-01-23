'use client';
import React, { useContext, useState } from 'react';

const MusicContext = React.createContext();
const MusicUpdateContext = React.createContext();

export const useMusic = () => {
	return useContext(MusicContext);
};

export const useMusicUpdate = () => {
	return useContext(MusicUpdateContext);
};

export const MusicProvider = ({ children }) => {
	const [playing, setPlaying] = useState('');

	const musicSet = (setting) => {
		setPlaying(setting);
	};

	return (
		<MusicContext.Provider value={playing}>
			<MusicUpdateContext.Provider value={musicSet}>{children}</MusicUpdateContext.Provider>
		</MusicContext.Provider>
	);
};
