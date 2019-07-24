import React from 'react';
import './Overlay.less';

const Overlay = (props) => {
  return <div className="overlay" onClick={props.onClick} />
};

export default Overlay;
