const { MongoClient } = require("mongodb");
// const uri = 'mongodb+srv://kevray:PijtPOeVwvAr46LP@cluster0.lyo81ic.mongodb.net/shop?retryWrites=true&w=majority';
// let _db;

// const mongoConnect = () => {
//     const client = new MongoClient(uri);
//     console.log(client)
//     _db = client.db;
//     return new Promise((resolve, reject) => {
//         resolve(client);
//     })
// }

// const getDb = () => {
//     if(_db) {
//         return _db;
//     }
//     throw 'no database found!';
// }


// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;

// let _db;

const mongoConnect = callback => {
  MongoClient.connect(
    'mongodb+srv://kevray:PijtPOeVwvAr46LP@cluster0.lyo81ic.mongodb.net/shop?retryWrites=true'
  )
    .then(client => {
      console.log('Connected!');
      _db = client.db();
      callback();
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw 'No database found!';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
