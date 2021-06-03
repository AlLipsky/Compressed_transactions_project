const uniq = require("lodash/uniq");

const io = require("socket.io")(8001, {
  path: "/",
  serveClient: true,
  pingInterval: 10000,
  pingTimeout: 5000,
  cookie: false,
});

const db = require("./db");

io.on("connection", async (socket) => {
  db(async (collection) => {
    const receivingCursor = collection.find({ amount: { $gt: 0 } });
    const receivingCursorTransactions = await receivingCursor.toArray();
    socket.emit("get receiving transactions", receivingCursorTransactions);

    const payingCursor = collection.find({ amount: { $lt: 0 } });
    const payingCursorTransactions = await payingCursor.toArray();
    socket.emit("get paying transactions", payingCursorTransactions);

    socket.on("compress transactions", () => {
      const oldTransactions = receivingCursorTransactions.concat(
        payingCursorTransactions
      );
      const counterParties = uniq(oldTransactions.map((i) => i.counterparty));
      const compressTransaction = [];

      counterParties.map((counter) => {
        const distinctTransactions = oldTransactions.filter(
          (f) => f.counterparty === counter
        );
        let sumAmount = 0;
        distinctTransactions.map(
          (transaction) => (sumAmount += transaction.amount)
        );
        compressTransaction.push({
          tradingParty: "me",
          counterparty: counter,
          amount: sumAmount,
        });
      });

      socket.emit("compress transactions", JSON.stringify(compressTransaction));
    });
  });

  socket.on("add new transaction", async (transaction) => {
    db(async (collection) => {
      const newTransaction = await collection.insertOne(
        JSON.parse(transaction)
      );
      const { ops } = newTransaction;
      socket.emit("add new transaction", ops[0]);
    });
  });

  socket.on("disconnection", async (socket) => {
    await mongoClient.close();
  });
});
