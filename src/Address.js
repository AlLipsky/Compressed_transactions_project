import React, { Component } from "react";

class Address extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>{this.props.city}</div>;
  }
}
export default Address;
