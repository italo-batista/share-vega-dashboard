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
      <div className="col-12 .col-xs-6 col-sm-4 col-md-3 col-lg-2 card-container">
        <VisCard
          key={vis.gist_link}
          title={vis.title}
          vis_decl_url={vis.gist_link}
        />
      </div>
    ));

    return <div className="row flex-container"> {listVisz} </div>;
  }
}

export default VisGrid;
