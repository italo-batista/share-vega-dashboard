import React from "react";
import VisGrid from "./../visgrid/VisGrid";
import dataVisz from "../../static/data_visz.json";
import "./Dashboard.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <VisGrid listVisz={dataVisz} />
      </div>
    );
  }
}

export default Dashboard;
