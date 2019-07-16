import React from 'react';
import './NotFound.less';
import Page404 from './404.png';

const NotFound = () => (
  <div className="page__not-found-root">
    <img  className="page__not-found-img" src={Page404} alt="" />
  </div>
);

export default NotFound;
