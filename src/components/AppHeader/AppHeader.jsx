import React from 'react';
import { Logo, LogoCompact, LogoCompactXs } from '../../SvgImage';
import './AppHeader.less';

export default class AppHeader extends React.Component {

  render() {
    const NAVIGATION = [
      { to: '/home', title: 'Home' },
      { to: '/portrait', title: 'Portrait' },
      { to: '/newborn', title: 'Newborn' },
      { to: '/wedding', title: 'Wedding' },
      { to: '/family', title: 'Family' },
      { to: '/event', title: 'Event' },
      { to: '/maternity', title: 'Maternity' },
      { to: '/about', title: 'About me' },
      { to: '/contact', title: 'Contact' },
    ];

    return (
      <header className="root">
        <div className="header">
          <a className="logo" href="/home">
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
          </a>
        </div>
        <nav className="navigation">
          {NAVIGATION.map((item) => (
            <a key={item.title} className="navigation-item" href={item.to}>
              {item.title}
            </a>
          ))}
        </nav>
      </header>
    );
  }
}