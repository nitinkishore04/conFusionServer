const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
const Schema = mongoose.Schema;
var passportLocalMangoose = require('passport-local-mongoose');

var User = new Schema({
    firstname: {
        type: String,
        default: ''
    },
    lastname: {
        type: String,
        default: ''
    },
    facebookId:  String,
    admin: {
        type: Boolean,
        default: false
    }
});

User.plugin(passportLocalMangoose);

module.exports = mongoose.model('User', User);