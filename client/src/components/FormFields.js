import React, { Component } from "react";
import { Field } from "redux-form";
import { TextField } from "material-ui";
import Moment from "moment";
import momentLocalizer from "react-widgets-moment";
import DateTimePicker from "react-widgets/lib/DateTimePicker";
import "react-widgets/dist/css/react-widgets.css";

Moment.locale("en");
momentLocalizer();

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

	renderDateTimePicker = ({ input: { onChange, value }, showTime }) => (
		<DateTimePicker
			onChange={onChange}
			format="DD MMM YYYY"
			time={showTime}
			value={!value ? null : new Date(value)}
		/>
	);

	makeFields = ({ name, label, type }) => {
		return (
			<div key={name}>
				{type === "dateTime" ? (
					<Field
						name={name}
						showTime={false}
						component={this.renderDateTimePicker}
					/>
				) : (
					<Field
						style={{ width: 400 }}
						key={name}
						name={name}
						component={this.renderTextField}
						label={label}
						type={type}
						parse={value =>
							type === "number" ? Number(value) : String(value)
						}
					/>
				)}
			</div>
		);
	};

	render() {
		return (
			<div>{this.props.fields.map(field => this.makeFields(field))}</div>
		);
	}
}
