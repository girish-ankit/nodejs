// Note: stream are object that handles input and output
var stream = require('stream');

/*
There are two type of steam 
1>. readable stream: pushing values to stream or performing the read operation or storing values 
2>. writable stream: stream that input data and you can write to them on screen or else where
*/

// demo of readable and writable stream for fibonacci number program (0,1,1,2,3,5,8...)

var a=0;
var b=1;

// ###### DEMO OF REABABLE STREAM ##############

var rs= new stream.Readable();

// calling method to read
rs._read = function(){
	if(b <= 144){
		
		// used setTimeout function to delay output of data 
		setTimeout(function(){
			var c = a+b;
			a=b;
			b=c;
			// Note: pushing values to stream or performing the read operation or storing values
			// Note: we used ''+c instead of c just because stream values is always be string
			// NOTE: when you read stream is done, you need a method to output or write. show that user can see read value.
			rs.push(''+c+'\n')
			
		}, 500);
		
	}else{
		this.push(null);
	}
}

// ##### now out put readable steam to standard output(on command prompt)

//rs.pipe(process.stdout);
//process.stdout.on('error', process.exit);

// following code is exports this module to used by another module
 module.exports = rs;

