'use client';
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react';
import { PriceContainer } from './priceTable.styles';

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
			<PriceContainer>
				{
					<Table
						aria-label="Pricelist"
						css={{
							height: 'auto',
							minWidth: '100%',
						}}
						bordered
					>
						<TableHeader columns={columns}>
							{(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
						</TableHeader>
						<TableBody items={rows}>
							{(item) => (
								<TableRow key={item.key}>
									{(columnKey) => <TableCell>{item[columnKey]}</TableCell>}
								</TableRow>
							)}
						</TableBody>
					</Table>
				}
				*Es kommen zusätzlich Fahrtkosten hinzu von 80 bis 100€
			</PriceContainer>
		</div>
	);
}
