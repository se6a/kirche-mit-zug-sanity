import react from 'react';
import portableText from '/lib/fields/portableText';
import {Text} from '@sanity/ui';

export default {
	type: 'object',
	name: 'agenda',
	title: 'Agenda',
	fields: [
		{
			type: 'portableText',
			name: 'portableText',
			title: 'Text',
		},
		{
			name: 'placeholder',
			type: 'string',
			components: {
				field: () => (
					<a
						href="/structure/listen;list-agenda"
						aria-label="Agenda Einträge bearbeiten"
						target="_blank"
					>
						<Text>Einträge Bearbeiten</Text>
					</a>
				),
			},
		},
		{
			type: 'boolean',
			name: 'showSection',
			initialValue: true,
			title: 'Aktivieren',
			description: 'Die Sektion auf der Webseite anzeigen/verstecken.',
		},
	],
};
