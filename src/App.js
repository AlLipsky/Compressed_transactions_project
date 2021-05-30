import React, { Component, useState } from "react";
import "./App.css";
import AddNewTransactionModal from "./Modal";
import PersonComp from "./PersonalData";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <PersonComp />
      </div>
    );
  }
}
export default App;
