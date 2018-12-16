import React, { Component } from "react";
import SignUpForm from "./SignUpForm";

import "./SignUp.css";

class SignUpView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container-two-children container">
        <div className="container-child">
          <h2>Why Share Vega?</h2>
          <p>
            Want ideas for your visualizations in Vega? Or just want to learn
            how to do something interesting with Vega? You are in the right
            place!
          </p>
        </div>
        <div className="container-child form-box">
          <SignUpForm />
        </div>
      </div>
    );
  }
}

export default SignUpView;
