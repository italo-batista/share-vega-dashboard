import React from "react";
import VisPreview from "./VisPreview";

import axios from "axios";

import "./VisCard.css";
import { Card, Icon } from "semantic-ui-react";

class Visualization extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), visDeclaration: "{}" };
  }

  componentDidMount() {
    axios.get(this.props.vis_decl_url).then(res => {
      const visDeclaration = res.data;
      this.setState({
        date: this.state.date,
        visDeclaration: visDeclaration
      });
    });
  }

  render() {
    return (
      <div className="vis-box">
        <Card>
          <VisPreview
            className="vis-preview"
            visDeclaration={this.state.visDeclaration}
          />
          <Card.Content>
            <Card.Header>{this.props.title}</Card.Header>
            <Card.Meta extra>
              <Icon name="star" />
              <Icon name="fork" />
            </Card.Meta>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

export default Visualization;
