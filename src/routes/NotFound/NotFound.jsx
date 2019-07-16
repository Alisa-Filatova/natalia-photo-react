import React from 'react';
import './NotFound.less';
const Page404 = require('./404.png');

const NotFound = () => (
  <div className="page__not-found-root">
    <img  className="page__not-found-img" src={Page404} alt="" />
  </div>
);

export default NotFound;
