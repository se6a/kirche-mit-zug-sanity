import Input from './Input';

export function createTextWithCount(conf = {}) {
	return {
		name: 'textWithCount',
		type: 'text',
		components: {
			input: Input,
		},

		...conf,
	};
}

export default createTextWithCount();
