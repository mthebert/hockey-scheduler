var Mongoose = require('mongoose'); 
var config = require('./config');

mongodb://<dbuser>:<dbpassword>@ds043022.mongolab.com:43022/hockey_scheduler
Mongoose.connect('mongodb://' + config.database.username + ':' + config.database.password + '@' + config.database.host + ':' + config.database.port + '/' + config.database.db);  

var db = Mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));  
db.once('open', function callback() {  
    console.log("Connection with database succeeded.");
});

exports.Mongoose = Mongoose;  
exports.db = db;  