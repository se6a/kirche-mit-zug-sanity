import {BiComment} from 'react-icons/bi';

export default {
	type: 'object',
	name: 'quotesAndStills',
	title: 'Zitate und Stills',
	fields: [
		{
			type: 'array',
			name: 'entries',
			title: ' ',
			of: [
				{
					type: 'image',
					title: 'Still',
					name: 'still',
					preview: {
						select: {
							asset: 'asset',
							alt: 'alt',
						},
						prepare: ({asset, alt}) => {
							return {
								title: 'Still' + (alt?.length ? `: ${alt}` : ''),
								media: asset,
							};
						},
					},
					fields: [
						{
							type: 'string',
							name: 'alt',
							title: 'Alternativ Text',
							validation: (R) => R.required(),
						},
					],
					options: {
						hotspot: true,
					},
				},
				{
					type: 'object',
					name: 'quote',
					preview: {
						select: {
							quotee: 'quotee',
						},
						prepare: ({quotee}) => ({
							title: 'Zitat' + (quotee?.length ? `: ${quotee}` : ''),
							media: BiComment,
						}),
					},
					fields: [
						{
							type: 'text',
							title: 'Text',
							name: 'text',
						},

						{
							type: 'string',
							title: 'Quelle/Person',
							name: 'quotee',
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
