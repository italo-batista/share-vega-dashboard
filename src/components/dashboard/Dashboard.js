import React from "react";
import VisGrid from "./../visgrid/VisGrid";
import dataVisz from "../../static/data_visz.json";
import API from "../../api";

import { Loader } from "semantic-ui-react";

import "./Dashboard.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      visualizations: []
    };
  }

  componentDidMount() {
    API.get("visualization").then(res => {
      const visualizations = res.data;
      this.setState({ isLoaded: true, visualizations: visualizations });
    });
  }

  render() {
    let content;
    if (this.state.isLoaded) {
      content = <VisGrid listVisz={this.state.visualizations} />;
    } else {
      content = <Loader active>Loading</Loader>;
    }

    return <div>{content}</div>;
  }
}

export default Dashboard;
