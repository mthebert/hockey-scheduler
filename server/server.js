var Hapi = require('hapi');
var Routes = require('./routes');
var Db = require('./config/db');
var Moment = require('moment');
var Config = require('./config/config');

var app = {};
app.config = Config;

var privateKey = app.config.key.privateKey;
var ttl = app.config.key.tokenExpiry;

var server = new Hapi.Server();
server.connection({ 
    port: app.config.server.port
});

var validate = function(token, callback) {
    var diff = Moment().diff(Moment(token.iat * 1000));
    if (diff > ttl) {
        return callback(null, false);
    }
    callback(null, true, token);
};

server.register([{
    register: require('hapi-auth-jwt')
}], function(err) {
    server.auth.strategy('token', 'jwt', {
        validateFunc: validate,
        key: privateKey
    });

    server.route(Routes.endpoints);
});

server.start(function () {
    console.log('Server running at:', server.info.uri);
});
