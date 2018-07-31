const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../db/database.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

// set up environmental variable
const PORT = process.env.PORT || 3002;

console.log(__dirname);

// serve static files
app.use(express.static(path.join(__dirname, '../client/dist')));

// tes t to see if get requests work
app.get(() => {
  console.log('Get is working!');
});

// API calls

app.get('/api/:itemId/reviews', (req, res) => {
  console.log(req.params.itemId, 'itemId');
  db.getAllReviews([req.params.itemId], (error, results) => {
    if (error) {
      console.log('Error getting the reviews: ', error);
    } else {
      console.log('getting reviews', results);
      res.send(results);
    }
  });
});

app.get('/api/:itemIdreviews/first', (req, res) => {
  console.log(req.params.itemId, 'itemId');
  db.getFirstReviews([req.params.itemId], (error, results) => {
    if (error) {
      console.log('Error getting the first reviews: ', error);
    } else {
      console.log('getting first reviews');
      res.send(results);
    }
  });
});

// start server
app.listen(PORT, () => { console.log(`Listening at ${PORT}!`); });
