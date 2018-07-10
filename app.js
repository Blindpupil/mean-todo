const express = require('express');
const mongoose = require('mongoose');
const setupController = require('./controllers/setupController');
const apiController = require('./controllers/apiControllers');

// App
const app = express();

const port = process.env.PORT || 3100;

app.use('/assets', express.static(__dirname + '/public/angular/build'));

app.set('view engine', 'pug');

app.listen(port);

// Mongo
mongoose.connect('mongodb://localhost:27017/node_todos', {useNewUrlParser: true});

// Setup
setupController(app);

// Api
apiController(app);