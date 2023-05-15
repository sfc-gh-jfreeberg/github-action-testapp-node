var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.json(
    {
      example: 'value',
      obj: {
        something: 'else',
        another: 'you get the idea. Change this to change the API response',
        number: 121323
      }
    });
});

app.listen(process.env.PORT, function () {
  console.log('Example app listening on process.env.PORT');
});
