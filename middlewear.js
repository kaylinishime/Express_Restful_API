
// CUSTOM MIDDLEWARE
var middlewear = {
    requireAuthentication: function(req, res, next){
      console.log('Request Auth Ran.')
      next();
    },
    logger: function(req, res, next) {
      console.log(req.method + req.originalURL + new Date().toString());
      next();
    }
}

module.exports = middlewear;
