import React from 'react';
import {LayoutContainer} from './context';
import {Card} from '@sanity/ui';

// import './styles.css';

function ArrayField(props) {
	const context = {
		onItemMove: props?.inputProps?.onItemMove,
		items: props?.value,
	};

	return (
		<Card data-custom-field="arrayInlineEditor" padding={0} border={0}>
			<LayoutContainer.Provider value={context}>
				{props.renderDefault(props)}
			</LayoutContainer.Provider>
		</Card>
	);
}

export default ArrayField;
