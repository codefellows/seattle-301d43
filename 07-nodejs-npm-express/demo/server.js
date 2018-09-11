const express = require('express');
const app = express();

// to listen for and respond to a request:
//   address/url
//   method
//   how to generate and send the response (behavior)

app.get('/', (request, response) => {
  response.send('hello world!');
});

app.listen(3000, () => {
  console.log('we are listening!');
});
