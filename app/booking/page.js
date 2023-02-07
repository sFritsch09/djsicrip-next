// import Calendar from './calendar.component';
import dynamic from 'next/dynamic';
import Bookingform from './form.component';

const BookingCalendar = dynamic(() => import('./calendar.component'), {
	ssr: false,
});
export default function Booking() {
	return (
		<div className="main">
			<BookingCalendar />
			<Bookingform />
		</div>
	);
}
