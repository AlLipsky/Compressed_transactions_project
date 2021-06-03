import React from "react";

const TableRow = ({ transaction }) => {
  return (
    <tr>
      <td>{transaction.tradingParty}</td>
      <td>{transaction.counterparty}</td>
      <td>{transaction.amount}</td>
    </tr>
  );
};
export default TableRow;
