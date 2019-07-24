import React, { RefObject } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import './ContactForm.less';

const FORM_FIELDS = [
  {
    type: 'text',
    name: 'name',
    placeholder: 'Your name',
    required: true,
		ref: this.nameInput,
  },
	{
		type: 'email',
		name: 'email',
		placeholder: 'E-mail',
		required: true,
		ref: this.emailInput,
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

const EMAIL_REGEXP = new RegExp('^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$');
const ERROR_COLOR = 'red';
const BASE_COLOR = 'grey';

class ContactForm extends React.Component {

	constructor(props) {
		super(props);

		this.emailInput = React.createRef();
		this.nameInput = React.createRef();
	}

	handleValidateFields = () => {
		const email = this.emailInput.current.value;
		const name = this.nameInput.current.value;

		if (!EMAIL_REGEXP.test(email)) {
			this.emailInput.current.style.borderColor = ERROR_COLOR;
		} else if (!name) {
			this.nameInput.current.style.borderColor = ERROR_COLOR;
		} else {
			this.emailInput.current.style.borderColor = BASE_COLOR;
			this.nameInput.current.style.borderColor = BASE_COLOR;
		}
	};

	onSubmit = (event) => {
		event.preventDefault();
		this.handleValidateFields();
		this.props.onSubmit();
	};

  render() {
    return (
      <form className="form" action="">
				{FORM_FIELDS.map((item) => (
          <Input
            key={item.name}
            type={item.type}
            name={item.name}
            placeholder={item.placeholder}
            required={item.required}
						ref={item.ref ? item.ref : ''}
						onChange={this.handleValidateFields}
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
					onClick={this.props.onSubmit}
        />
      </form>
    );
  }
}

export default ContactForm;
