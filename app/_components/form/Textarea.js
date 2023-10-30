import { Textarea } from '@nextui-org/react';
import { useField } from 'formik';

export default function TextMessage({ name, label, placeholder, ...props }) {
	const [field, meta] = useField(name);

	const helperText = () => {
		if (meta.touched && meta.error) {
			if (meta.error.includes('Required')) {
				return `❌ ${meta.error}`;
			}
			return `⚠️ ${meta.error}`;
		} else {
			return '';
		}
	};
	const helperColor = () => {
		if (meta.touched && meta.error) {
			if (meta.error.includes('Required')) {
				return 'error';
			}
			return 'warning';
		} else {
			return 'default';
		}
	};
	return (
		<Textarea
			{...field}
			{...props}
			label={label}
			placeholder={placeholder}
			isInvalid={meta.error}
			errorMessage={helperText()}
			helperColor={helperColor()}
			name={name}
		/>
	);
}
