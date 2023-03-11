'use client';
import { Button, Switch } from '@nextui-org/react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { FormContainer, FormHeader, Label } from '../../styles/booking.styles';
import { SendButton } from '../../components/form/SendButton';
import { SendIcon } from '../../components/form/SendIcon';
// Modal
import { Modal, useModal, Text } from '@nextui-org/react';
import {
	TextInput,
	TextMessage,
	RadioButton,
	DateInput,
	CustomCheckbox,
} from '../../components/form';
import { Fragment } from 'react';

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
	async function postData(url = '', data = {}) {
		// Default options are marked with *
		const response = await fetch(url, {
			method: 'POST', // *GET, POST, PUT, DELETE, etc.
			mode: 'same-origin', // no-cors, *cors, same-origin
			cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
			credentials: 'same-origin', // include, *same-origin, omit
			headers: {
				'Content-Type': 'application/json',
				// 'Content-Type': 'application/x-www-form-urlencoded',
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
		if (searchParams.get('booking') === 'rent') {
			setForm(true);
		}
	}, [searchParams]);
	// Modal
	const { setVisible, bindings } = useModal();
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
			<Modal
				blur
				preventClose
				width="600px"
				aria-labelledby="modal-title"
				aria-describedby="modal-description"
				{...bindings}
			>
				<Modal.Header>
					<Text id="modal-title" size={18}>
						Hinweis!
					</Text>
				</Modal.Header>
				<Modal.Body>
					<Text id="modal-description" size={20}>
						Meine Webseite ist noch nicht fertiggestellt und ist noch in Arbeit 🚧 Bis dahin können
						Anfragen über Email oder Mobil angenommen werden ✨
						<br />
						<br />
						📧 Email: sfritsch09@gmail.com
						<br />
						📱 Mobil: 017632694016
					</Text>
				</Modal.Body>
				<Modal.Footer>
					<Button auto onClick={() => setVisible(false)}>
						OK
					</Button>
				</Modal.Footer>
			</Modal>
			<Formik
				initialValues={INITIAL_FORM_STATE}
				validationSchema={!form ? FORM_VALIDATION : FORM_VALIDATION2}
				onSubmit={(values) => {
					console.log(values);
					if (form) {
						postData('/api/event?form=renting', values);
					} else {
						postData('/api/event', values);
					}
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
							<Button type="submit" onClick={() => setVisible(true)} auto>
								Submit
							</Button>
						</div>
					</FormContainer>
				</Form>
			</Formik>
		</Fragment>
	);
}
