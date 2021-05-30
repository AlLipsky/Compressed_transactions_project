import React, { Component } from "react";

class FirstName extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>{this.props.firstName}</div>;
  }
}
export default FirstName;
