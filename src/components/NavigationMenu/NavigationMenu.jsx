import React from 'react';
import Routes from '../../routes';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from './NavigationMenu.less';

const NavigationMenu = (props) => (
  <nav className={classNames(styles.root, props.isOpenMenu && styles.open)}>
    {Routes.map((item) => (
      <Link
        key={item.title}
        className={classNames(styles.item, item.path === props.location && styles.selected)}
        to={item.path}
        onClick={props.onMenuButtonClick}
      >
        {item.title}
      </Link>
    ))}
  </nav>
);


export default NavigationMenu;
