import React from "react";
import "./Navbar.css";

const LoggedOutView = props => {
  // if (!props.currentUser) { return ...}
  return null;
};

const LoggedInView = props => {
  // if (!props.currentUser) { return ...}
  return null;
};

class Navbar extends React.Component {
  render() {
    return (
      <div className="App-navbar">
        <LoggedOutView currentUser={this.props.currentUser} />
        <LoggedInView currentUser={this.props.currentUser} />
      </div>
    );
  }
}

export default Navbar;
