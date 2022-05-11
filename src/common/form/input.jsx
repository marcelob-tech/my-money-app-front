import React from 'react';

const input = (props) => {
	return (
		<input
			{...props.input}
			className="form-control"
			placeholder={props.placeholder}
			readOnly={props.readOnly}
			type={props.type}
		/>
	);
};

export default input;
