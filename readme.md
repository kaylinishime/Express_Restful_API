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
    1. git add, git commit, git push
    2. heroku Create
    3. git push heroku master
    4. heroku open

//What is requiring a module & then how do I mount it
 - var bodyParser = require('body-parser');
 - app.use(bodyParser());, is calling the entire body-parser library. app.use = node term for "mounting"

 //Created 1st GET /todos & tested it with POSTMAN by creating Collection->Environment->Route

 
