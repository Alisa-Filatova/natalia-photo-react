import React from 'react';
import './Button.less';

const Button = (props) => (
	<button
		className={`btn ${props.className}`}
		onClick={props.onClick}
		type={props.type}
		name={props.name}
	>
		{props.text}
	</button>
);

export default Button;
