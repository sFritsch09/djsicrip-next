import dynamic from 'next/dynamic';
import { Fragment } from 'react';

export default function Price() {
	const PriceTable = dynamic(() => import('../../components/priceTable/priceTable.component'), {
		ssr: false,
	});
	return (
		<Fragment>
			<PriceTable />
		</Fragment>
	);
}
