import React from "react";
import UserMenuButton from "../auth/UserMenuButton";
import SignInButton from "../auth/SignInButton";

import "./Navbar.css";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentUser: null };
  }

  render() {
    let AuthButton = (
      <SignInButton setCurrentUser={this.props.setCurrentUser} />
    );
    if (this.state.currentUser) {
      AuthButton = (
        <UserMenuButton setCurrentUser={this.props.setCurrentUser} />
      );
    }

    return (
      <div className="App-navbar">
        <div className="navbar-container container">
          <div className="App-header">Share-Vega</div>
          {AuthButton}
        </div>
      </div>
    );
  }
}

export default Navbar;
