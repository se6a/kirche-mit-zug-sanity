const destinations = {
	url: {
		title: 'URL',
		type: 'url',
		name: 'url',
		hidden: ({parent}) => parent?.destination !== 'url',
	},
	pdf: {
		type: 'file',
		name: 'pdf',
		title: 'PDF',
		options: {
			accept: '.pdf',
		},
		hidden: ({parent}) => parent?.destination !== 'pdf',
	},
	email: {
		//
		title: 'E-Mail',
		name: 'email',
		type: 'string',
		hidden: ({parent}) => parent?.destination !== 'email',
	},
	phone: {
		//
		title: 'Telefon',
		name: 'phone',
		type: 'string',
		hidden: ({parent}) => parent?.destination !== 'phone',
	},
};

export function createLink(conf = {}) {
	const {
		//
		useDestinations = ['url', 'pdf', 'email', 'phone'],
		type = 'object', // Must be "object".
		fields: extraFields = [],
		...restConf
	} = conf;

	useDestinations.forEach((name) => {
		if (name in destinations === false) {
			throw Error(`Destination "${name}" does not exist.`);
		}
	});

	const options = useDestinations.map((name) => {
		return {
			value: name,
			title: destinations[name].title,
		};
	});

	return {
		type: 'object',
		name: 'link',

		...restConf,

		fields: [
			{
				type: 'string',
				name: 'destination',
				title: 'Ziel',
				initialValue: options[0].value,
				options: {
					list: options,
				},
			},

			...useDestinations.map((name) => destinations[name]),

			...extraFields,

			{
				type: 'string',
				name: 'target',
				title: ' ',
				initialValue: '_blank',
				options: {
					layout: 'radio',
					list: [
						{value: '_self', title: 'Im selben Fenster öffnen'},
						{value: '_blank', title: 'In neuem Fenster öffnen'},
					],
				},
			},
		],
	};
}

export default createLink();
