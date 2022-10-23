import dynamic from 'next/dynamic';
import { Button } from '@nextui-org/react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { FormContainer, FormHeader } from '../../styles/booking.styles';
import { SendButton } from '../../components/form/SendButton';
import { SendIcon } from '../../components/form/SendIcon';
// Modal
import { Modal, useModal, Text } from '@nextui-org/react';

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
});

export default function Booking() {
	// Modal
	const { setVisible, bindings } = useModal();
	const INITIAL_FORM_STATE = {
		name: '',
		email: '',
		date: '',
		event: '',
	};
	const [state, setState] = useState(INITIAL_FORM_STATE);
	const TextInput = dynamic(() => import('../../components/form/TextInput'), {
		ssr: false,
	});
	const DateInput = dynamic(() => import('../../components/form/DateInput'), {
		ssr: false,
	});
	const RadioButton = dynamic(() => import('../../components/form/RadioButton'), {
		ssr: false,
	});
	return (
		<div className="main">
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
				validationSchema={FORM_VALIDATION}
				onSubmit={(values) => {
					console.log(values);
					setState(values);
				}}
			>
				<Form>
					<FormContainer>
						<FormHeader>Buchen</FormHeader>
						<TextInput label="Name" name="name" autoComplete="name" />
						<TextInput
							label="Email"
							name="email"
							autoComplete="email"
							contentRightStyling={false}
							contentRight={
								<SendButton>
									<SendIcon />
								</SendButton>
							}
						/>
						<DateInput name="date" inputMode="none" min={new Date().toISOString().slice(0, 10)} />
						<RadioButton
							label="Event"
							name="event"
							options={['Hochzeit', 'Geburtstag', 'Firmenfeier']}
						/>
						<div>
							<Button type="submit" onClick={() => setVisible(true)} auto>
								Submit
							</Button>
						</div>
					</FormContainer>
				</Form>
			</Formik>
		</div>
	);
}
