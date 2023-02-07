'use client';
import { Table } from '@nextui-org/react';

export default function Price() {
	const columns = [
		{
			key: 'name',
			label: 'NAME',
		},
		{
			key: 'price',
			label: 'PRICE*',
		},
	];
	const rows = [
		{
			key: '1',
			name: 'Geburtstag',
			price: '200',
		},
		{
			key: '2',
			name: 'Hochzeit',
			price: '750',
		},
		{
			key: '3',
			name: 'Firmenfeier',
			price: '800',
		},
		{
			key: '4',
			name: 'Abschlussfeier',
			price: '650',
		},
	];
	return (
		<div className="main">
			{
				<Table
					aria-label="Pricelist"
					css={{
						height: 'auto',
						minWidth: '100%',
					}}
					bordered
				>
					<Table.Header columns={columns}>
						{(column) => <Table.Column key={column.key}>{column.label}</Table.Column>}
					</Table.Header>
					<Table.Body items={rows}>
						{(item) => (
							<Table.Row key={item.key}>
								{(columnKey) => <Table.Cell>{item[columnKey]}</Table.Cell>}
							</Table.Row>
						)}
					</Table.Body>
				</Table>
			}
			*Es kommen zusätzlich Fahrtkosten hinzu von 80 bis 100€
		</div>
	);
}
