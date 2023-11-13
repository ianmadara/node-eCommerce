const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

let _db;

const uri =
  "mongodb+srv://iandancun:RH8xjlfw9XBp72yl@cluster0.ox4oqns.mongodb.net/shop?retryWrites=true&w=majority";

const MongoConnect = (callback) => {
  MongoClient.connect(uri)
    .then((client) => {
      console.log("Connected!");
      _db = client.db();
      callback();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
}; 

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No database found!";
}


exports.MongoConnect = MongoConnect;
exports.getDb = getDb;