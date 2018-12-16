import React from "react";
import VisPreview from "./VisPreview";

import axios from "axios";

import "./VisCard.css";
import { Card, Icon } from "semantic-ui-react";

class Visualization extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), visDeclaration: "{}" };
    this.getCurrentUserId = this.getCurrentUserId.bind(this);
    this.isUserinStars = this.isUserinStars.bind(this);
    this.handleStarClick = this.handleStarClick.bind(this);
  }

  componentDidMount() {
    axios.get(this.props.visDeclUrl).then(res => {
      const visDeclaration = res.data;
      this.setState({
        date: this.state.date,
        visDeclaration: visDeclaration
      });
    });
  }

  getCurrentUserId() {
    return this.props.currentUser._id;
  }

  isUserinStars(userId, visStars) {
    var userIndex = visStars.indexOf(userId);
    if (userIndex > -1) {
      return true;
    }
    return false;
  }

  handleStarClick() {
    const restMethod = this.isUserinStars(
      this.getCurrentUserId(),
      this.props.visStars
    )
      ? "DELETE"
      : "POST";
    this.props.handleStarClick(this.props.visId, restMethod);
  }

  render() {
    let nStars;
    if (this.props.visStars.length != 0) {
      nStars = this.props.visStars.length;
    }

    return (
      <div className="vis-box">
        <Card>
          <VisPreview
            className="vis-preview"
            visDeclaration={this.state.visDeclaration}
            visId={this.props.visId}
          />
          <Card.Content>
            <Card.Header>{this.props.title}</Card.Header>
            <Card.Meta className="container">
              <div className="row">
                {nStars} <Icon name="star" onClick={this.handleStarClick} />
                <Icon name="fork" />
              </div>
            </Card.Meta>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

export default Visualization;
