var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var UserSchema = new Schema({
    userId: { type: String, unique: true, required: true },
    username: { type: String, required: true }
});

var user = Mongoose.model('user', UserSchema);

module.exports = {
    User: user
};