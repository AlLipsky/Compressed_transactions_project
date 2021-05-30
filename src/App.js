import React, { useState, useEffect } from "react";
import "./App.css";
import AddNewTransactionModal from "./Modal";
import {io} from 'socket.io-client';
import {Table} from './Table';

const App = () => {

const [addToggle, setToggle] = useState("false");
const socket = io.connect('ws://localhost:8001', { transports: ['websocket'] })

  useEffect(() => {

    socket.on('add new transaction', (data) => {
      console.log(data)
    })

    socket.on('compress transactions', (data) => {
      console.log(data)
    })

    socket.on('get old transactions', (data) => {
      console.log(data)
    })

  })
  return (
      <div className="App">
      <header className="App-header">
        <button
          onClick={() => socket.emit('add new transaction', JSON.stringify({tradingParty: "me", counterparty: "you", amount: 200}))}
        >
          Add new Transaction
        </button>
        <button
          onClick={() => socket.emit('compress transactions', true)}
        >
          Compress
        </button>
      </header>      
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
      )
      }
export default App;

