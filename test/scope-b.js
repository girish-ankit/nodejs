var aFile = require('./scope-a');

// Access variables defined with 'exports' key word

console.log('Exports Variable:=> '+aFile.e);
console.log('Exports Function:=> '+aFile.f());

// Access variables defined with 'global' key word
console.log('Global Variable:=> '+c);
console.log('Global Function:=> '+d());

// Accessing local variable of scope-a.js. It will give error

//console.log(a);
//console.log(b());
