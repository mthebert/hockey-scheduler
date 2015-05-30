var app = {};
var Config = require('./config/config');
var Db = require('./config/db');
var Hapi = require('hapi');
var Moment = require('moment');
var Routes = require('./routes');

app.config = Config;

var privateKey = app.config.key.privateKey;
var ttl = app.config.key.tokenExpiry;

var server = new Hapi.Server();

server.connection({ 
    host: app.config.server.host,
    port: app.config.server.port
});

var validate = function(token, callback) {
    var diff = Moment().diff(Moment(token.iat * 1000));
    if (diff > ttl) {
        return callback(null, false);
    }
    callback(null, true, token);
};

server.register([
    {
        register: require('hapi-auth-jwt')
    },
    {
        register: require('good'),
        options: app.config.server.good.options        
    }

], function(err) {
    if (err) {
        console.error(err);
    }
    else {
        server.auth.strategy('token', 'jwt', {
            validateFunc: validate,
            key: privateKey
        });
        
        server.on('start', function (event, tags) {
            console.log('Server Started: ' + server.info.uri);
        });
        server.on('stop', function (event, tags) {
            console.log('Server Stopped: ' + server.info.uri);
        });

        server.route(Routes.endpoints);

        server.start(function () {
            console.log('Server running at:', server.info.uri);
        });        
    }
});


