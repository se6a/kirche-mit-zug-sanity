import React, {useCallback} from 'react';
import {Stack, Text, TextArea} from '@sanity/ui';
import {set, unset} from 'sanity';

export default function (props) {
	const {onChange, value = '', id, focusRef, onBlur, onFocus, readOnly} = props;

	const fwdProps = {id, ref: focusRef, onBlur, onFocus, readOnly};
	const handleChange = useCallback(
		(e) => onChange(e.currentTarget.value ? set(e.currentTarget.value) : unset()),
		[onChange],
	);
	return (
		<Stack space={3}>
			<TextArea
				{...fwdProps}
				onChange={handleChange}
				value={value}
				style={{resize: 'vertical'}}
			/>
			<Text muted size={1}>
				{value?.length || 0} Zeichen
			</Text>
		</Stack>
	);
}
