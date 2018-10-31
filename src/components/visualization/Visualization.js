import React from "react";
import VisPreview from './VisPreview'

class Visualization extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  render() {
    return (
      <div>
        <VisPreview visDeclaration={this.props.visDeclaration} />
        <div>
          <div>Title: {this.props.title}</div>
          <div>
            buttons...
          </div>
        </div>
      </div>
    );
  }
}

export default Visualization;
