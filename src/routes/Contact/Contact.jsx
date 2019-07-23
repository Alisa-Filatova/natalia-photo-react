import React from 'react';
import { ContactForm, Alert } from '../../components';
import Post from './images/post.svg';
import Phone from './images/phone.svg';
import Mail from './images/mail.svg';
import Sign from './images/sign.svg';
import './Contact.less';

const PHONE_NUMBER = '7-609-164-258';
const EMAIL = 'nata_vis@mail.ru';

const Contact = () => (
  <div className="contact">
    <div className="contact__block">
      <p className="contact__title">Lets talk...</p>
      <p className="contact__description">
        I am based in beautiful California.<br/>
        If you are looking for beautiful,
        romantic, natural light images<br/>
        then I would love to hear from you.
        Just  drop me a message<br/>
        and I will connect to you!
      </p>
      <p className="contact__second-title">
        Other ways to get in touch and connect:
      </p>
      <p className="contact__text">
        <a className="base-link" href="tel:7609164258">
          <img
            className="icon icon_phone"
            src={Phone}
            alt=""
            width="20"
            height="40"
          />
          {PHONE_NUMBER}
        </a>
      </p>
      <p className="contact__text">
        <a className="base-link" href={`mailto:${EMAIL}`}>
          <img
            className="icon icon_mail"
            src={Mail}
            alt=""
            width="30"
            height="20"
          />
          {EMAIL}
        </a>
      </p>
      <div className="postImage">
        <img
          src={Post}
          alt=""
          width="250"
        />
        <img
          src={Sign}
          alt=""
          width="200"
        />
      </div>
    </div>
    <ContactForm />
    <Alert />
  </div>
);

export default Contact;
