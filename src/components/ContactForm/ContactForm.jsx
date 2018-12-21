import React from 'react';
import './ContactForm.less';

export default class ContactForm extends React.Component {
    render() {
        return (
            <form className="form">
                <input
                    className="input-text"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                />
                <input
                    className="input-text"
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    required
                />
                <input
                    className="input-text"
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                />
                <input
                    className="input-text"
                    type="text"
                    name="location"
                    placeholder="Event location"
                />
                <input
                    className="input-text"
                    type="text"
                    name="date"
                    placeholder="Event date"
                />
                <textarea
                    className="input-text form__textarea"
                    rows="5"
                    placeholder="Your message"
                    name="message"
                />
                <input
                    className="btn form__btn"
                    type="submit"
                    name="submit"
                    value="Send message"
                />
            </form>
        );
    }
}