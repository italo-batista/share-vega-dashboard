import React, { Component } from "react";
import { Button } from "semantic-ui-react";

class SignIn extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Button size="tiny" positive>
        Sign in
      </Button>
    );
  }
}

export default SignIn;
