import React from 'react';
import './Button.less';

const Button = ({className, onClick, type = 'text', name, text}) => (
	<input
		className={`btn ${className}`}
		onClick={onClick}
		type={type}
		name={name}
		value={text}
	/>
);

export default Button;
