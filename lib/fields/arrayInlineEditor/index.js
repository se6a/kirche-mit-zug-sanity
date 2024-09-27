import ArrayField from './ArrayField';
import Item from './Item';

export function createArrayInlineItem(conf = {}) {
	return {
		type: 'object',
		components: {
			item: Item,
		},
		...conf,
	};
}

export function createArrayInlineEditor(conf = {}) {
	const {of: _of = [], allowNewItems = true, ...restConf} = conf;

	return {
		type: 'array',
		name: 'arrayInlineEditor',
		components: {
			field: ArrayField,
			...(allowNewItems === false
				? {input: (props) => props.renderDefault({...props, arrayFunctions: () => null})}
				: {}),
		},

		of: _of.map((inlineItem, i) =>
			createArrayInlineItem({...inlineItem, name: inlineItem?.name || `inlineItem${i}`}),
		),

		...restConf,
	};
}
