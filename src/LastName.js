import React, { Component } from "react";

class LastName extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>{this.props.lastName}</div>;
  }
}
export default LastName;
