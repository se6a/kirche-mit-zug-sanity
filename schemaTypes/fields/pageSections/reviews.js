export default {
	type: 'object',
	name: 'reviews',
	title: 'Stimmen',

	fields: [
		{
			type: 'array',
			name: 'entries',
			title: ' ',
			of: [
				{
					type: 'object',
					name: 'review',
					title: 'Stimme',
					fields: [
						{
							name: 'source',
							title: 'Quelle',
							type: 'string',
							validation: (R) => R.required(),
						},

						{
							name: 'portableText',
							type: 'portableText',
							title: 'Auszug',
						},

						{
							name: 'catchQuote',
							type: 'string',
							title: 'Zitat',
						},

						{
							name: 'useLink',
							title: 'Weiterführender Link einfügen?',
							type: 'boolean',
							initialValue: false,
						},

						{
							type: 'linkReadMore',
							name: 'linkReadMore',
							title: 'Mehr lesen',
							hidden: ({parent}) => parent?.useLink !== true,
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
