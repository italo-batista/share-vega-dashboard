import React from "react";
import VegaLite from "react-vega-lite";

class VisPreview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    function handleHover(...args) {
      console.log(args);
    }

    return (
      <VegaLite spec={this.props.visDeclaration} onSignalHover={handleHover} />
    );
  }
}

export default VisPreview;
