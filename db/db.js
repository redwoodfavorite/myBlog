var db            = require('mongodb');
var mongoose      = require('mongoose');

var initialize = function(){
    mongoose.connect('mongodb://localhost/db');
}

module.exports = {
  initialize: initialize,
};

