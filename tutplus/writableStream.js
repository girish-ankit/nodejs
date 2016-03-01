// Note: stream are object that handles input and output
var stream1 = require('stream');
var fibNumber = require('./readableStreamModuleForWritable');


/*
There are two type of steam 
1>. readable stream: stream that output data and you can read  
2>. writable stream: stream that input data and you can write to them
*/

var wr = new stream1.Writable();

var cnt = 0;
wr._write = function(inComingData, encoding, next){
	console.log(inComingData.toString());
	//next(); // it means call the function for next incoming data
	if(cnt++ < 10) next();
	
	
}


// Pipe the new readable stream to writable stream

fibNumber.pipe(wr);

// Note in above line of code we are giving value of stream readable object to stream writable object

