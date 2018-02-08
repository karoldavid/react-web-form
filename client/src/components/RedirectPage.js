import React, { Component } from "react";
import { connect } from "react-redux";
import { Snackbar } from "material-ui";

class RedirectPage extends Component {
	render() {
		const { message, open } = this.props;
		return (
			<div>
				<Snackbar
					open={open}
					message={message}
					autoHideDuration={5000}
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

export default connect(mapStateToProps)(RedirectPage);
