var Hapi = require('hapi');
var Routes = require('./routes');
var config = require('./config');
var Db = require('./database');

var server = new Hapi.Server();

server.connection({ 
    port: config.server.port
});

server.route(Routes.endpoints);

server.start(function () {
    console.log('Server running at:', server.info.uri);
});
