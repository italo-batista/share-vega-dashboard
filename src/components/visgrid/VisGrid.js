import React from "react";
import Visualization from "../visualization/Visualization";
import "bootstrap/dist/css/bootstrap.min.css";
import "./VisGrid.css";

class VisGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.visz = props.listVisz;
  }

  render() {
    var listVisz = this.visz.map(vis => (
      <div className="col-12 col-sm-6 col-md-3 col-lg-2 card-container">
        <Visualization
          key={vis.url}
          title={vis.title}
          url={vis.url}
          visDeclaration={vis.declarationJson}
        />
      </div>
    ));

    return <div className="row"> {listVisz} </div>;
  }
}

export default VisGrid;
