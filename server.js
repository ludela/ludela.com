require('dotenv').load({ silent: true });
const path = require('path');
const express = require('express');
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname+'/public/index.html'));
});
app.get('/about', function(req, res) {
  res.sendFile(path.join(__dirname+'/public/about.html'));
});
app.get('/careers', function(req, res) {
  res.sendFile(path.join(__dirname+'/public/careers.html'));
});
app.get('/contact', function(req, res) {
  res.sendFile(path.join(__dirname+'/public/contact.html'));
});
app.get('/faq', function(req, res) {
  res.sendFile(path.join(__dirname+'/public/faq.html'));
});
app.get('/legal', function(req, res) {
  res.sendFile(path.join(__dirname+'/public/legal.html'));
});
const server = app.listen(process.env.PORT, function () {
  console.log('Server is listening on port', server.address().port);
});
