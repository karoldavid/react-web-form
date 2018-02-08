import React, { Component } from "react";
import { Field } from "redux-form";
import { TextField, SelectField, MenuItem } from "material-ui";
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
					format="DD MMM YYYY HH:mm"
					time={showTime}
					value={!value ? null : new Date(value)}
				/>
			</div>
		);
	};

	renderSelectField = ({
		input,
		label,
		data,
		name,
		valueField,
		meta: { touched, error },
	}) => {
		return (
			<SelectField
				style={{ textTransform: "capitalize" }}
				name={name}
				hintText={label}
				floatingLabelText={label}
				errorText={touched && error}
				value={input.value}
				onChange={(event, index, value) => {
					console.log(value);
					input.onChange(value);
				}}
			>
				{data.map((item, index) => (
					<MenuItem key={index} value={item} primaryText={item} />
				))}
			</SelectField>
		);
	};

	makeFields = ({ name, label, type, data }) => {
		return (
			<div key={name} style={{ width: 400 }}>
				{type === "dateTime" ? (
					<Field
						name={name}
						showTime
						component={this.renderDateTimePicker}
						label={label}
					/>
				) : type === "select" ? (
					<Field
						name={name}
						component={this.renderSelectField}
						hintText={label}
						label={label}
						data={data}
						valueField="value"
						//errorText={touched && error}
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
