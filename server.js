// Express Modules
const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const mongoUri = process.env.MONGODB_URI || "mongodb://localhost:27017/theater-reservation";

// Database Name
const dbName = 'theater-reservations';

// Initialize db
let db;


// ******  ROUTES  ****** //

// Theaters Index - show all theaters
app.get('/theaters', (req, res) => {
  let collection = db.collection('theaters');
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null, "Error:");
    console.log(res.json(docs))
    // res.json(docs) // <- throws an error
  });
});

// Show one theater
app.get('/theaters/:id', (req, res) => {
  // return a single theater
});

// Show all movies at theater
app.get('/theaters/:id/movies', (req, res) => {
  // return all the movies at a single theater
});

// Show one movie at theater
app.get('/theaters/:id/movies/:movieId', (req, res) => {
  // return a single movie at a single theater
});

// Show all times for one movie
app.get('/theaters/:id/:movieId/times', (req, res) => {
  // Return all the start times for this movie at a single theater
});

// Show one time for movie
app.get('/theaters/:id/:movieId/times/:timeId', (req, res) => {
  // return a single start time for a single movie at a single theater
});

// Reserve movie (purchase a ticket)
app.post('/theaters/:id/:movieId/times/:timeId', (req, res) => {
  // return a confirmation that the movie was booked
  // Perhaps return a receipt
});




// Example stub:
app.get('/theater/name-of-route', (req, res) => {
  res.json({'stub': `[${req.originalUrl}] Endpoint works! Replace me in Part 2.`});
});




app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
  /* Mongo Database Connection */
  // Use connect method to connect to the server
  MongoClient.connect(mongoUri, { useNewUrlParser: true }, (err, client) => {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    db = client.db(dbName);
    db.collection('theaters');
    db.collection('sessions');

    console.log("mongo connected!");
  });
});