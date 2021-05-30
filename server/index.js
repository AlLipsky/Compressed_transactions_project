const uniq = require('lodash/uniq')

const io = require("socket.io")(8001, {
  path: "/",
  serveClient: true,
  pingInterval: 10000,
  pingTimeout: 5000,
  cookie: false
})

const data = [{tradingParty: "me", counterparty: "you", amount: -400},
  {tradingParty: "me", counterparty: "you", amount: 500},
  {tradingParty: "me", counterparty: "someone_else", amount: 100}]

io.on("connection", (socket) => {

  socket.emit('get old transactions', JSON.stringify(data))

  socket.on('add new transaction', (transaction) => {
    data.push(JSON.parse(transaction))

    socket.emit('add new transaction', JSON.stringify(data))
  })

  socket.on('compress transactions', () => {
    const counterParties = uniq(data.map(i => i.counterparty))
    const compressTransaction = []
    console.log(counterParties)

    counterParties.map((counterparty) => {
      const accumulator = data.reduce((acc, currentValue) => {
        if(currentValue.counterparty === counterparty) {
          console.log(acc)
          return acc + currentValue.amount
        }
      })

      compressTransaction.push({tradingParty: "me", counterparty: counterparty, amount: accumulator})
    })

    socket.emit('compress transactions', JSON.stringify(compressTransaction))
  })
})