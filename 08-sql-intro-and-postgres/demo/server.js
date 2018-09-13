const express = require('express');
const cors = require('cors');
const pg = require('pg');
const app = express();

app.use(cors());
// to listen for and respond to a request:
//   address/url
//   method
//   how to generate and send the response (behavior)

app.get('/', (request, response) => {
  response.send('hello world!');
});
app.use(express.static('public'));

app.get('/hi', (request, response) => {
  response.send('hi yourself');
});

// app.get('/hackerIpsum', (request, response) => {
//   console.log(__dirname);
//   response.sendFile('hackerIpsum.json', {root: __dirname});
// });

app.listen(3000, () => {
  console.log('we are listening!');
});
