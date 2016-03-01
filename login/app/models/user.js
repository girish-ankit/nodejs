var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

// define fields of a collections/table
var userSchema = mongoose.Schema({
	local:{
		username: String,
		password: String
	}
});


// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};



// Create of table in database
module.exports = mongoose.model('User', userSchema);