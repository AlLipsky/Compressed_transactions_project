import React from "react";
import TableRow from "./TableRow";
import { Table } from "reactstrap";

const TableComponent = ({ transactions, transactionType }) => {
  const tableRow = transactions.map((transaction) => {
    return <TableRow transaction={transaction} />;
  });
  return (
    <div
      style={{
        display: "flex",
        padding: "20px",
        justifyContent: "center",
      }}
    >
      <Table
        border="2"
        bordered
        striped
        style={{
          margin: "20px",
          captionSide: "top",
        }}
      >
        <caption style={{ textAlign: "center" }}>{transactionType}</caption>
        <thead>
          <tr>
            <th>Counterparty</th>
            <th>Tradingparty</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>{tableRow}</tbody>
      </Table>
    </div>
  );
};
export default TableComponent;
