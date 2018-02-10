import React, { Component } from "react";
import { connect } from "react-redux";
import TaskForm from "./TaskForm";

class AdminPage extends Component {
  render() {
    return <TaskForm fields={this.props.fields} />;
  }
}

const mapStateToProps = ({ task: { fields } }) => {
  return {
    fields
  };
};

export default connect(mapStateToProps)(AdminPage);