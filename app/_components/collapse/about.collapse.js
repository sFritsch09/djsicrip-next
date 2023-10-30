import { Accordion, AccordionItem } from '@nextui-org/react';
import Link from 'next/link';
import { Fragment } from 'react';

export default function AboutCollapse({ items }) {
	return (
		<Fragment>
			<Accordion>
				{items.map((item, index) => (
					<AccordionItem key={index} title={item.question}>
						<span>{item.answer}</span>
						{item.link && (
							<span className="text-blue-400 ml-1">
								<Link color="primary" href={item.link}>
									{item.linkText}
								</Link>
							</span>
						)}
					</AccordionItem>
				))}
			</Accordion>
		</Fragment>
	);
}
