const { MongoClient } = require("mongodb");
const uri = 'mongodb+srv://kevray:PijtPOeVwvAr46LP@cluster0.lyo81ic.mongodb.net/?retryWrites=true&w=majority';
let _db;

const mongoConnect = () => {
    const client = new MongoClient(uri);
    console.log(client)
    _db = client.db;
    return new Promise((resolve, reject) => {
        resolve(client);
    })
}

const getDb = () => {
    if(_db) {
        return _db;
    }
    throw 'no database found!';
}

mongoConnect();
getDb();
exports.mongoConnect = mongoConnect;
exports.getDb = getDb;