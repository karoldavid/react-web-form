import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import TaskForm from "./components/TaskForm";

class App extends Component {
  render() {
    return <TaskForm fields={this.props.fields} />;
  }
}

const mapStateToProps = ({ task: { fields } }) => {
  return {
    fields
  };
};

export default connect(mapStateToProps)(App);
