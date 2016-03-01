var path = require('path');

var fileName =  __filename;
var fileName2 =  'C:\\wamp\\node\\tutplus\\pathModule.js'; 
// you have to use double back slash to escape one back slash character
var dirName =  __dirname;
var fromPath = 'C:\\wamp\\node\\tutplus\\node_modules';
var toPath = 'C:\\wamp\\node\\test';




console.log('#1>. Javascript way to get absolute current directory path: '+ dirName );
console.log('#2>. Javascript way to get absolute current directory file: '+ fileName );
console.log();


//Normalize a string path, taking care of '..' and '.' parts.
console.log('#3>. Get directory path: '+path.dirname(fileName2));

console.log('#4>. Get file name: '+path.basename(fileName2));

console.log('#5>. Get file name extension: '+path.extname(fileName2));


console.log('#6>. Clean path:  '+path.normalize('C:\\this\\node\\..\\.\\dir'));

// Join all arguments together and normalize the resulting path.
console.log('#7>. Join multi path value to single: '+path.join('\\this', 'is', 'a', 'path'));

console.log('#8>. Is path absolute ?: '+path.isAbsolute(fileName2));

// Solve the relative path from from to to.

console.log('#8>. Show relative path of topath from frompath: '+path.relative(fromPath, toPath));

console.log('#9>. Operating system path separater: '+path.sep);

console.log('#10>. Split path by operating system file separater: '+fileName2.split(path.sep));

console.log('#11>. Get path related info: ', path.parse(fileName2));


console.log('#11>. Create path from related info: '+path.format({dir:'this', base:'demo.txt'}));








