import React from 'react';
import { ContactForm } from '../../components'

export default class Contact extends React.Component {
  render() {
    return (
      <div className="root">
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
              <i className="icon icon_phone"/>
              7-609-164-258
            </a>
          </p>
          <p className="contact__text">
            <a className="base-link" href="mailto:natalia.biriouk@gmail.com">
              <i className="icon icon_mail"/>
              nata_vis@mail.ru
            </a>
          </p>
        </div>
        <ContactForm />
      </div>
    );
  }

}