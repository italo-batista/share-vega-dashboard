import React from "react";
import axios from "axios";

import API from "../../api";
import VisPreview from "./VisPreview";

class VisView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visualization: "{}" };
    this.getVisJson = this.getVisJson.bind(this);
    this.getVisualizationVegaDeclaration = this.getVisualizationVegaDeclaration.bind(
      this
    );
  }

  getVisJson(callback) {
    API.get(this.props.location.pathname).then(res => {
      const visualization = res.data[0];
      this.setState({ visualization: visualization });
      callback();
    });
  }

  getVisualizationVegaDeclaration() {
    axios.get(this.state.visualization.gist_link).then(res => {
      const visDeclaration = res.data;
      this.setState({
        visDeclaration: visDeclaration
      });
    });
  }

  componentDidMount() {
    this.getVisJson(this.getVisualizationVegaDeclaration);
  }

  render() {
    return (
      <VisPreview
        className="vis-preview"
        visDeclaration={this.state.visDeclaration}
        visId={this.state.visualization._id}
      />
    );
  }
}

export default VisView;
