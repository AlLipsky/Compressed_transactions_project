import React, { Component } from "react";
import FirstName from "./FirstName";
import LastName from "./LastName";
import Address from "./Address";

class PersonComp extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "Al", age: 20, number: 0, newNum: 0 };
  }
  swap = () => {
    this.setState({
      name: this.state.age,
      age: this.state.name,
    });
  };
  sum = () => {
    this.setState((prevstate) => ({
      number: prevstate.number + this.state.newNum,
    }));
  };
  newNumber = (e) => {
    this.setState({ newNum: +e.target.value });
  };
  render() {
    return (
      <div>
        <span>{this.state.name}</span>
        <br />
        <span>{this.state.age}</span>
        <button onClick={this.swap}>Swap</button>
        <input type="number" onChange={this.newNumber}></input>
        <button onClick={this.sum}>Sum</button>
        <span>{this.state.number}</span>
      </div>
    );
  }
}
export default PersonComp;
