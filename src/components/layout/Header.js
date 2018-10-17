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
      <nav className="navbar navbar-light">
        <div className="container">
          <LoggedOutView currentUser={this.props.currentUser} />
          <LoggedInView currentUser={this.props.currentUser} />
        </div>
      </nav>
    );
  }
}

export default Header;
