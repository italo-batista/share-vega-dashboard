import React, { Component } from "react";
import "./App.css";
import Header from "./layout/Header";
import Navbar from "./layout/Navbar";
import Dashboard from "./dashboard/Dashboard";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar currentUser={this.props.currentUser} />
        <div className="container">
          <Header appName="Share-Vega" />
          <Dashboard />
        </div>
      </div>
    );
  }
}

export default App;
