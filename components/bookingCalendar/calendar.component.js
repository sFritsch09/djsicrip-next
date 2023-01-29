import { Fragment } from 'react';
import { server } from '../../config/index';

async function getData() {
	const res = await fetch(`${server}/api/event`);

	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		// throw new Error('Failed to fetch data');
		console.log('error');
	}

	return res.json();
}
export default async function Calendar() {
	const data = await getData();
	return (
		<Fragment>
			<div>Events: {data.map((date) => date.start)}</div>
		</Fragment>
	);
}
