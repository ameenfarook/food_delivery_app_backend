const { MongoClient } = require("mongodb");
const { mongoConfig } = require("../config");

class MongoDB {
  static connectToMongoDB = () => {
    MongoClient.connect(mongoConfig.connectionUrl)
      .then((connection) => {
        console.log("MongoDB Connected");
        this.db = connection.db(mongoConfig.database);
      })
      .catch((error) => console.log(`MongoDB not Connected : ${error}`));
  };
}

MongoDB.db = null;

module.exports = MongoDB;
