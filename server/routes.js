var Controller = require('./controller');
var Static = require('./static');

exports.endpoints = [
  { method: 'GET', path: '/{somethingss*}', config: Static.get },
  { method: 'POST', path: '/user', config:Controller.create},
  { method: 'GET', path: '/user', config: Controller.getAll}, 
  { method: 'GET', path: '/user/{userId}', config: Controller.getOne}, 
  { method: 'PUT', path: '/user/{userId}', config: Controller.update}, 
  { method: 'DELETE', path: '/user/{userId}', config: Controller.remove}];