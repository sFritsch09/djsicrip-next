import { Table } from '@nextui-org/react';

export default function Price() {
	const eventData = [
		{ name: 'Geburtstag', price: 200 },
		{ name: 'Hochzeit', price: 650 },
		{ name: 'Firmenfeier', price: 600 },
		{ name: 'Abschlussfeier', price: 450 },
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
					<Table.Header>
						<Table.Column>EVENT</Table.Column>
						<Table.Column>PREIS*</Table.Column>
					</Table.Header>
					<Table.Body>
						{eventData.map((event, index) => (
							<Table.Row key={index}>
								<Table.Cell>{event.name}</Table.Cell>
								<Table.Cell>{event.price} €</Table.Cell>
							</Table.Row>
						))}
					</Table.Body>
				</Table>
			}
			*Es kommen zusätzlich Fahrtkosten hinzu von 80 bis 100€
		</div>
	);
}
