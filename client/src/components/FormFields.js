import React, { Component } from "react";
import { Field } from "redux-form";
import { TextField } from "material-ui";

export default class FormFields extends Component {
	renderTextField = ({
		input,
		label,
		meta: { touched, error },
		...custom
	}) => (
		<TextField
			hintText={label}
			floatingLabelText={label}
			errorText={touched && error}
			{...input}
			{...custom}
		/>
	);

	makeFields = ({ name, label, type }) => {
		return (
			<div key={name}>
				<Field key={name}
					name={name}
					component={this.renderTextField}
					label={label}
					type={type}
					parse={value => type === "number" ? Number(value): String(value)}
				/>
			</div>
		);
	};

	render() {
		return (
			<div>{this.props.fields.map(field => this.makeFields(field))}</div>
		);
	}
}
