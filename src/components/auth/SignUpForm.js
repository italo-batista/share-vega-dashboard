import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import { Link } from "react-router-dom";

import API from "../../api";

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  resetState = () => {
    this.setState({
      formName: "",
      formUsername: "",
      formEmail: "",
      formPassword: ""
    });
  };

  singUp(user) {
    API.post("user", user).then(res => {
      const signedUser = res.data;
      this.resetState();
      this.props.setCurrentUser(signedUser);
      this.closeModal();
    });
  }

  handleFormChange = (e, { name, value }) => this.setState({ [name]: value });

  handleFormSubmit = () => {
    const { formName, formUsername, formEmail, formPassword } = this.state;

    const user = {
      username: formUsername,
      password: formPassword,
      name: formName,
      email: formEmail
    };
    this.singUp(user);
  };

  render() {
    const { formName, formUsername, formEmail, formPassword } = this.state;

    return (
      <div>
        <Form>
          <Form.Input
            label="Name"
            value={formName}
            name="formName"
            placeholder="Your Name"
            onChange={this.handleFormChange}
          />
          <Form.Input
            label="Username"
            value={formUsername}
            name="formUsername"
            placeholder="Pick a username"
            onChange={this.handleFormChange}
          />
          <Form.Input
            label="Email"
            value={formEmail}
            name="formEmail"
            placeholder="you@example.com"
            onChange={this.handleFormChange}
          />
          <Form.Input
            label="Password"
            value={formPassword}
            name="formPassword"
            type="password"
            onChange={this.handleFormChange}
          />
          <Form.Button
            type="button"
            positive
            fluid
            content="Sign Up for Share-Vega"
            onClick={this.handleFormSubmit}
          />
        </Form>
      </div>
    );
  }
}

export default SignUpForm;
