import React from "react";

const LoggedOutView = props => {
  // if (!props.currentUser) { return ...}
  return null;
};

const LoggedInView = props => {
  // if (!props.currentUser) { return ...}
  return null;
};

class Header extends React.Component {
  render() {
    return (
      <div className="container">
        {this.props.appName}
        <LoggedOutView currentUser={this.props.currentUser} />
        <LoggedInView currentUser={this.props.currentUser} />
      </div>
    );
  }
}

export default Header;
