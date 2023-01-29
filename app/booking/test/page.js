import { Fragment } from 'react';
import { server } from '../../../config/index';

async function getData() {
	const res = await fetch(`${server}/api/event`);
	// The return value is *not* serialized
	// You can return Date, Map, Set, etc.

	// Recommendation: handle errors
	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		console.log('error');
	}

	return res.json();
}

export default async function Page() {
	const data = await getData();

	return (
		<Fragment>
			<div style={{ marginTop: '5em' }}>Events: {data.map((date) => date.start)}</div>
		</Fragment>
	);
}
