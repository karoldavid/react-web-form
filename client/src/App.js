import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./actions";
import "./App.css";
import TaskForm from "./components/TaskForm";

class App extends Component {
  render() {
    return <TaskForm />;
  }
}

export default connect(null, actions)(App);
