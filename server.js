const express = require('express');
const app = express();

// Port
const port = process.env.PORT || 3000;

// Example stub:
app.get('/', (req, res) => {
  res.send('Hello Cats');
});

// index /theater/session/
// SHOW available seats
// CREATE reserves the seats
// DELETE reservation
// EDIT is a future feature no PUT or PATCH yet....
//

// Example stub:
app.get('/theater/name-of-route', (req, res) => {
  res.json({'stub': `[${req.originalUrl}] Endpoint works! Replace me in Step 2.`});
});



// Server
app.listen(port, () => {
  console.log(`App listening on port: ${port}`)
});


module.exports = app;