import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import { FlatButton } from "material-ui";
import FormFields from "./FormFields";
import * as actions from "../actions";
import { TASK_FORM_FIELDS } from "../utils/consts";

class TaskForm extends Component {
	onFormSubmit = params => {
		//this.props.reset();
	};

	render() {
		const { handleSubmit } = this.props;
		return (
			<form>
				<FormFields fields={TASK_FORM_FIELDS} />
				<FlatButton type="submit" label="Submit" primary />
			</form>
		);
	}
}

export default reduxForm({
	form: "taskForm"
})(connect()(TaskForm));
