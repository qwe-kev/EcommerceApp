const path = require('path');
const rootDir = require('../utils/path');

exports.getContact = (req, res, next) => {
    res.sendFile(path.join(rootDir, "views", "contact.html"))
}

exports.getContactResponse = (req, res, next) => {
    res.status(202).send("<h1>Form successfuly filled</h1>")
}