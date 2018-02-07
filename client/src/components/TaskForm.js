import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import FormFields from "./FormFields";
import * as actions from "../actions";
import { TASK_FORM_FIELDS } from "../utils/consts";
import { Card, FlatButton } from "material-ui";

class TaskForm extends Component {
	onFormSubmit = params => {
		console.log(params);
		//this.props.reset();
	};

	render() {
		const { handleSubmit } = this.props;
		return (
			<div style={{ display: "flex", justifyContent: "center" }}>
				<Card style={{ marginTop: 50, width: 400, display: "flex", justifyContent: "center", alignItems: "center" }}>
					<form onSubmit={handleSubmit(this.onFormSubmit)}>
						<FormFields fields={TASK_FORM_FIELDS} />
						<FlatButton type="submit" label="Submit" primary />
					</form>
				</Card>
			</div>
		);
	}
}

export default reduxForm({
	form: "taskForm"
})(connect()(TaskForm));
