import React, { Component } from "react";
import { Button } from "semantic-ui-react";

import "../layout/Navbar.css";

class SignIn extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="navbar-container">
        <Button size="tiny" positive>
          Sign in
        </Button>
      </div>
    );
  }
}

export default SignIn;
