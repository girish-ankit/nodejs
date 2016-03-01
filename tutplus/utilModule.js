var util = require('util');

// NOTE : util module is for developer to check various things explained in following example.

//################ Apply inheritance through util module ####################################

function User(){
	
}

User.prototype.loggedIn = function(){
	return 'user loggedIn';
}


function Admin(){
	
}
//admin object has all permission that User object has also they have some additional permission

util.inherits(Admin, User);

// check

admin = new Admin();

console.log(admin.loggedIn());

// Note can also override method of User class
Admin.prototype.loggedIn = function(){
	return 'admin loggedIn';
}

adminNew = new Admin();

console.log(adminNew.loggedIn());




// #####################################  for log purpose ###################################################

var debuglog = util.debuglog('foo');

var bar = 123;
debuglog('hello from foo [%d]', bar);
//log('This is log message');

// NOTE: for printing log message you have to run NODE_DEBUG=msg node utilModule.js

// ####################### Convert object to sting(%s), integer(%d) or json(%j) ##############################
var person = {
		name: 'Ankit Kumar',
		interest:['movie', 'reading', 'playing']
}

// convert to json format
var personJson = util.format('%s: %j', person, person);
console.log();

console.log('Converted to string and  JSON format: ', personJson);

console.log();

//convert to integer format
var age = '40';
var ageInt = util.format('%d', age);
console.log(ageInt);

// #################### print all properties and methods of object with color option #################

console.log(util.inspect(util, {colors:true}));

// ############### util module has lots of utility functions like following  ###############################
/*
 isArray: [Function: isArray],
 isBoolean: [Function: isBoolean],
 isNull: [Function: isNull],
 isNullOrUndefined: [Function: isNullOrUndefined],
 isNumber: [Function: isNumber],
 isString: [Function: isString],
 isSymbol: [Function: isSymbol],
 isUndefined: [Function: isUndefined],
 isRegExp: [Function: isRegExp],
 isObject: [Function: isObject],
 isDate: [Function: isDate],
 isError: [Function: isError],
 isFunction: [Function: isFunction],
 isPrimitive: [Function: isPrimitive],
 
 */

console.log()
console.log('##########  util module function  check ########################3');
// check variable is array or not
console.log(util.isArray({}));
console.log(util.isArray([]));

console.log()





