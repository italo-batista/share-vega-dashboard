import React, { Component } from "react";
import { Dropdown, Button } from "semantic-ui-react";

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
      <div>
        <Button.Group basic>
          <Dropdown
            text="Sort By"
            icon="ordered list"
            color="violet"
            className="icon"
            floating
            labeled
            button
          >
            <Dropdown.Menu color="violet">{options}</Dropdown.Menu>
          </Dropdown>
        </Button.Group>
      </div>
    );
  }
}

export default SortBy;
