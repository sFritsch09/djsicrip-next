'use client';
import React, { useContext, useState } from 'react';

const ScrollContext = React.createContext();
const ScrollUpdateContext = React.createContext();

export const useScroll = () => {
	return useContext(ScrollContext);
};

export const useScrollUpdate = () => {
	return useContext(ScrollUpdateContext);
};

export const ScrollProvider = ({ children }) => {
	const [scroll, setScroll] = useState(false);

	const scrollSet = (setting) => {
		setScroll(setting);
	};

	return (
		<ScrollContext.Provider value={scroll}>
			<ScrollUpdateContext.Provider value={scrollSet}>{children}</ScrollUpdateContext.Provider>
		</ScrollContext.Provider>
	);
};
