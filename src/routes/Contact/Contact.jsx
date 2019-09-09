import React from 'react';
import { ContactForm } from '../../components';
import Post from './images/post.svg';
import Phone from './images/phone.svg';
import Mail from './images/mail.svg';
import Sign from './images/sign.svg';
import API from '../../api';
import styles from './Contact.less';

const PHONE_NUMBER = '7-609-164-258';
const EMAIL = 'nata_vis@mail.ru';
const api = new API();

class Contact extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      showAlert: false,
      sendStatus: '',
      userName: '',
      email: '',
      tel: '',
      location: '',
      date: '',
      message: '',
    }
  }

  onNameChange = (event)=> {
    this.setState({userName: event.target.value});
  };

  onEmailChange = (event)=> {
    this.setState({email: event.target.value});
  };

  onTelChange = (event)=> {
    this.setState({tel: event.target.value});
  };

  onLocationChange = (event)=> {
    this.setState({location: event.target.value});
  };

  onDateChange = (event)=> {
    this.setState({date: event.target.value});
  };

  onMessageChange = (event) => {
    this.setState({message: event.target.value});
  };

  onSubmitMessage = (event) => {
    event.preventDefault();

    const {name, email, tel, data, message} = this.state;

    api.sendMessage({name, email, tel, data, message})
    .then(() => {
      this.setState({sendStatus: 'success'});
      this.setState({showAlert: true});
      this.setState({
        name: '',
        email: '',
        tel: '',
        data: '',
        message: ''
      });
    })
    .catch(() => {
        this.setState({sendStatus: 'error'});
        this.setState({showAlert: true});
      }
    );
  };

  onAlertClose = () => {
    this.setState({showAlert: false});
  };

  render() {
    const FORM_FIELDS = [
      {
        type: 'text',
        name: 'name',
        placeholder: 'Your name',
        required: true,
        action: this.onNameChange,
      },
      {
        type: 'email',
        name: 'email',
        placeholder: 'E-mail',
        required: true,
        action: this.onEmailChange,
      },
      {
        type: 'tel',
        name: 'phone',
        placeholder: 'Phone',
        required: false,
        action: this.onTelChange,
      },
      {
        type: 'text',
        name: 'location',
        placeholder: 'Event location',
        required: false,
        action: this.onLocationChange,
      },
      {
        type: 'text',
        name: 'date',
        placeholder: 'Event date',
        required: false,
        action: this.onDateChange,
      },
    ];

    return (
      <div className={styles.root}>
        <div className={styles.block}>
          <p className={styles.title}>Lets talk...</p>
          <p className={styles.description}>
            I am based in beautiful California.<br/>
            If you are looking for beautiful,
            romantic, natural light images<br/>
            then I would love to hear from you.
            Just drop me a message<br/>
            and I will connect to you!
          </p>
          <p>Other ways to get in touch and connect:</p>
          <p className={styles.text}>
            <a href="tel:7609164258">
              <img
                className={styles.icon}
                src={Phone}
                alt=""
                width="20"
                height="40"
              />
              {PHONE_NUMBER}
            </a>
          </p>
          <p className={styles.text}>
            <a href={`mailto:${EMAIL}`}>
              <img
                className={styles.icon}
                src={Mail}
                alt=""
                width="30"
                height="20"
              />
              {EMAIL}
            </a>
          </p>
          <div className={styles.postImage}>
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
        <ContactForm
          formFields={FORM_FIELDS}
          onAlertClose={this.onAlertClose}
          onMessageChange={this.onMessageChange}
          sendStatus={this.state.sendStatus}
          showAlert={this.state.showAlert}
          onSubmitMessage={this.onSubmitMessage}
        />
      </div>
    );
  }
}

export default Contact;
