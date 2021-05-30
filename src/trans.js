import React, { useState } from "react";
import "./App.css";
import AddNewTransactionModal from "./Modal";

const App = () => {
  const [addToggle, setToggle] = useState("false");
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          marginLeft: "-5px",
          marginRight: "-5px",
        }}
      >
        <div style={{ flex: "50%", padding: "5px" }}>
          <table border="1">
            <tr>
              <th>Counter party name </th>
              <th>Amount</th>
            </tr>
            <tr>
              <td>January</td>
              <td>$200</td>
            </tr>
          </table>
        </div>
        <div style={{ flex: "50%", padding: "5px" }}>
          <table border="1">
            <tr>
              <th>Counter party name </th>
              <th>Amount</th>
            </tr>
            <tr>
              <td>me</td>
              <td>$400</td>
            </tr>
            <tr>
              <td>me</td>
              <td>$400</td>
            </tr>
            <tr>
              <td>me</td>
              <td>$400</td>
            </tr>
            <tr>
              <td>me</td>
              <td>$400</td>
            </tr>
          </table>
        </div>
      </div>
      <button
        onClick={() => setToggle((prev) => !prev)}
        style={{ margin: "10px", padding: "2px" }}
      >
        Add new transaction
      </button>
      <button style={{ margin: "10px", padding: "2px" }}>
        Compress transaction
      </button>
      <AddNewTransactionModal toggle={addToggle} />
    </div>
  );
};

export default App;
