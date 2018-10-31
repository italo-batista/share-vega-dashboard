import React from "react";
import VisGrid from "./../visgrid/VisGrid";
import dataVisz from '../../static/data_visz.json'

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <VisGrid listVisz={dataVisz}/>
      </div>
    );
  }
}

export default Dashboard;
