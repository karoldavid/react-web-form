import React, { Component } from "react";
import { Field } from "redux-form";
import { TextField } from "material-ui";
import Moment from "moment";
import momentLocalizer from "react-widgets-moment";
import DateTimePicker from "react-widgets/lib/DateTimePicker";
import DropdownList from "react-widgets/lib/DropdownList";
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

	renderDateTimePicker = ({
		input: { onChange, value },
		label,
		showTime,
		meta: { touched, error }
	}) => {
		return (
			<div>
				<DateTimePicker
					style={{ width: 400 }}
					onChange={onChange}
					placeholder={error && touched ? error : label}
					format="DD MMM YYYY HH:MM"
					time={showTime}
					value={!value ? null : new Date(value)}
				/>
			</div>
		);
	};

	renderDropdownList = ({ label, input, data, valueField, meta: { touched, error } }) => {
		return (
			<div style={{marginTop: 20}}>
			<label>{label}</label>
			<DropdownList
				style={{ width: 400, textTransform: "capitalize" }}
				{...input}
				data={data}
				value={input[valueField] ? input[valueField] : touched && error ? error : ""}
				onChange={input.onChange}
			/>
			</div>
		);
	};

	makeFields = ({ name, label, type, data }) => {
		return (
			<div key={name}>
				{type === "dateTime" ? (
					<Field
						name={name}
						showTime
						component={this.renderDateTimePicker}
						label={label}
					/>
				) : type === "select" ? (
					<Field
						style={{ width: 400 }}
						name={name}
						component={this.renderDropdownList}
						data={data}
						valueField="value"
						label={label}
					/>
				) : (
					<Field
						style={{ width: 400 }}
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
