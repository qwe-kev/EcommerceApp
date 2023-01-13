const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactusRoute = require('./routes/contactus');
const path = require('path');
const errorController = require('./controllers/error')
const contactController = require('./controllers/contact')

const app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname, "public")));

app.set('view engine', 'ejs');

app.set('views', 'views');

app.use(shopRoutes);

app.use('/admin',adminRoutes.routes);

app.use(contactusRoute);

app.use('/success', contactController.getContactResponse);

app.use('/', errorController.get404);


app.listen(3000);