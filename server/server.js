var express       = require('express');
var http          = require('http');
var path          = require('path');
var db            = require('mongodb');
var mongoose      = require('mongoose');
var LocalStrategy = require('passport-local').Strategy;
// var db            = require('../db/db.js')

// var auth          = require('./auth');

// db.initialize();
// passport = auth.initialize();

// var Post = mongoose.model('Post', {title: String, content: String});
// var User = mongoose.model('User', {username: String, password: String});

// var joseph = new User({ username: 'redwood', password: 'ne633q11'});
// var post = new Post({title: 'Sample Post', content: 'abcdefghijklmnopqrstuvwxyz'})

// joseph.save(function(err){
//     if(err){ console.log(err) }
//     else { console.log('success!') }
// });

// passport.use(new LocalStrategy(
//     function(username, password, done) {
//         User.findOne({ username: username }, function(err, user){
//             if (err) { return done(err) }
//             if (!user) {
//                 return done(null, false, { message: 'Incorrect Username!'});
//             }
//             if (user.password != password) {
//                 return done(null, user, { message: 'Invalid password'});
//             }
//             console.log('logged in!')
//             return done(null, user);
//         })
//       }
//   ));

var app = express();

app.set('port', process.env.PORT || 9999);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, '../public')));
// app.use(passport.initialize());
app.use(express.cookieParser());
app.use(express.bodyParser());
app.use(express.session({ secret: 'cat in the bag' }));
// app.use(passport.session());
app.use(app.router);

app.get('/post', function(req, res){
    res.send(['1']);
});

app.get('/login', function(req, res){
    res.sendfile('../public/login.html');
});

// app.get('/new', function(req, res, next) {
//   passport.authenticate('local', function(err, user, info) {
//     console.log(err, user, info)
//     if (err) { return next(err); }
//     if (!user) { return res.redirect('/login'); }
//     req.logIn(user, function(err) {
//       if (err) { return next(err); }
//       console.log('giving new')
//       return res.sendfile('public/new.html')
//       // return res.redirect('/users/' + user.username);
//     });
//   })(req, res, next);
// });

// app.post('/login', passport.authenticate('local', { successRedirect: '/new',
//     failureRedirect: '/login'
// }));

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});


