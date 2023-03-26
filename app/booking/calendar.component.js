'use client';
import { Fragment, useEffect, useState } from 'react';
import BookingCalendar from 'react-booking-calendar';
import { server } from '../../config/index';
import { BookingContainer, CalendarLegend, CalendarWrapper } from './calendar.styles';

export default function Calendar({ form }) {
	const [data, setData] = useState([new Date(Date.now())]);

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
				{form ? (
					<CalendarWrapper>
						<CalendarLegend>
							<div className="free">Frei</div>
							<div className="booked">Vermietet</div>
						</CalendarLegend>
						<BookingCalendar
							bookings={data
								.filter((item) => item?.name?.includes('Renting'))
								.map((item) => new Date(item.start))}
							disableHistory={false}
						/>
					</CalendarWrapper>
				) : (
					<CalendarWrapper>
						<CalendarLegend>
							<div className="free">Frei</div>
							<div className="booked">Belegt</div>
						</CalendarLegend>
						<BookingCalendar
							bookings={data
								.filter((item) => item?.name?.includes('Booking'))
								.map((item) => new Date(item.start))}
							disableHistory={false}
						/>
					</CalendarWrapper>
				)}
			</BookingContainer>
		</Fragment>
	);
}
