import {createMultiling} from '/lib/fields/multiling';

export default {
	type: 'object',
	name: 'overview',
	title: 'Übersicht',
	fields: [
		{
			type: 'picture',
			name: 'poster',
		},

		createMultiling({
			type: 'portableText',
			name: 'synopsis',
			title: 'Synopsis',
		}),

		{
			type: 'portableText',
			name: 'details',
			title: 'Informationen',
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
