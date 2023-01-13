const path = require('path');
const rootDir = path.dirname(require.main.filename);

exports.get404 = (req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, "views","404.html"));
} 
