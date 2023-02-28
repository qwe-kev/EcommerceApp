const getDb = require('../util/database').getDb;

class Product{
  constructor(title, price, imagUrl, description) {
    this.title = title;
    this.price = price;
    this.imagUrl = imagUrl;
    this.description = description;
  }
  save() {
    const db = getDb();
    db.collection('products').insertOne(this)
    .then(result => {
      console.log(result);
    })
    .catch(err => {
      console.log(err);
    })
  }
}

module.exports = Product;