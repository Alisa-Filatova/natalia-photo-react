import React from 'react';
import Routes from '../../routes';
import { Link } from 'react-router-dom';
import './NavigationMenu.less';

const NavigationMenu = (props) => {
  return (
    <nav className={`navigation ${props.isOpenMenu ? `navigation_open` : ''}`}>
      {Routes.map((item) => (
        <Link
          key={item.title}
          className={`navigation__item ${item.path === props.location ? `selected` : ''}`}
          to={item.path}
          onClick={props.onMenuButtonClick}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
};

export default NavigationMenu;
