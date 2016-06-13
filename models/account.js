var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var Account = new Schema({
    name: String,
    email: String,
    password: String
});

var option = {
  usernameField: 'email'
}
Account.plugin(passportLocalMongoose, option);

module.exports = mongoose.model('Account', Account);
