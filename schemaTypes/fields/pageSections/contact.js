export default {
	type: 'object',
	name: 'contact',
	title: 'Kontakt',
	fields: [
		{
			name: 'sections',
			title: 'Abschnitte',
			type: 'array',
			of: [
				{
					type: 'object',
					fields: [
						{
							name: 'title',
							type: 'string',
						},
						{
							type: 'portableText',
							name: 'portableText',
							title: 'Text',
						},
					],
				},
			],
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
