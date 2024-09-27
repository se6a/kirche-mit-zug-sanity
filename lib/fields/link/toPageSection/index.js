import FieldPageSection from './FieldToPageSection';

export function toPageSection() {
	return {
		name: 'toPageSection',
		type: 'object',
		hidden: ({parent}) => parent?.destination !== 'page',

		components: {
			field: FieldPageSection,
		},

		fields: [
			{
				name: 'navigation',
				type: 'object',
				options: {
					collapsible: false,
					collapsed: false,
				},

				fields: [
					{
						name: 'label',
						type: 'string',
					},

					{
						name: 'slug',
						type: 'slug',
						options: {
							source: (_, {parent}) => parent?.label,
						},
					},
				],
			},
		],
	};
}
