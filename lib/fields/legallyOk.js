export function createLegallyOk() {
	return {
		title: 'Legally OK',
		name: 'code',
		type: 'code',
		options: {
			language: 'html',
			languageAlternatives: [
				{title: 'HTML', value: 'html'},
				{title: 'Javascript', value: 'javascript'},
				{title: 'CSS', value: 'css'},
			],
			withFilename: false,
		},
	};
}

export default createLegallyOk();
