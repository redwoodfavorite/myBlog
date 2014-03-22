var passport = require('passport');

var initialize = function(){
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

  return passport;
}

module.exports = {
  initialize: initialize
};
