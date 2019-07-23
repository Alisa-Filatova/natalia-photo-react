import React from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import './ContactForm.less';

const FORM_FIELDS = [
  {
    type: 'text',
    name: 'name',
    placeholder: 'Your name',
    required: true,
  },
	{
		type: 'email',
		name: 'email',
		placeholder: 'E-mail',
		required: true,
	},
	{
		type: 'tel',
		name: 'phone',
		placeholder: 'Phone',
		required: false,
	},
	{
		type: 'text',
		name: 'location',
		placeholder: 'Event location',
		required: false,
	},
	{
		type: 'text',
		name: 'date',
		placeholder: 'Event date',
		required: false,
	},
];

class ContactForm extends React.Component {
  render() {
    return (
      <form className="form">
				{FORM_FIELDS.map((item) => (
          <Input
            key={item.name}
            type={item.type}
            name={item.name}
            placeholder={item.placeholder}
            required={item.required}
          />
        ))}
        <textarea
          className="input-text form__textarea"
          rows="5"
          placeholder="Your message"
          name="message"
				/>
        <Button
          className="btn form__btn"
          type="submit"
          name="submit"
          text="Send message"
        />
      </form>
    );
  }
}

export default ContactForm;
