import { headers } from 'next/headers';

async function init() {
	// google api
	const { google } = require('googleapis');
	const target = ['https://www.googleapis.com/auth/calendar'];
	const jwt = new google.auth.JWT(
		process.env.GOOGLE_CLIENT_EMAIL,
		null,
		(process.env.GOOGLE_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
		target
	);

	const calendar = google.calendar({ version: 'v3', auth: jwt });
	return calendar;
}
export async function GET() {
	const header = headers();
	const calendar = await init();

	const eventList = [];
	const resp = await calendar.events.list({
		calendarId: process.env.GOOGLE_CALENDAR_ID,
		timeMin: new Date('01-01-2023').toISOString(),
		maxResults: 30,
		singleEvents: true,
		orderBy: 'startTime',
	});
	const events = resp.data.items;
	if (events.length) {
		events.map((event, i) => {
			return eventList.push({
				start: event.start.date,
				end: event.end.date,
				name: event.summary,
				location: event.location,
				description: event.description,
				color: event.colorId,
			});
		});
	} else {
		console.log('No Events');
	}
	const allowedOrigins = [
		'https://www.mainzdj.de',
		'https://mainzdj.de',
		'https://www.djsicrip.com',
	];
	const origin = header.get('host');
	if (allowedOrigins.includes(origin)) {
		return Response.json(eventList);
	}
	return new Response('You are not allowed to access this resource!', { status: 403 });
}

export async function POST(req) {
	const body = await req.json();
	const { searchParams } = new URL(req.url);
	const form = searchParams.get('form');
	const header = headers();
	// google api
	const calendar = await init();
	let colorId = '10';
	let subject = `Booking by: ${body.name}`;
	let description = `Event: ${body.event}, E-Mail: ${body.email}, Message: ${body.message}`;
	if (body.provided1) {
		description += `, Musikanlage`;
	}
	if (body.provided2) {
		description += `, Tisch`;
	}
	if (form === 'renting') {
		subject = `Renting by: ${body.name}`;
		description = `Event: ${body.event}, E-Mail: ${body.email}, Message: ${body.message}, device: ${body.device}`;
	}
	const allowedOrigins = ['https://*.mainzdj.de', 'https://*.djsicrip.com'];
	const origin = header.get('host');
	if (allowedOrigins.includes(origin)) {
		await calendar.events.insert(
			{
				calendarId: process.env.GOOGLE_CALENDAR_ID,
				resource: {
					start: {
						date: body.date.slice(0, 10),
						timeZone: 'Europe/Berlin',
					},
					end: {
						date: body.date.slice(0, 10),
						timeZone: 'Europe/Berlin',
					},
					summary: subject,
					status: 'confirmed',
					description: description,
					location: 'Mainz',
					colorId: colorId,
				},
			},
			(err, event) => {
				if (err) console.log('Error', err);
			}
		);
		return Response.json('Successfully booked!');
	} else if (!allowedOrigins.includes(origin)) {
		return new Response('You are not allowed to access this resource!', { status: 403 });
	}
	return new Response('Something went wrong!', { status: 500 });
}
