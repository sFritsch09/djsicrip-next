import { Fragment, Suspense } from 'react';
import Calendar from '../../../components/bookingCalendar/calendar.component';

export default function Page() {
	return (
		<Fragment>
			<div style={{ marginTop: '16em' }}>
				<Suspense fallback={<p>Loading events...</p>}>
					<Calendar />
				</Suspense>
			</div>
		</Fragment>
	);
}
