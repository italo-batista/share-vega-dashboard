import React, { Component } from "react";
import "./App.css";
import Navbar from "./layout/Navbar";
import Dashboard from "./dashboard/Dashboard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar currentUser={this.props.currentUser} />
        <div className="container">
          <Dashboard />
        </div>
      </div>
    );
  }
}

export default App;
