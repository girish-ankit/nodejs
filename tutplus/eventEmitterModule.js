
// ######################### DEMO 1 #####################################
var EventEmitter = require('events').EventEmitter;
var eventEmitter = new EventEmitter();

// bind events and with action
eventEmitter.on('event1', action1);
eventEmitter.on('event2', action2);
eventEmitter.on('event3', action3);

// calling events
eventEmitter.emit('event1', 'data1');
eventEmitter.emit('event2', 'data2');
eventEmitter.emit('event3', 'data3');


// functions that will call on different events

function action1(data){
	
	console.log('action 1 is called by event 1 '+data);
}

function action2(data){
	
	console.log('action 2 is called by event 2 '+ data);
}

function action3(data){
	
	console.log('action 3 is called by event 3 '+data);
}

// ######################### DEMO 2 ############################################

eventEmitter.on('event4', function(data){
	console.log('event4: ', data);
	
});

// following code is similar to above except following code is execute only one time
eventEmitter.once('event4', function(data){
	console.log('event4 call once : ', data);
	
});

//NOTE: You can cancel this event by calling removeListner() function

eventEmitter.on('event4', function(data){
	console.log('event4: ', data);
	
});

function callback(){
	console.log('cancelling further event call');
	eventEmitter.removeListner('event4', '');
	
}

eventEmitter.emit('event4', {name:'ankit kumar', age:30});
eventEmitter.emit('event4', {name:'ankit kumar', age:30});
eventEmitter.emit('event4', callback);
//eventEmitter.emit('event4', {name:'ankit kumar', age:30});















