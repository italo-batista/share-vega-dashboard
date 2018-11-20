import React from "react";
import "./Header.css";

class Header extends React.Component {
  render() {
    return <div className="App-header">{this.props.appName}</div>;
  }
}

export default Header;
