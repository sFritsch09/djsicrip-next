'use client';

import { Fragment, useEffect } from 'react';

export default function Googletag() {
	function gtag() {
		dataLayer.push(arguments);
	}
	useEffect(() => {
		if (window.dataLayer) {
			window.dataLayer = window.dataLayer || [];
		}
		gtag('js', new Date());
		gtag('config', 'AW-957761028');
	}, []);

	return (
		<Fragment>
			<script async src="https://www.googletagmanager.com/gtag/js?id=AW-957761028"></script>
		</Fragment>
	);
}
