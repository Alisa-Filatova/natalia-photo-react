import React from 'react';
import { ContactForm } from '../../components';
import { Post, Sign, Phone, Mail } from '../../SvgImage';
import './Contact.less';

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
        <a className="base-link" href="tel:4104935920">
          <img className="icon icon_phone" src={Phone} alt="" width="20" height="40" />
          7-609-164-258
        </a>
      </p>
      <p className="contact__text">
        <a className="base-link" href="mailto:natalia.biriouk@gmail.com">
          <img className="icon icon_mail" src={Mail} alt="" width="30" height="20" />
          nata_vis@mail.ru
        </a>
      </p>
      <div>
        <img className="icon icon_post" src={Post} alt="" width="250" />
        <img className="icon icon_sign" src={Sign} alt="" width="200" />
      </div>
    </div>
    <ContactForm />
  </div>
);

export default Contact;
