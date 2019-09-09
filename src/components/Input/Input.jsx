import React from 'react';
import classNames from 'classnames';
import styles from './Input.less';

const Input = (props) => (
  <input
    className={classNames(styles.root, props.className)}
    onChange={props.onChange}
    type={props.type}
    name={props.name}
    value={props.value}
    placeholder={props.placeholder}
    required={props.required}
  />
);

export default Input;
