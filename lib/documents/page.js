export default (conf = {}) => {
	const {name, title, fields = [], ...restConf} = conf;

	return {
		type: 'document',
		name,
		title,
		groups: [
			{
				name: 'meta',
				title: 'Metadaten',
			},
			{
				name: 'content',
				title: 'Inhalt',
				default: true,
			},
		],

		fields: [
			{
				type: 'string',
				name: 'title',
				title: 'Titel',
				group: 'meta',
				validation: (Rule) => Rule.required(),
			},

			{
				type: 'textWithCount',
				name: 'description',
				group: 'meta',
				title: 'SEO Beschreibung',

				title: 'Beschreibung für SEO',
				description: `50 bis 160 Zeichen`,

				validation: (R) => R.required(),
			},

			...fields.map((field) => {
				if ('group' in field) return field;
				return {
					...field,
					group: 'content',
				};
			}),
		],

		...restConf,
	};
};
