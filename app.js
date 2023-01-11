const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactusRoute = require('./routes/contactus');
const path = require('path');
const rootDir = require('./utils/path');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, "public")));

const server = http.createServer(app);

app.use(shopRoutes);


app.use('/admin',adminRoutes);

app.use(contactusRoute);

app.use('/success', (req, res, next) => {
    res.status(202).send("<h1>Form successfuly filled</h1>")
})

app.use('/',(req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, "views","404.html"));
})



app.listen(3000);