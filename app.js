const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactusRoute = require('./routes/contactus');
const path = require('path');
const rootDir = require('./utils/path');
const errorController = require('./controllers/error')
const contactController = require('./controllers/contact')


app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, "public")));

const server = http.createServer(app);

app.use(shopRoutes);


app.use('/admin',adminRoutes);

app.use(contactusRoute);

app.use('/success', contactController.getContactResponse);

app.use('/', errorController.get404);


app.listen(3000);