import React from 'react';
import { Button, Overlay } from '../../components';
import ErrorIcon from './icons/error.svg';
import SuccessIcon from './icons/success.svg';
import './Alert.less';

const Alert = ({type = 'success', onClose}) => {
  return (
    <>
      <div className="alert 'alert_show">
        <div className="alert__container alert__container_header">
          <img
            src={type === 'success' ? SuccessIcon : ErrorIcon}
            className="alert__icon"
            alt=""
          />
        </div>
        <div className="alert__container alert__container_content">
          <h3 className="alert__title">{type === 'success' ? 'Thank you!' : 'Oops!'}</h3>
          <p className="alert__message">
            {type === 'success' ?
              'Your message has been sent. I will contact you soon.' :
              'Something wrong. Try again later.'
            }
          </p>
          <Button
            type="button"
            className={`btn alert__btn alert__btn_${type}`}
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
