function odds(arr,callback){
	var oddNums = arr.filter(function(n){return n%2;})
	var err = arr.indexOf(3) > -1 ? new Error('No 3s Allowed in array') : null;

	setTimeout(function(){
		// here callback means the function passed in odds() call where console.log is printed
		callback(err, oddNums);
	}, 1000);
}

var numbers = [1,2,4,5,6,7,8,9];

odds(numbers, function(err, data){
	if(err) throw err;

	console.log('data: ', data);
});

console.log("this line comes after the odd() call but dislay first just becasue of asynchronus behavior of javascript");