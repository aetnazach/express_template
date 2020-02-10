const express = require('express');
const routes = require('./lib/routes');

const app = express();

const port = process.env.NODE_PORT || 3000;

app.use('/', routes);

module.exports = app.listen(port, () =>
  console.log(`Listening on port ${port}`)
);