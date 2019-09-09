import React from 'react';
import { Button, Overlay } from '../../components';
import ErrorIcon from './icons/error.svg';
import SuccessIcon from './icons/success.svg';
import classNames from 'classnames';
import styles from './Alert.less';

const Alert = ({type = 'success', onClose}) => {
  return (
    <>
      <div className={classNames(styles.root, styles[type])}>
        <div className={styles.containerHeader}>
          <img
            src={type === 'success' ? SuccessIcon : ErrorIcon}
            className={styles.icon}
            alt=""
          />
        </div>
        <div className={styles.containerContent}>
          <h3 className={styles.title}>{type === 'success' ? 'Thank you!' : 'Oops!'}</h3>
          <p className={styles.message}>
            {type === 'success' ?
              'Your message has been sent. I will contact you soon.' :
              'Something wrong. Try again later.'
            }
          </p>
          <Button
            type="button"
            className={classNames(styles.btn, styles[type])}
            onClick={onClose}
            text="Close"
          >
          </Button>
        </div>
      </div>
      <Overlay onClick={onClose} />
    </>
  );
};

export default Alert;
