import React from 'react';
import './MobileMenuSwitcher.less';

const MobileMenuSwitcher = (props) => {
  return (
    <button
      className={`${props.isOpenMenu ? 'close-btn main-nav__close-btn' : 'menu-open main-nav__menu-open'}`}
      type="button"
      onClick={props.onMenuButtonClick}
    >
      {props.isOpenMenu ?  'Close' : 'Menu'}
    </button>
  );
};

export default MobileMenuSwitcher;
