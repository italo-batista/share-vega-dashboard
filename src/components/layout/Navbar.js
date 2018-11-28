import React from "react";
import UserMenu from "../auth/UserMenu";
import SignIn from "../auth/SignIn";
import { Button } from "semantic-ui-react";

import "./Navbar.css";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    };
  }

  render() {
    let AuthButton = <SignIn />;
    if (this.state.currentUser) {
      AuthButton = <UserMenu />;
    }

    return <div className="App-navbar">{AuthButton}</div>;
  }
}

export default Navbar;
