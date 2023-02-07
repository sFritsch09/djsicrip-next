import styled from 'styled-components';
// Booking Calendar
export const BookingContainer = styled.div`
	display: flex;
	justify-content: center;
	padding: 20px;

	.booking-calendar {
		.header {
			background-color: ${(props) => props.theme.lightColor};
			.header-content {
				.icon-previous {
					cursor: pointer;
					outline: none;
					padding: 0 10px;
					&:disabled {
						color: ${(props) => props.theme.darkColor};
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
						color: ${(props) => props.theme.darkColor};
					}
				}
			}
		}

		.week {
			&.names {
				.day-box .day {
					color: ${(props) =>
						props.theme.mode === 'Dark' ? props.theme.color : props.theme.Darkcolor};
				}
			}
			.day-box .day {
				background-color: ${(props) => props.theme.lightColor};
				&.different-month {
					color: ${(props) => props.theme.darkColor};
					&.booked-day {
						color: ${(props) => props.theme.lightColor};
					}
				}
				&.selected {
				}
				&.today {
				}
				&.booked-day {
					background-color: ${(props) => props.theme.darkColor};
				}
				&.booked-day:before {
					background-color: ${(props) => props.theme.darkColor};
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
			background-color: ${(props) => props.theme.lightColor};
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
			background-color: ${(props) => props.theme.darkColor};
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
