import React from 'react';
import classNames from 'classnames';
import styles from './MobileMenuSwitcher.less';

const MobileMenuSwitcher = (props) => {
  return (
    <button
      className={styles.root}
      type="button"
      onClick={props.onMenuButtonClick}
    >
      <div className={styles.boxItem}>
        <div className={classNames(styles.item, props.isOpenMenu && styles.active)}>
          <div className={styles.burgerLines} />
        </div>
      </div>
    </button>
  );
};

export default MobileMenuSwitcher;
