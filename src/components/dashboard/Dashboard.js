import React from "react";
import API from "../../api";
import SortBy from "../frontelements/SortBy";
import VisGrid from "./../visgrid/VisGrid";

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

  handleDropDownClick(optName) {
    console.log(optName);
  }

  render() {
    let content;
    if (this.state.isLoaded) {
      content = <VisGrid listVisz={this.state.visualizations} />;
    } else {
      content = <Loader active>Loading</Loader>;
    }

    const sortOptions = ["StarAsc", "StarDesc", "Date"];

    return (
      <div>
        <div className="end-buttons">
          <SortBy options={sortOptions} onClick={this.handleDropDownClick} />
        </div>
        {content}
      </div>
    );
  }
}

export default Dashboard;
