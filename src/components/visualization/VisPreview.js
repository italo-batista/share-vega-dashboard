import React from "react";
import VegaLite from "react-vega-lite";

class VisPreview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <VegaLite spec={this.props.visDeclaration} />;
  }
}

export default VisPreview;
