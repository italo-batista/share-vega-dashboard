import React from "react";
import VisPreview from "./VisPreview";
import "./VisCard.css";
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
