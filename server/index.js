var Bcrypt = require('Bcrypt-nodejs');
var BodyParser = require('body-parser');
var Boom = require("boom");
var Hapi = require('hapi');
var Mongoose = require('mongoose');
var Morgan = require('morgan');
var Schema = Mongoose.Schema;

Mongoose.connect('mongodb://localhost/hockey_scheduler');

var server = new Hapi.Server();
server.connection({ 
    port: 8000 
});

server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
        directory: {
            path: 'public',
            listing: true
        }
    }
});

server.start(function () {
    console.log('Server running at:', server.info.uri);
});
