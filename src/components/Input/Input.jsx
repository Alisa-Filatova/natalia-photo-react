import React from 'react';
import './Input.less';

export default class Input extends React.Component {
  render() {
		return (
			<input
				className={`input-text ${this.props.className}`}
				onChange={this.props.onChange}
				type={this.props.type}
				name={this.props.name}
				value={this.props.value}
        placeholder={this.props.placeholder}
        required={this.props.required}
			/>
		);
	}
}