#Express-App-API-TODO
#### REST API


mkdir app
    - npm init

    - npm install express --save

    - require express

    - var app = express(); in server.js

    - app.listen(3000, function(){
        console.log('Listening on PORT 3000')
      }) to check if server is working when you are on nodemon
      -make custom middlewear
      -app.use middlewear so the whole app can use it

what is middlewear:

    - can be an object that we create to perform a certain function
    - use app.use so that the middlewear can be used across your application everytime a request is made (e.g. app.get, app.post, etc..)-
    - you can add custom middlewear to your routes
        app.get('/about', middlewear.logger, function (req, res) {
        res.send('<h1>Express About Page</h1>')
      })
