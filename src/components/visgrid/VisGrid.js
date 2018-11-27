import React from "react";
import VisCard from "../visualization/VisCard";
import "bootstrap/dist/css/bootstrap.min.css";
import "./VisGrid.css";

class VisGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.visz = props.listVisz;
  }

  render() {
    var listVisz = this.visz.map(vis => (
      <div
        key={vis.gist_link}
        className="col-12 .col-xs-6 col-sm-4 col-md-3 col-lg-2 card-container"
      >
        <VisCard
          title={vis.title}
          visDeclUrl={vis.gist_link}
          visId={vis._id}
          visStars={vis.userStars}
          handleStarClick={this.props.handleStarClick}
        />
      </div>
    ));

    return <div className="row flex-container"> {listVisz} </div>;
  }
}

export default VisGrid;
