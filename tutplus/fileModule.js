var fs = require('fs');
console.log();

// read
fs.readFile('input.txt', function (err, data) {
if (err) {
    return console.error(err);
}
console.log("#1>. Read operation: " + data.toString()+'\n');
});

// write 

console.log();

fs.writeFile('input1.txt', 'This is dummy content', function(err, data){
	if (err) {
	    return console.error(err);
	}
	// NOTE: it have used synchronous function just because I want to read file after write operations
	console.log('\n\n#2>. '+fs.readFileSync('input1.txt').toString()+'\n');
});


// ########################  FILE AS STREAM ####################################
console.log('\n#3>. ####################### FILE AS STREAM ################################### \n');
// read
var readStream = fs.createReadStream('input.txt');

// print file stream data to standard output

readStream.pipe(process.stdout);

// write

var writeStream = fs.createWriteStream('abc.txt');
var fib = require('./readableStreamModule');
fib.pipe(writeStream);

