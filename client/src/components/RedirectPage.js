import React, { Component } from "react";
import { connect } from "react-redux";
import { Snackbar } from "material-ui";
import * as actions from "../actions";

class RedirectPage extends Component {
	render() {
		const { message, open } = this.props;
		return (
			<div>
				<Snackbar
					open={open}
					message={message}
					autoHideDuration={5000}
					onRequestClose={this.props.closeSnackbar}
				/>
			</div>
		);
	}
}

const mapStateToProps = ({ task: { message, open } }) => {
	return {
		message,
		open
	};
};

export default connect(mapStateToProps, actions)(RedirectPage);
