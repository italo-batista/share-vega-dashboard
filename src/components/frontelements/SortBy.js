import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";

import "./override.css";

class SortBy extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const options = this.props.options.map(optName => (
      <Dropdown.Item key={optName} onClick={() => this.props.onClick(optName)}>
        {optName}
      </Dropdown.Item>
    ));

    return (
      <Dropdown
        text="Sort By"
        icon="ordered list"
        className="icon"
        floating
        labeled
        button
      >
        <Dropdown.Menu>{options}</Dropdown.Menu>
      </Dropdown>
    );
  }
}

export default SortBy;
