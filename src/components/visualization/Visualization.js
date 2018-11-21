import React from "react";
import VisPreview from "./VisPreview";
import "./Visualization.css";

class Visualization extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  render() {
    return (
      <div className="vis-box">
        <VisPreview
          className="vis-preview"
          visDeclaration={this.props.visDeclaration}
        />
        <div>
          <div>{this.props.title}</div>
          <div>buttons...</div>
        </div>
      </div>
    );
  }
}

export default Visualization;
