import react from 'react';
import './field.module.css';

const Wrap = ({showTitle = false, children}) => (
	<div data-custom-show-title={showTitle} data-custom-field="multiling">
		{children}
	</div>
);

export default (props) => {
	const languages = props.schemaType.groups;

	if (languages.length > 1) {
		return <Wrap>{props.renderDefault(props)}</Wrap>;
	}

	const inputProps = {
		...props.inputProps,
		groups: [],
		showTitle: true,
	};

	return <Wrap showTitle={true}>{inputProps.renderInput(inputProps)}</Wrap>;
};
