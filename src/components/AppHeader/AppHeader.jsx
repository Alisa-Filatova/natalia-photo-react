import React from 'react';
import { NavLink } from 'react-router-dom';
import Routes from '../../routes';
import Logo from './images/logo.svg';
import LogoCompact from './images/logo-compact.svg';
import LogoCompactXs from './images/logo-compact-xs.svg';
import './AppHeader.less';
import { MobileMenuSwitcher } from "../index";

const AppHeader = (props) => (
  <header className="header__root">
    <div className="header">
      <NavLink
        className="logo"
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
            className="logo"
            src={Logo}
            alt="Natalia Biriouk Photography"
          />
        </picture>
      </NavLink>
      <MobileMenuSwitcher
        isOpenMenu={props.isOpenMenu}
        onMenuButtonClick={props.onMenuButtonClick}
      />
    </div>
  </header>
);

export default AppHeader;
