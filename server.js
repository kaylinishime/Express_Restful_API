var express = require('express');
// creating an express app
// express is calling the entire module to be used
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 3000;
var middlewear = require('./middlewear')

var todos = [
  {
    id: 1,
    description: 'Teach REST API',
    completed: false
  },
  {
    id: 2,
    description: 'Go eat a healthy lunch',
    completed: true
  }
]
// this middlewear is now for the whole app!
// runs on every route no matter what.
app.use(middlewear.requireAuthentication);
// For this one, you are calling the entire library, which is why we call a function
app.use(bodyParser());


app.get('/', function(req, res) {
  res.send('<h1>Express Todo API</h1>')
})

app.get('/todos', function(req, res) {
  res.json(todos);
})

// creating a variable that will hold id from params object
app.get('/todos/:id', function(req, res){
  var todoId = parseInt(req.params.id)
  var matchedTodo;
  todos.forEach(function(todo){
    if (todoId === todo.id) {
      matchedTodo = todo;
    }
  })
    if(matchedTodo) {
      res.json(matchedTodo)
    } else {
      res.status(404).send();
    }
})


// this middlewear only runs on this request!
app.get('/about', middlewear.logger, function (req, res) {
  res.send('<h1>Express About Page</h1>')
})

app.listen(PORT, function(){
  console.log('Listening on PORT 3000')
})
