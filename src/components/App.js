import React, { Component, createContext } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./layout/Navbar";
import Dashboard from "./dashboard/Dashboard";
import VisView from "./visualization/VisView";
import SignUpView from "./auth/SignUpView";
import {UserContext} from "./auth/UserContext"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: "",
      setCurrentUser: (user) => {
        this.setState(() => ({ currentUser: user }));
      }
    };
  }
  
  render() {
    const DashboardComp = props => {
      return <Dashboard currentUser={this.state.currentUser} />;
    };

    const SignUpViewComp = props => {
      return <SignUpView />;
    };
  
    let NavbarComp = (
      <UserContext.Consumer>
        {(context) => <Navbar setCurrentUser={context.setCurrentUser} />}
      </UserContext.Consumer>
    );
    
    return (
      <div className="App">
        <UserContext.Provider value={this.state}>
          {NavbarComp}
          <div className="container">
            <Switch>
              <Route exact path="/" render={DashboardComp} />
              <Route exact path="/signup" component={SignUpViewComp} />
              <Route exact path="/visualization/:vis_id" component={VisView} />
            </Switch>
          </div>
        </UserContext.Provider>
      </div>
    );
  }
}

export default App;
