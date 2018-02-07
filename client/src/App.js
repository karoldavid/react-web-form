import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./actions";
import "./App.css";
import { RaisedButton } from "material-ui";
import { task } from "./utils/consts";

class App extends Component {
  componentDidMount() {
    this.props.saveTask(task)
  }
  render() {
    return (
      <div className="App">
        <RaisedButton
          label="Get Tasks"
          onClick={() => this.props.fetchTasks()}
        />
      </div>
    );
  }
}

export default connect(null, actions)(App);
