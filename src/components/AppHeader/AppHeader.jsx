import React from 'react';
import { observer } from 'mobx-react';
import { NavLink } from 'react-router-dom';
import Routes from '../../routes';
import { Logo, LogoCompact, LogoCompactXs } from '../../SvgImage';
import './AppHeader.less';

class AppHeader extends React.Component {

  render() {
    return (
      <header className="root">
        <div className="header">
          <NavLink className="logo" to={Routes[0].path}>
            <picture>
              <source
                media="(max-width:425px)"
                srcSet={LogoCompactXs}
              />
              <source
                media="(max-width:768px)"
                srcSet={LogoCompact}
              />
              <img
                className="logo"
                src={Logo}
                alt="Natalia Biriouk Photography"
              />
            </picture>
          </NavLink>
        </div>
      </header>
    );
  }
}

export default observer(AppHeader)