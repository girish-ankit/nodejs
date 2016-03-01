// This file will give you demo about standard input and output in nodejs


// set character encoding

process.stdin.setEncoding('utf8');

//readable stream from standard input

// this is event emitter call  'data' event, which  will fire when data receiving startsS
process.stdin.on('data', function(chunk){
	process.stdout.write('Chunk Data: '+chunk.toString());
	
});

//this is event emitter call  'end' event, which  will fire when data receiving 
process.stdin.on('end', function(){
	process.stdout.write('end');
	
})

// NOTE: run this command to execute code: 'cat .\abc.txt | node .\standard-input-output.js' (piping command)