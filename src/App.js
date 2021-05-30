import logo from './logo.svg';
import './App.css';
import {useEffect} from 'react'
import {io} from 'socket.io-client'

const socket = io.connect('ws://localhost:8001', { transports: ['websocket'] })

function App() {
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
    </div>
  );
}

export default App;
