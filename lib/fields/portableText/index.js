export function createPortableText(conf = {}) {
	const {
		//
		of: _of = [],
		styles = null,
		decorators = null,
		annotations = null,
		lists = null,
		...restConf
	} = conf;

	return {
		title: 'Formatierter Text',
		name: 'portableText',
		type: 'array',
		of: [
			{
				type: 'block',
				...(Array.isArray(styles) ? {styles} : {}),
				...(Array.isArray(lists) ? {lists} : {}),
				marks: {
					...(Array.isArray(decorators) ? {decorators} : {}),
					...(Array.isArray(annotations) ? {annotations} : {}),
				},
			},
			..._of,
		],
		...restConf,
	};
}

export default createPortableText();
