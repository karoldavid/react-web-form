import React, { Component } from "react";
import { connect } from "react-redux";
import { Snackbar } from "material-ui";
import * as actions from "./actions";
import "./App.css";

class App extends Component {
  render() {
    const { closeSnackbar, message, open } = this.props;
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        {this.props.children}
        <Snackbar
          open={open}
          message={message}
          autoHideDuration={3000}
          onRequestClose={closeSnackbar}
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

export default connect(mapStateToProps, actions)(App);
