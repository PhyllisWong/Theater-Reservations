const express = require('express');
const app = express();

// Port
const port = process.env.PORT || 3000;

// Example stub:
app.get('/', (req, res) => {
  res.send('Hello Cats');
});

app.get('/cats', (req, res) => {
  res.send('Kitties!!!!');
});



// Server
app.listen(port, () => {
  console.log(`App listening on port: ${port}`)
});


module.exports = app;