import react from 'react';
import {Box, Flex, Stack, Text} from '@sanity/ui';

export default {
	type: 'object',
	name: 'trailer',
	title: 'Trailer',
	fields: [
		{
			name: 'videoId',
			title: 'Vimeo Video ID Deutsch',
			type: 'string',
			validation: (R) => R.regex(/^[0-9a-zA-Z]+$/g).error('Ungültige Zeichen'),
			components: {
				field: (props) => {
					const {inputProps} = props;
					const value = inputProps?.value;

					return (
						<Stack space={4}>
							<Box style={{background: 'black', width: '100%', aspectRatio: '1.8'}}>
								{value?.length > 5 ? (
									<iframe
										src={`https://player.vimeo.com/video/${value}`}
										width="100%"
										height="100%"
										frameBorder="0"
									></iframe>
								) : (
									<Flex
										style={{height: '100%'}}
										padding={4}
										justify={'center'}
										align={'center'}
									>
										<Text style={{color: 'white'}} size={4}>
											Vorschau
										</Text>
									</Flex>
								)}
							</Box>
							{props.renderDefault(props)}
						</Stack>
					);
				},
			},
		},

		{
			name: 'videoIdFr',
			title: 'Vimeo Video ID Französisch',
			type: 'string',
			validation: (R) => R.regex(/^[0-9a-zA-Z]+$/g).error('Ungültige Zeichen'),
		},

		{
			name: 'videoIdIt',
			title: 'Vimeo Video ID Italienisch',
			type: 'string',
			validation: (R) => R.regex(/^[0-9a-zA-Z]+$/g).error('Ungültige Zeichen'),
		},

		{
			name: 'videoIdEn',
			title: 'Vimeo Video ID Englisch',
			type: 'string',
			validation: (R) => R.regex(/^[0-9a-zA-Z]+$/g).error('Ungültige Zeichen'),
		},

		{
			name: 'caption',
			type: 'string',
			title: 'Video Legende',
		},

		{
			type: 'url',
			name: 'captionLink',
			title: 'Video Legende: Link',
		},

		{
			type: 'boolean',
			name: 'showSection',
			initialValue: true,
			title: 'Aktivieren',
			description: 'Die Sektion auf der Webseite anzeigen/verstecken.',
		},
	],
};
