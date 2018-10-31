import React from "react";
import Visualization from '../visualization/Visualization'

class VisGrid extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.visz = props.listVisz;
  }
  
  render() {
    return (
      this.visz.map((vis) => 
        <Visualization title={vis.title} url={vis.url} visDeclaration={vis.declarationJson} />
      )
    )
  }
}

export default VisGrid;
