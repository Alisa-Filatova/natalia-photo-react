import React from 'react';
import { MetaTags } from '../../components';
import Page404 from './404.png';
import styles from './NotFound.less';

const NotFound = () => (
  <div className={styles.root}>
    <MetaTags title="Not Found" />
    <img  className={styles.image} src={Page404} alt="" />
  </div>
);

export default NotFound;
