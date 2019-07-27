import React from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Alert from '../Alert/Alert';
import './ContactForm.less';

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
      className="form"
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
        className="input-text form__textarea"
        rows="5"
        placeholder="Your message"
        name="message"
        onChange={onMessageChange}
      />
      <Button
        className="btn form__btn"
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
