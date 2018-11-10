const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/frontend/index.html');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('listening');
})
