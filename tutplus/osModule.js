var os = require('os');

console.log();

//Returns the operating system's default directory for temp files.
console.log('#1>. Operating Systme default temp directory path: '+os.tmpdir());
console.log();

// Returns the hostname of the operating system

console.log('#2>. Hostname of the operating system: '+os.hostname());
console.log();

//Returns the operating system name

console.log('#3>. Operating system name: '+os.type());
console.log();

//Returns the operating system CPU architecture

console.log('#4.1>. Operating system CPU architecture: '+os.arch());
console.log();

//Returns the operating system platform

console.log('#4.2>. Operating system platform: '+os.platform());
console.log();


// Returns the system uptime in seconds.

console.log('#5>. Operating system uptime in seconds: '+os.uptime());
console.log();

//Returns an array containing the 1, 5, and 15 minute load averages.

console.log('#6>. Operating system average load in last 1, 5, and 15 minute: '+os.loadavg());
console.log();

// Returns the total amount of system memory in bytes.
console.log('#7>. Total amount of system memory in bytes: '+os.totalmem());
console.log();

//Returns the amount of free system memory in bytes.
console.log('#8>. Amount of  free system memory in bytes: '+os.freemem());
console.log();

//Returns an array of objects containing information about each CPU/core installed: model, speed (in MHz), 
//and times (an object containing the number of milliseconds the CPU/core spent in: user, nice, sys, idle, and irq).

//Get a list of network interfaces
console.log('#9>. Information about each CPU/core: ', os.cpus());
console.log();

//Get a list of network interfaces
console.log('#10>. List of network interfaces: ', os.networkInterfaces());
console.log();




