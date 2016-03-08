console.log("Hello");
debugger;

function functionFirst(x){
	return functionSecond(x*2);
}

function functionSecond(y){
	return functionThird(y+16);
}

function functionThird(z){
	return z*3;
}

result = functionFirst(8);
console.log(result);