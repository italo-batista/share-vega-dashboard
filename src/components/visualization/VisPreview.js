import React from "react";
import embed from "vega-embed";
import * as vega from "vega";
import "./override.css";

class VisPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vis: null
    };
    console.log(this.props.visDeclaration);
  }

  drawVisPreview(i) {
    let spec = this.props.visDeclaration;

    embed(this.refs.chartContainer, spec, {
      defaultStyle: true,
      renderer: "canvas",
      width: 200,
      height: 200
    });
  }

  componentDidMount() {
    this.drawVisPreview();
  }

  componentDidUpdate() {
    this.drawVisPreview();
  }

  render() {
    return <div ref="chartContainer" />;
  }
}

export default VisPreview;
