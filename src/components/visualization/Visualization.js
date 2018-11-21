import React from "react";
import VisPreview from "./VisPreview";
import "./Visualization.css";
import { Card, Icon } from "semantic-ui-react";

class Visualization extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  render() {
    return (
      <div className="vis-box">
        <Card>
          <VisPreview
            className="vis-preview"
            visDeclaration={this.props.visDeclaration}
          />
          <Card.Content>
            <Card.Header>{this.props.title}</Card.Header>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="user" />
              22 Friends
            </a>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

export default Visualization;
