import React from 'react';
import './Button.less';

export default class Button extends React.Component {
	render() {
		return (
			<button
				className={`btn ${this.props.className}`}
				onClick={this.props.onClick}
				type={this.props.type}
				name={this.props.name}
			>
				{this.props.text}
			</button>
		);
	}
}