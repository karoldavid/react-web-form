import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import FormFields from "./FormFields";
import { Card, CardTitle, RaisedButton } from "material-ui";
import { validate } from "../utils/helpers";
import * as actions from "../actions"

class TaskForm extends Component {
	onFormSubmit = params => {
		console.log(params);
		this.props.saveTask(params, () => this.props.reset());
	};

	render() {
		const { fields, handleSubmit } = this.props;
		return (
			<div style={{ display: "flex", justifyContent: "center" }}>
				<Card
					style={{
						marginTop: 20,
						width: 600,
						display: "flex",
						justifyContent: "center",
						alignItems: "center"
					}}
					title="Create a Task"
				>
					<CardTitle title="Create a Task" />
					<form onSubmit={handleSubmit(this.onFormSubmit)}>
						<FormFields fields={fields} />
						<div style={{ display: "flex", "justifyContent": "flex-end", marginTop: 10, marginBottom: 10 }}>
							<RaisedButton type="submit" label="Submit" primary />
						</div>
					</form>
				</Card>
			</div>
		);
	}
}

export default reduxForm({
	form: "taskForm",
	validate
})(connect(null, actions)(TaskForm));
