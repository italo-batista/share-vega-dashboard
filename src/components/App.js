import React, { Component, createContext } from "react";
import "./App.css";
import Navbar from "./layout/Navbar";
import Dashboard from "./dashboard/Dashboard";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { currentUser: "" };
    this.setCurrentUser = this.setCurrentUser.bind(this);
    this.getCurrentUser = this.getCurrentUser.bind(this);
  }

  setCurrentUser = user => {
    this.setState({ currentUser: user });
  };

  getCurrentUser = () => {
    return this.state.currentUser;
  };

  render() {
    return (
      <div className="App">
        <Navbar setCurrentUser={this.setCurrentUser} />
        <div className="container">
          <Dashboard currentUser={this.state.currentUser} />
        </div>
      </div>
    );
  }
}

export default App;
