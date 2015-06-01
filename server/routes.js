var User = require('./controller/user');
var Static = require('./static');

exports.endpoints = [
	{ method: 'GET', path: '/{somethingss*}', config: Static.get },
	{ method: 'POST', path: '/user', config: User.create},
	{ method: 'GET', path: '/user', config: User.getAll}, 
	//{ method: 'GET', path: '/user/{userId}', config: User.getOne}, 
	//{ method: 'PUT', path: '/user/{userId}', config: User.update}, 
	//{ method: 'DELETE', path: '/user/{userId}', config: User.remove},
    { method: 'POST', path: '/login', config: User.login},
    { method: 'POST', path: '/forgotPassword', config: User.forgotPassword},
    { method: 'POST', path: '/verifyEmail', config: User.verifyEmail},
    { method: 'POST', path: '/resendVerificationEmail', config: User.resendVerificationEmail}
];
