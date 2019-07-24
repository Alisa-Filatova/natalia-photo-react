import React from 'react';
import './Input.less';

const Input = (props) => (
  <input
    className={`input-text ${props.className}`}
    onChange={props.onChange}
    type={props.type}
    name={props.name}
    value={props.value}
    placeholder={props.placeholder}
    required={props.required}
  />
);

export default Input;
