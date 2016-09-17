require('dotenv').load({ silent: true });
const path = require('path');
const express = require('express');
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
const server = app.listen(process.env.PORT, function () {
  console.log('Server is listening on port', server.address().port);
});
