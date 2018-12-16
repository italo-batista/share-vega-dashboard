import React, { Component, createContext } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./layout/Navbar";
import Dashboard from "./dashboard/Dashboard";
import VisView from "./visualization/VisView";
import SignUpView from "./auth/SignUpView";

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
    const DashboardComp = props => {
      return <Dashboard currentUser={this.state.currentUser} />;
    };

    const SignUpViewComp = props => {
      return <SignUpView />;
    };

    return (
      <div className="App">
        <Navbar setCurrentUser={this.setCurrentUser} />
        <div className="container">
          <Switch>
            <Route exact path="/" render={DashboardComp} />
            <Route exact path="/signup" component={SignUpViewComp} />
            <Route exact path="/visualization/:vis_id" component={VisView} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
