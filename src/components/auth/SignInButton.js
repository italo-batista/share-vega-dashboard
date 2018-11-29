import React, { Component } from "react";
import { Button, Modal, Form } from "semantic-ui-react";
import API from "../../api";
import "./override.css";

const inlineStyle = {
  modal: {
    marginTop: "auto !important",
    marginLeft: "auto",
    marginRight: "auto",
    height: "20em"
  }
};

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false, formEmail: "", formPassword: "" };
  }

  singIn(user) {
    API.post("auth", user).then(res => {
      const signedUser = res.data;
      this.setState({ formEmail: "", formPassword: "" });
      this.props.setCurrentUser(signedUser);
      this.closeModal();
    });
  }

  handleFormChange = (e, { name, value }) => this.setState({ [name]: value });

  handleFormSubmit = () => {
    const { formEmail, formPassword } = this.state;

    const user = {
      username: formEmail,
      password: formPassword
    };
    this.singIn(user);
  };

  showModal = () => this.setState({ open: true });

  closeModal = () => this.setState({ open: false });

  render() {
    const { open, formEmail, formPassword } = this.state;

    return (
      <div>
        <Button size="tiny" onClick={this.showModal} positive>
          Sign in
        </Button>

        <Modal
          dimmer={true}
          open={open}
          onClose={this.closeModal}
          size="tiny"
          style={inlineStyle.modal}
        >
          <Modal.Header>Share-Vega</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <Form>
                <Form.Input
                  label="Email"
                  value={formEmail}
                  name="formEmail"
                  placeholder="user@mail.com"
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
                  icon="github"
                  labelPosition="left"
                  content="Sign In"
                  onClick={this.handleFormSubmit}
                />
              </Form>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}

export default SignIn;
