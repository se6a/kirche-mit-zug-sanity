export default {
	type: 'object',
	name: 'journal',
	title: 'Journal',
	fields: [
		{
			type: 'array',
			name: 'entries',
			title: 'Einträge',
			of: [
				{
					type: 'object',
					name: 'entry',
					title: 'Eintrag',
					fields: [
						{
							title: 'Verfasst von',
							name: 'authors',
							type: 'string',
						},
						{
							title: 'Ort',
							name: 'location',
							type: 'string',
						},
						{
							title: 'Verfasst am',
							name: 'date',
							type: 'date',
						},
						{
							name: 'portableText',
							type: 'portableText',
							title: 'Text',
						},
						{
							title: 'Bild',
							name: 'picture',
							type: 'picture',
							options: {
								collapsible: false,
								modal: {
									type: 'popover',
								},
							},
						},
					],
				},
			],
		},
	],
};
