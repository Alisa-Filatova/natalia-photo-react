import React from 'react';
import './MobileMenuSwitcher.less';

const MobileMenuSwitcher = (props) => {
  return (
    <button
      className="menu-wrapper"
      type="button"
      onClick={props.onMenuButtonClick}
    >
      <div className="box-item">
        <div className={`menu-item ${props.isOpenMenu ? 'active' : ''}`}>
          <div className="burger-lines"/>
        </div>
      </div>
    </button>
  );
};

export default MobileMenuSwitcher;
