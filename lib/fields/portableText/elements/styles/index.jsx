import React from 'react';
import {Text} from '@sanity/ui';

import cssStyles from './styles.module.css';

export default [
	{title: 'Normal', value: 'normal'},

	{
		title: 'Titel',
		value: 'title',
		component: ({children}) => <span className={cssStyles.title}>{children}</span>,
	},

	{
		title: 'Untertitel',
		value: 'subtitle1',
		component: ({children}) => <span className={cssStyles.subtitle1}>{children}</span>,
	},

	{
		title: 'Untertitel 2',
		value: 'subtitle2',
		component: ({children}) => <span className={cssStyles.subtitle2}>{children}</span>,
	},

	{
		title: 'Zitat',
		value: 'quote',
		component: ({children}) => (
			<Text size={4} style={{fontStyle: 'italic'}}>
				«{children}»
			</Text>
		),
	},

	{
		title: 'Quelle',
		value: 'source',
		component: ({children}) => <Text size={1}>— {children}</Text>,
	},
];
