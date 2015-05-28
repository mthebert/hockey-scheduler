var Hapi = require('hapi');
var Boom = require("boom");

var dbOpts = {
    "url": "mongodb://localhost:27017/hockeyScheduler",
    "settings": {
        "db": {
            "native_parser": false
        }
    }
};

var server = new Hapi.Server();
server.connection({ 
    port: 8000 
});

server.register({
    register: require('hapi-mongodb'),
    options: dbOpts
}, function (err) {
    if (err) {
        console.error(err);
        throw err;
    }
});

server.route( {
    "method"  : "GET",
    "path"    : "/users/{id}",
    "handler" : usersHandler
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