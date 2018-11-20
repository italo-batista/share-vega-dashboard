import React from "react";
import Visualization from "../visualization/Visualization";

import "bootstrap/dist/css/bootstrap.min.css";

class VisGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.visz = props.listVisz;
  }

  render() {
    var listVisz = this.visz.map(vis => (
      <div className="col-6	col-sm-4 col-md-3	col-lg-2">
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
