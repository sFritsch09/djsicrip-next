'use client';
import { Button, Switch } from '@nextui-org/react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { FormContainer, FormHeader, Label } from '../../styles/booking.styles';
import { SendButton } from '../../components/form/SendButton';
import { SendIcon } from '../../components/form/SendIcon';
import {
	TextInput,
	TextMessage,
	RadioButton,
	DateInput,
	CustomCheckbox,
} from '../../components/form';
import dynamic from 'next/dynamic';
import { Fragment } from 'react';

const BookingCalendar = dynamic(() => import('./calendar.component'), {
	ssr: false,
});

const FORM_VALIDATION = Yup.object().shape({
	name: Yup.string()
		.required('Required')
		.matches(
			/^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
			'Name kann nur Alphabetisch sein'
		),
	email: Yup.string().required('Required').email('Bitte richtige Mail angeben'),
	date: Yup.date()
		.required('Required')
		.min(new Date().toISOString().slice(0, 10), 'Wähle ein korrektes Datum'),
	event: Yup.string().required('Required'),
	provided1: Yup.boolean(),
	provided2: Yup.boolean(),
	message: Yup.string(),
});
const FORM_VALIDATION2 = Yup.object().shape({
	name: Yup.string()
		.required('Required')
		.matches(
			/^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
			'Name kann nur Alphabetisch sein'
		),
	email: Yup.string().required('Required').email('Bitte richtige Mail angeben'),
	date: Yup.date()
		.required('Required')
		.min(new Date().toISOString().slice(0, 10), 'Wähle ein korrektes Datum'),
	device: Yup.string().required('Required'),
	message: Yup.string(),
});
export default function Bookingform() {
	const router = useRouter();
	async function postData(url = '', data = {}) {
		// Default options are marked with *
		const response = await fetch(url, {
			method: 'POST', // *GET, POST, PUT, DELETE, etc.
			mode: 'same-origin', // no-cors, *cors, same-origin
			cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
			credentials: 'same-origin', // include, *same-origin, omit
			headers: {
				'Content-Type': 'application/json',
			},
			referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
			body: JSON.stringify(data), // body data type must match "Content-Type" header
		});
		return response.json();
	}
	// const data = await getData();
	const [form, setForm] = useState(false);
	const searchParams = useSearchParams();
	useEffect(() => {
		if (searchParams.get('booking') === 'renting') {
			setForm(true);
		}
	}, [searchParams]);
	const date = new Date().toISOString().slice(0, 10);
	// .replace(/(\.)/g, '-')
	const INITIAL_FORM_STATE = {
		name: '',
		email: '',
		date: date,
		event: '',
		provided1: false,
		provided2: false,
		message: '',
		device: '',
	};
	return (
		<Fragment>
			<BookingCalendar form={form} />
			<Formik
				initialValues={INITIAL_FORM_STATE}
				validationSchema={!form ? FORM_VALIDATION : FORM_VALIDATION2}
				onSubmit={(values) => {
					console.log(values);
					if (form) {
						postData('/api/event?form=renting', values).then((res) =>
							res.status === 200 ? router.push('/landing') : router.push('/landing?fail=true')
						);
					} else {
						postData('/api/event', values).then((res) =>
							res.status === 200 ? router.push('/landing') : router.push('/landing?fail=true')
						);
					}
					// router.push('/landing');
				}}
			>
				<Form>
					<FormContainer>
						<div>
							<Label>{form ? 'Buchen' : 'Mieten'}</Label>
							<Switch
								color="primary"
								name="booking"
								checked={form}
								onChange={(e) => setForm(e.target.checked)}
							/>
						</div>
						<FormHeader>{form ? 'Mieten' : 'Buchen'}</FormHeader>
						<TextInput label="Name" name="name" autoComplete="name" />
						<TextInput
							label="Email"
							name="email"
							autoComplete="email"
							contentRightStyling={false}
							contentRight={
								<SendButton>
									<SendIcon fill={'#006d77'} />
								</SendButton>
							}
						/>
						<div>
							<Label>Datum</Label>
							<DateInput name="date" inputMode="none" initialValue={date} min={date} />
						</div>
						{!form ? (
							<Fragment>
								<RadioButton
									label="Event"
									name="event"
									options={['Hochzeit', 'Geburtstag', 'Firmenfeier']}
								/>
								<div>
									<Label>Bereitgestellt</Label>
									<CustomCheckbox name="provided1" label="Musik Anlage" />
									<br />
									<br />
									<CustomCheckbox name="provided2" label="Tisch 1,5m Länge" />
								</div>
							</Fragment>
						) : (
							<div>
								<RadioButton label="Gerät" name="device" options={['Musik Anlage - SoundBoks 3']} />
							</div>
						)}
						<div>
							<TextMessage
								name="message"
								label="Nachricht"
								placeholder="Sonstige Infos"
								width="100%"
							/>
						</div>
						<div>
							<Button type="submit" auto>
								Submit
							</Button>
						</div>
					</FormContainer>
				</Form>
			</Formik>
		</Fragment>
	);
}
