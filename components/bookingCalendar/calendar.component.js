import { Fragment } from 'react';
import BookingCalendar from 'react-booking-calendar';
import { BookingContainer, CalendarLegend, CalendarWrapper } from './calendar.styles';
import { server } from '../../config/index';

// async function getData() {
// 	const res = await fetch(`${server}/api/event`);

// 	if (!res.ok) {
// 		// This will activate the closest `error.js` Error Boundary
// 		// throw new Error('Failed to fetch data');
// 		console.log('error');
// 	}

// 	return res.json();
// }
export default function Calendar({ dates }) {
	// const data = await getData();
	return (
		<Fragment>
			<BookingContainer>
				<CalendarWrapper>
					<CalendarLegend>
						<div className="free">Frei</div>
						<div className="booked">Belegt</div>
					</CalendarLegend>
					<BookingCalendar bookings={dates} disableHistory={false} />
					<div></div>
				</CalendarWrapper>
			</BookingContainer>
		</Fragment>
	);
}
