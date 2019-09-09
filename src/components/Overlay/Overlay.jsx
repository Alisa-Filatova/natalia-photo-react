import React from 'react';
import styles from './Overlay.less';

const Overlay = (props) => {
  return <div className={styles.root} onClick={props.onClick} />
};

export default Overlay;
