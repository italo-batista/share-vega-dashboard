import React, { Component } from "react";
import "./App.css";
import Header from "./layout/Header";
import { Button } from "reactstrap";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header
          appName={this.props.appName}
          currentUser={this.props.currentUser}
        />
        <Button color="danger">Danger!</Button>
        <header className="App-header" />
      </div>
    );
  }
}

export default App;
