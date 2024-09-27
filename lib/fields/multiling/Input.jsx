import react from 'react';

export default (props) => {
	const [_, ...groups] = props.groups;
	return props.renderDefault({...props, groups});
};
