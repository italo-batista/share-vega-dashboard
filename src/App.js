import React, { Component } from "react";
import "./App.css";
import Code from "./Code";
import { Button } from "reactstrap";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button color="danger">Danger!</Button>
        <header className="App-header" />
        <Code plus="*">src/App.js</Code>
      </div>
    );
  }
}

export default App;
