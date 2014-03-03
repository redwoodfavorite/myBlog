var express  = require('express');
var http     = require('http');
var path     = require('path');
var db       = require('mongodb');
var mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost/db');
var Post = mongoose.model('Post', {title: String, content: String});

app.set('port', process.env.PORT || 9999);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/post', function(req, res){
    //var post = new Post({title: 'Sample Post', content: 'abcdefghijklmnopqrstuvwxyz'})
    res.send(['1','2','3']);
});
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
