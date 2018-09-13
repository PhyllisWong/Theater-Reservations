// Express Modules
const express = require('express');
const app = express();
const assert = require('assert');
const MongoClient = require('mongodb').MongoClient;

// Connection URL
const mongoUri = process.env.MONGODB_URI || "mongodb://localhost:27017/theater-reservation";

// Database Name
const dbName = 'theater-reservations';

// Initialize db
let db;


// ******  ROUTES  ****** //
// Example stub:
app.get('/theater/name-of-route', function(req, res) {
  res.json({'stub': `[${req.originalUrl}] Endpoint works! Replace me in Part 2.`});
});



/* Mongo Database Connection */
// Use connect method to connect to the server
MongoClient.connect(mongoUri, (err, client) => {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  db = client.db(dbName);
  db.collection('theaters');
  db.collection('sessions');

  client.close();
});


app.listen(3000, () => console.log('Example app listening on port 3000!'));