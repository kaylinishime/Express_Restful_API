#Express-App-API-TODO
#### REST API


//mkdir app

    - npm init

    - npm install express --save

    - require express

    - var app = express(); in server.js

    - app.listen(3000, function(){
        console.log('Listening on PORT 3000')
      }) to check if server is working when you are on nodemon
      -make custom middlewear
      -app.use middlewear so the whole app can use it

//what is middlewear:

    - can be an object that we create to perform a certain function
    - use app.use so that the middlewear can be used across your application everytime a request is made (e.g. app.get, app.post, etc..)-
    - you can add custom middlewear to your routes
        app.get('/about', middlewear.logger, function (req, res) {
        res.send('<h1>Express About Page</h1>')
      })

//Why do we move code and export it and require it?
  - module.exports = middlewear and we do this because its good practice to make the code easier to read (refactor it).

//Create a port that runs on heroku
  - var PORT = process.env.PORT || 3000;
  - deploy on heroku
    1. git add, git commit, gte
    it push
    2. heroku Create
    3. git push heroku master
    4. heroku open

//What is requiring a module & then how do I mount it
 - var bodyParser = require('body-parser');
 - app.use(bodyParser());, is calling the entire body-parser library. app.use = node term for "mounting"

 //Created 1st GET /todos & tested it with POSTMAN by creating Collection->Environment->Route

 //Created 2nd GET /todos/:id & tested it with POSTMAN & also pushed to HEROKU and created -Environment -> route

 ```javascript
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
```

//Created POST /todos. First, had to initialize id
`var todoNextId=3` Then require body. Attach the property id to the body and assign it to todoNextId. push the body to update our todos array.


```javascript
app.post('/todos', function(req,res) {
  var body = req.body;
  // Challenge
    // add id field
    body.id = todoNextId;
    todoNextId++;
    // push body into array
    // we just parsed body with id and now we want to persis that to temporary db.
    todos.push(body);
  res.json(body)
})
```

//REFACTOR using Underscore.js
used findWhere function, which searches through todos array and finds the id that matches the route id. matchedTodo is now more easily defined, less lines of code.

```javascript
app.get('/todos/:id', function(req, res){
  var todoId = parseInt(req.params.id)
  var matchedTodo = _.findWhere(todos, {id: todoId})
    if(matchedTodo) {
      res.json(matchedTodo)
    } else {
      res.status(404).send();
    }
})
```

//POST TODOS WHY & WHAT is happening
// taking description and completed and rejecting anything that is not those.
<!-- // ._isBoolean & _.isString are Object functions that allows us to validate. We have the body object through body-parser.  -->


```javascript
app.post('/todos', function(req,res) {
  var body = _.pick(req.body, 'description', 'completed');
  if(!_.isBoolean(body.completed) || !_.isString(body.description) || body.description.trim().length === 0) {
    return res.status(400).send();
  }
    body.description = body.description.trim();

    body.id = todoNextId;
    todoNextId++;
    todos.push(body);
  res.json(body)
})
```
//create DELETE /TODOS/:id
if not matched todo, return an error message. use without method-- the first argument is the array name & second argument is the values that we want removed. Which in this case is the matchedTodo.

```javascript
app.delete('/todos/:id' , function(req,res){
  var todoId = parseInt(req.params.id);
  var matchedTodo = _.findWhere(todos, {id: todoId});
  // if not, no matchedTodo id.
  if (!matchedTodo){
    res.status(404).send();
    // res.status(404)
  } else {
    todos = _.without(todos, matchedTodo );
    // todos = _.without()
  }
  res.json(matchedTodo)
})
```
