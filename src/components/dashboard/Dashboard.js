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
    this.getCurrentUser = this.getCurrentUser.bind(this);
    this.handleStarClick = this.handleStarClick.bind(this);
  }

  componentDidMount() {
    API.get("visualization").then(res => {
      const visualizations = res.data;
      this.setState({ isLoaded: true, visualizations: visualizations });
    });
  }

  getCurrentUser() {
    // TO DO
    return "5bb8f05d6e52fb546a930f96";
  }

  handleDropDownClick(optName) {
    // TO DO
    console.log(optName);
  }

  starVis(bodyRequest) {
    const visId = bodyRequest.visualization_id;
    API.post("star", bodyRequest).then(res => {
      let visz = this.state.visualizations;
      for (var vis of visz) {
        if (vis._id === visId) {
          vis.userStars = vis.userStars.concat(this.getCurrentUser());
        }
      }
      this.setState({ visualizations: visz });
    });
  }

  unstarVis(bodyRequest) {
    const visId = bodyRequest.visualization_id;
    const config = { data: bodyRequest };
    API.delete("star", config).then(res => {
      let visz = this.state.visualizations;
      for (var vis of visz) {
        if (vis._id === visId) {
          vis.userStars = vis.userStars.filter(userId => {
            return userId == this.getCurrentUser();
          });
        }
      }
      this.setState({ visualizations: visz });
    });
  }

  handleStarClick(visId, restMethod) {
    const bodyRequest = {
      visualization_id: visId,
      user_id: this.getCurrentUser()
    };
    if (restMethod == "POST") {
      this.starVis(bodyRequest);
    } else if (restMethod == "DELETE") {
      this.unstarVis(bodyRequest);
    }
  }

  render() {
    let content;
    if (this.state.isLoaded) {
      content = (
        <VisGrid
          listVisz={this.state.visualizations}
          handleStarClick={this.handleStarClick}
        />
      );
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
