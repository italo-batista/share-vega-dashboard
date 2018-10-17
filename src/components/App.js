import React, { Component } from "react";
import "./App.css";
import Header from "./layout/Header";
import Dashboard from "./dashboard/Dashboard";

class App extends Component {
  render() {
    return (
      <div className="App-header">
        <Header appName="Share-Vega" currentUser={this.props.currentUser} />
        <Dashboard />
      </div>
    );
  }
}

export default App;
