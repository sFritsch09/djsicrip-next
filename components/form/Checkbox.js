import { Checkbox } from '@nextui-org/react';
import { useField } from 'formik';
import { Fragment } from 'react';

export default function CustomCheckbox({ name, label, ...props }) {
	const [_, meta, helpers] = useField(name);

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
		<Fragment>
			<Checkbox
				{...props}
				status={meta.error ? 'error' : 'default'}
				color={helperColor()}
				name={name}
				onChange={helpers.setValue}
			>
				{label}
			</Checkbox>
			<span>{helperText()}</span>
		</Fragment>
	);
}
