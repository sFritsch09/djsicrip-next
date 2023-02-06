'use client';
import { Fragment, useEffect, useState } from 'react';
import BookingCalendar from 'react-booking-calendar';
import { server } from '../../config/index';
import { BookingContainer, CalendarLegend, CalendarWrapper } from './calendar.styles';

export default function Calendar() {
	const [data, setData] = useState(null);

	useEffect(() => {
		fetch(`${server}/api/event`)
			.then((res) => res.json())
			.then((data) => {
				setData(data);
			});
	}, []);
	return (
		<Fragment>
			<BookingContainer>
				<CalendarWrapper>
					<CalendarLegend>
						<div className="free">Frei</div>
						<div className="booked">Belegt</div>
					</CalendarLegend>
					<BookingCalendar bookings={data?.map((date) => date.start)} disableHistory={false} />
					<div></div>
				</CalendarWrapper>
			</BookingContainer>
		</Fragment>
	);
}
