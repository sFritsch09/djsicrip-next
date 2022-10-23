import { Collapse, Text, Link } from '@nextui-org/react';
import { Fragment } from 'react';

export default function AboutCollapse({ items }) {
	return (
		<Fragment>
			<Collapse.Group bordered>
				{items.map((item, index) => (
					<Collapse key={index} title={item.question}>
						<Text>{item.answer} </Text>
						<Link color="secondary" href={item.link}>
							{item.linkText}
						</Link>
					</Collapse>
				))}
			</Collapse.Group>
		</Fragment>
	);
}
