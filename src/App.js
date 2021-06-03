import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import ModalComponent from "./Modal";
import { io } from "socket.io-client";
import Table from "./Table";
import { Button } from "reactstrap";
import AddForm from "./AddForm";

const App = () => {
  const [recievedTransactions, setRecievedTransactions] = useState([]);
  const [payedTransactions, setPayedTransactions] = useState([]);
  const [transactionType] = useState(["Recieving", "Paying"]);
  const [compressedTransactions, setCompressedTransactions] = useState([]);
  const [addNewTransactionToggle, setNewTransactionToggle] = useState(false);
  const [compressedTransactionToggle, setcompressedTransactionToggle] =
    useState(false);
  const [modalHeaderName] = useState([
    "Add new transaction",
    "Compressed transactions",
  ]);
  const socket = io.connect("ws://localhost:8001", {
    transports: ["websocket"],
  });

  useEffect(() => {
    socket.on("add new transaction", (data) => {});

    socket.on("compress transactions", (data) => {
      setCompressedTransactions(data);
    });

    socket.on("get receiving transactions", (data) => {
      setRecievedTransactions([...data]);
      socket.on("get paying transactions", (data) => {
        setPayedTransactions([...data]);
      });
    });
  });
  const handleSetTransaction = useCallback((values) => {
    console.log("values from app", values);
    socket.emit("add new transaction", JSON.stringify(values));
    setNewTransactionToggle(false);
  }, []);

  const closeNewTransactionModalWindowFunc = () => {
    setNewTransactionToggle(false);
  };
  const closeCompressedTransactionModalWindowFunc = () => {
    setcompressedTransactionToggle(false);
  };

  return (
    <div className="App">
      <Table
        transactions={[...recievedTransactions]}
        transactionType={transactionType[0]}
      />
      <Table
        transactions={[...payedTransactions]}
        transactionType={transactionType[1]}
      />
      <div>
        <Button
          color="info"
          style={{ padding: "10px", margin: "5px", color: "white" }}
          onClick={() => {
            setNewTransactionToggle(!addNewTransactionToggle);
          }}
        >
          Add new Transaction
        </Button>
        <Button
          color="info"
          style={{ padding: "10px", margin: "5px", color: "white" }}
          onClick={() => {
            socket.emit("compress transactions", true);
            console.log("compressedTransactions", compressedTransactions);
            setcompressedTransactionToggle(!compressedTransactionToggle);
          }}
        >
          Compress
        </Button>
      </div>
      <ModalComponent
        isOpen={addNewTransactionToggle}
        headerName={modalHeaderName[0]}
        headerCloserFunc={closeNewTransactionModalWindowFunc}
        modalBodyData={
          <AddForm
            handleSetTransaction={handleSetTransaction}
            closeModalWindowFunc={closeNewTransactionModalWindowFunc}
          />
        }
      />
      <ModalComponent
        isOpen={compressedTransactionToggle}
        headerName={modalHeaderName[1]}
        headerCloserFunc={closeCompressedTransactionModalWindowFunc}
        modalBodyData={<Table transactions={[...compressedTransactions]} />}
      />
    </div>
  );
};
export default App;
