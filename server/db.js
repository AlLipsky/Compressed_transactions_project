const { MongoClient } = require("mongodb");
const uri = "mongodb://127.0.0.1:27017/?poolSize=20&writeConcern=majority";

const main = async (callback) => {
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    const database = client.db("assignment");
    const collection = database.collection("transactions");

    await callback(collection);
  } catch (err) {
    console.log(err);
    throw new Error("Unable to Connect to Database");
  } finally {
    await client.close();
  }
};

module.exports = main;
