import styled from 'styled-components';
// Booking Calendar
export const BookingContainer = styled.div`
	display: flex;
	justify-content: center;
	padding: 20px;

	.booking-calendar {
		.names {
			.day-content {
				color: var(--calendarColor);
			}
		}
		.header {
			background-color: var(--lightColor);
			.header-content {
				.icon-previous {
					cursor: pointer;
					outline: none;
					padding: 0 10px;
					&:disabled {
						color: var(--darkColor);
						cursor: default;
					}
				}
				.icon-next {
					cursor: pointer;
					outline: none;
					padding: 0 10px;
				}
				.month-label {
					cursor: default;
					&:disabled {
						color: var(--darkColor);
					}
				}
			}
		}

		.week {
			.day-box .day {
				background-color: var(--lightColor);
				&.different-month {
					color: var(--darkColor);
					&.booked-day {
						color: var(--lightColor);
					}
				}
				&.selected {
				}
				&.today {
				}
				&.booked-day {
					background-color: var(--darkColor);
				}
				&.booked-day:before {
					background-color: var(--darkColor);
				}
				&.booked-night:after {
					display: none;
				}
			}
		}
	}
`;
export const CalendarWrapper = styled.div`
	width: 500px;
`;
export const CalendarLegend = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-start;
	padding: 5px 0;

	.free {
		align-items: center;
		display: flex;
		padding: 0 10px;
		&:before {
			content: '';
			background-color: var(--lightColor);
			width: 20px;
			margin-right: 10px;
			height: 20px;
			content: '';
			display: inline-flex;
			border-radius: 7.5px;
		}
	}
	.booked {
		padding: 0 10px;
		align-items: center;
		display: flex;
		&:before {
			background-color: var(--darkColor);
			content: '';
			width: 20px;
			margin-right: 10px;
			height: 20px;
			content: '';
			display: inline-flex;
			border-radius: 7.5px;
		}
	}
`;
