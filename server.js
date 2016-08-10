var express = require('express');
// creating an express app
var app = express();
var path = require('path');
var PORT = process.env.PORT || 3000;
var middlewear = require('./middlewear')

// this middlewear is now for the whole app!
// runs on every route no matter what.
app.use(middlewear.requireAuthentication);

app.get('/', function(req, res) {
  res.send('<h1>Express Todo API</h1>')
})


// this middlewear only runs on this request!
app.get('/about', middlewear.logger, function (req, res) {
  res.send('<h1>Express About Page</h1>')
})

app.listen(PORT, function(){
  console.log('Listening on PORT 3000')
})
