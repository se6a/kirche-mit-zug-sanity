import {CONTENT_LANGUAGES} from '/config.js';
import FieldComponent from './Field.jsx';
import InputComponent from './Input.jsx';
import ChildFieldComponent from './ChildField.jsx';

export function createMultiling({title = '', name = '', ...conf}) {
	return {
		type: 'object',
		name: name,
		title: title || name,

		components: {
			field: FieldComponent,
			input: InputComponent,
		},

		groups: CONTENT_LANGUAGES.map((lang, i) => ({
			name: lang,
			title: lang.toUpperCase(),
			default: i === 0,
		})),

		fields: [
			...CONTENT_LANGUAGES.map((lang) => {
				return {
					...conf,
					title: title,
					group: lang,
					name: lang,
					components: {
						field: (props) => (
							<ChildFieldComponent
								showTitle={CONTENT_LANGUAGES.length < 2}
								{...props}
							></ChildFieldComponent>
						),
					},
				};
			}),

			{
				name: 'isMultiling',
				type: 'boolean',
				initialValue: true,
				readOnly: true,
				hidden: true,
			},
		],
	};
}
