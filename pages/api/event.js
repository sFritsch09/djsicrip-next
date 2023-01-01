export default async function handler(req, res) {
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

	if (req.method === 'POST') {
		// Process a POST request
		let colorId = '10';
		// let summary = `Booked by: ${req.body.data.name}`;
		// let description = `Name: ${req.body.data.name}, E-Mail: ${req.body.data.email}, Mobile: ${req.body.data.phone}`;
		// if (req.body.data.type) {
		// 	description += `, Floßart: ${req.body.data.type}`;
		// }
		await calendar.events.insert(
			{
				calendarId: process.env.GOOGLE_CALENDAR_ID,
				resource: {
					start: {
						// date: req.body.data.arrivalDate.slice(0, 10),
						date: '2022-12-29',
						timeZone: 'Europe/Berlin',
					},
					end: {
						// date: req.body.data.departureDate.slice(0, 10),
						date: '2022-12-29',
						timeZone: 'Europe/Berlin',
					},
					// summary: summary,
					summary: 'Test Event',
					status: 'confirmed',
					// description: description,
					description: 'Test',
					location: 'Mainz',
					//yellow = 5, red = 4, blue = 1
					colorId: colorId,
				},
			},
			(err, event) => {
				if (err) console.log('Error', err);
				console.log(event.data);
			}
		);
		res.status(200).send({ success: 'Successfully booked!' });
	} else {
		// Handle any other HTTP method

		const eventList = [];
		const resp = await calendar.events.list({
			calendarId: process.env.GOOGLE_CALENDAR_ID,
			timeMin: new Date().toISOString(),
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
		res.status(200).send(eventList);
	}
}
