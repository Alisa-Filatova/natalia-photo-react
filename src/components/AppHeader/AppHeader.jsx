import React from 'react';
import { NavLink } from 'react-router-dom';
import Routes from '../../routes';
import Logo from './images/logo.svg';
import LogoCompact from './images/logo-compact.svg';
import LogoCompactXs from './images/logo-compact-xs.svg';
import { MobileMenuSwitcher, NavigationMenu } from '../index';
import classNames from 'classnames';
import styles from './AppHeader.less';

const AppHeader = (props) => (
  <header className={classNames(styles.root, props.isOpenMenu && styles.opened)}>
    <NavLink
      className={styles.logo}
      to={Routes[0].path}
    >
      <picture>
        <source
          media="(max-width:425px)"
          srcSet={LogoCompactXs}
        />
        <source
          media="(max-width:1024px)"
          srcSet={LogoCompact}
        />
        <img
          className={styles.logo}
          src={Logo}
          alt="Natalia Biriouk Photography"
        />
      </picture>
    </NavLink>
    <NavigationMenu
      isOpenMenu={props.isOpenMenu}
      location={props.pathname}
      onMenuButtonClick={props.onMenuButtonClick}
    />
    <MobileMenuSwitcher
      isOpenMenu={props.isOpenMenu}
      onMenuButtonClick={props.onMenuButtonClick}
    />
  </header>
);

export default AppHeader;
