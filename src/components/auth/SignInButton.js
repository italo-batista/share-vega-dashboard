import React, { Component } from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";

import "./override.css";

const inlineStyle = {
  modal: {
    marginTop: "auto !important",
    marginLeft: "auto",
    marginRight: "auto",
    height: "15em"
  }
};

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  showModal = () => this.setState({ open: true });

  closeModal = () => this.setState({ open: false });

  render() {
    const { open } = this.state;

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
              <p>Beleza</p>
              <Button
                positive
                icon="checkmark"
                labelPosition="left"
                content="Sign In"
                onClick={this.closeModal}
              />
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}

export default SignIn;
