import React from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Alert from '../Alert/Alert';
import classNames from 'classnames';
import styles from './ContactForm.less';

const ContactForm = (
  {
    onSubmitMessage,
    formFields,
    onMessageChange,
    showAlert,
    sendStatus,
    onAlertClose
  }) => (
  <>
    <form
      className={styles.root}
      action=""
      method="post"
      onSubmit={onSubmitMessage}
    >
      {formFields.map((item) => (
        <Input
          key={item.name}
          type={item.type}
          name={item.name}
          placeholder={item.placeholder}
          required={item.required}
          onChange={item.action}
        />
      ))}
      <textarea
        className={classNames(styles.inputText, styles.textArea)}
        rows="5"
        placeholder="Your message"
        name="message"
        onChange={onMessageChange}
      />
      <Button
        className={styles.btn}
        type="submit"
        name="submit"
        text="Send message"
      />
    </form>
    {showAlert && (
      <Alert
        type={sendStatus}
        onClose={onAlertClose}
      />
    )}
  </>
);


export default ContactForm;
