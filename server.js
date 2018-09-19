// Express Modules
const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const mongoUri = "mongodb://localhost:27017/";

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
    // console.log(res.json(docs))
    res.json(docs) // <- throws an error
  });
});


// Insert theatres
app.post('/theaters', (req, res) =>{
  const collection = db.collection('theatres');
  collection.insertMany([
    {
      "_id" : 1,
      "name" : "The Royal",
      "seats" : [ [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ],
      "seatsAvailable" : 80
    },
    {
      "_id" : 2,
      "name" : "Make School",
      "seats" : [ [ 0, 0, 0],
        [ 0, 0, 0, 0, 0] ],
      "seatsAvailable" : 8
    },
    {
      "_id" : 3,
      "name" : "Grand Lake Theater",
      "seats" : [ [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ],
      "seatsAvailable" : 96
    },
  ], (err, result) =>{
    res.send("Inserted theatres!")
  })
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


// POST NEW SESSION - create new sessions/sessions
// app.post('/theaters/:id/new', (req, res) => {
//   let id = req.params.theaterId;
//
//   let theaters = db.collection('theaters');
//   let sessions = db.collection('sessions');
//
//   let theater;
//
//   theaters.find({ "_id" : id}).toArray(err)=> {
//     theater = docs[0];
//
//     sessions.insertOne({
//       _id: 1,
//       name : "Wolverine",
//       description : "Best Xman Movie EVAR",
//       theaterId : id,
//       start : Date("2015-03-11T15:00:00.000Z"),
//       end : Date("2015-03-11T16:00:00.000Z"),
//       price : 10,
//       seatsAvailable : 100,
//       seats : theater.seats,
//       reservations : []
//     });
//
//     res.send("Inserted session into theater")
//   });
//   res.send("Did not insert!!!");
// });



// Set the listening port, and then connect to the database
app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
  /* Mongo Database Connection */
  // Use connect method to connect to the server
  MongoClient.connect(mongoUri, { useNewUrlParser: true }, (err, client) => {
    assert.equal(null, err);

    console.log("Connected successfully to database");

    db = client.db(dbName);
    db.collection('theaters');
    db.collection('sessions');

    console.log("mongo connected!");
  });
});