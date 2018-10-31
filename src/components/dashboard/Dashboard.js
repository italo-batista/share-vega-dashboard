import React from "react";
import VisGrid from "./../visgrid/VisGrid";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  render() {
    return (
      <div>
        <VisGrid />
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default Dashboard;
