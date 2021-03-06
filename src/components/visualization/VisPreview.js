import React from "react";
import embed from "vega-embed";
import * as vega from "vega";
import "./override.css";

import { Link } from "react-router-dom";

class VisPreview extends React.Component {
  constructor(props) {
    super(props);
  }

  drawVisPreview(i) {
    let spec = this.props.visDeclaration;
    if (spec !== undefined) {
      embed(this.refs.chartContainer, spec, {
        defaultStyle: true,
        renderer: "canvas",
        width: 200,
        height: 200
      });
    }
  }

  componentDidMount() {
    this.drawVisPreview();
  }

  componentDidUpdate() {
    this.drawVisPreview();
  }

  render() {
    return (
      <Link to={"/visualization/" + this.props.visId}>
        <div ref="chartContainer" />
      </Link>
    );
  }
}

export default VisPreview;
