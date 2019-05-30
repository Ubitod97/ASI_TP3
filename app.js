const express = require('express');
const bodyParser = require('body-parser');
const pg = require('pg');

const app = express()

app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/', function(request, response) {
  return response.redirect('/form-with-get');
});

app.get('/form-with-get', function(request, response) {
  return response.render('form-with-get');
});

app.get('/form-with-post', function(request, response) {
  return response.render('form-with-post');
});

app.get('/submit-form-with-get', function(request, response) {
  return response.send(request.query);
});

app.post('/submit-form-with-post', function(request, response) {
  return response.send(request.body);
});

app.listen(3000, function() {
    console.log('My REST API running on port 3000 !');
});
