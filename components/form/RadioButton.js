import { Radio } from '@nextui-org/react';
import { useField } from 'formik';

export default function RadioButton({ name, options, label, ...props }) {
	const [field, meta, helpers] = useField(name);

	const helperText = () => {
		if (meta.touched && meta.error) {
			if (meta.error.includes('Required')) {
				return `  ❌ ${meta.error}`;
			}
			return `  ⚠️ ${meta.error}`;
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
		<Radio.Group
			label={label + helperText()}
			value={meta.value}
			onChange={helpers.setValue}
			{...props}
			labelColor={helperColor()}
		>
			{options.map((option, index) => (
				<Radio key={index} value={option}>
					{option}
				</Radio>
			))}
		</Radio.Group>
	);
}
