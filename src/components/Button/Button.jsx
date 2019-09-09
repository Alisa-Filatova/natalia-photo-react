import React from 'react';
import classNames from 'classnames';
import styles from './Button.less';

const Button = ({className, onClick, type = 'text', name, text}) => (
  <input
    className={classNames(styles.root, className)}
    onClick={onClick}
    type={type}
    name={name}
    value={text}
  />
);

export default Button;
