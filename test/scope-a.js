
// NOTE: In node variable 'a' and function 'b()' is not accesible in any other js file by including by require() statment

var a='a';
function b (){
	return 'b';
}

// NOTE: To access these variable outside this file you have to put 'globla' keyword before function and variable name but this is not a good practise you have 
// to user 'exports' keyword before variable or function name

global.c='c';

global.d = function(){
	return 'd';
}

// 'exports' keyword demo

exports.e='e'
exports.f= function(){
	return 'f';
}