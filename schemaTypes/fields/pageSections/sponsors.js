export default {
	type: 'object',
	name: 'sponsors',
	title: 'Sponsoren',
	fields: [
		{
			type: 'array',
			name: 'entries',
			title: 'Einträge',
			of: [
				{
					name: 'entry',
					title: 'Sponsor',
					type: 'object',
					fields: [
						{
							type: 'string',
							name: 'name',
							title: 'Sponsor Name',
						},

						{
							name: 'useLogo',
							title: 'Logo einfügen',
							type: 'boolean',
							initialValue: false,
						},

						{
							type: 'image',
							name: 'logo',
							hidden: ({parent}) => parent?.useLogo === false,
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
