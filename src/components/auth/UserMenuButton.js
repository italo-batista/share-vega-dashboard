import React, { Component } from "react";
import { Button } from "semantic-ui-react";

class UserMenuButton extends Component {
  constructor(props) {
    super(props);
  }
  
  logOutUser() {
    // const noUser = {username: undefined, email: undefined, name: undefined};
    // let user = {username: this.props.currentUser.username};
    // API.delete("auth", user).then(res => {
    //   this.props.setCurrentUser(noUser);
    // });
  }

  render() {
    return <Button basic color='green' onClick={this.logOutUser} >Log out</Button>;
  }
}

export default UserMenuButton;
