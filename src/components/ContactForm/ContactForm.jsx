import React from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import API from '../../api';
import './ContactForm.less';
import { Alert } from "../index";

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


const AUTHORIZATION = `Basic dXNlckBwYXNzd29yZAo=${Math.random()}`;
const END_POINT = 'http://nataliaphoto.me';
const api = new API({endPoint: END_POINT, authorization: AUTHORIZATION});

class ContactForm extends React.Component {

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
    return (
    	<>
				<form
					className="form"
					action=""
					method="post"
					onSubmit={this.onSubmitMessage}
				>
					{FORM_FIELDS.map((item) => (
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
						onChange={this.onMessageChange}
					/>
					<Button
						className="btn form__btn"
						type="submit"
						name="submit"
						text="Send message"
					/>
				</form>
				{this.state.showAlert && (
					<Alert
						type={this.state.sendStatus}
						onClose={this.onAlertClose}
					/>
				)}
			</>
    );
  }
}

export default ContactForm;
