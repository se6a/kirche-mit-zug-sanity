import react from 'react';

export default (props) => {
	// If there is more than one language, remove the title.
	// It would be a repetition to the multiling title.

	const newProps = {...props};

	if (props.showTitle === false) {
		delete newProps.title;
	}

	return props.renderDefault(newProps);
};
