import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

import UserMenuButton from "../auth/UserMenuButton";
import SignInButton from "../auth/SignInButton";

import "./Navbar.css";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentUser: null };
  }

  render() {
    let AuthButtons = (
      <div className="navbar-container">
        <SignInButton setCurrentUser={this.props.setCurrentUser} />
        <Link to="/signup">
          <Button size="tiny" onClick={this.showModal}>
            Sign up
          </Button>
        </Link>
      </div>
    );
    if (this.state.currentUser) {
      AuthButtons = (
        <UserMenuButton setCurrentUser={this.props.setCurrentUser} />
      );
    }

    return (
      <div className="App-navbar">
        <div className="navbar-container container">
          <Link to="/">
            <div className="App-header">Share-Vega</div>
          </Link>
          {AuthButtons}
        </div>
      </div>
    );
  }
}

export default Navbar;
