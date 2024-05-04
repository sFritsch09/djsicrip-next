import { Select, SelectItem } from '@nextui-org/react';
import { useField } from 'formik';

export default function RadioButton({ name, options, label, placeholder }) {
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
		<Select
			{...field}
			label={label}
			errorMessage={helperText()}
			isInvalid={meta.error}
			color={helperColor()}
			placeholder={placeholder}
			labelPlacement="outside"
			selectionMode="single"
		>
			{options.map((item) => (
				<SelectItem key={item.value} value={item.value}>
					{item.label}
				</SelectItem>
			))}
		</Select>
	);
}
