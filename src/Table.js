import React from 'react';

const Table = () => {

return(

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
)
}
export default Table;