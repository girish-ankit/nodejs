/**
 * THIS FILE WILL GIVE YOU DEMO ABOUT HOW TO CREATE OBJECTS IN JAVASCRIPT 
 * I WILL GIVE YOU FOUR WAY TO CREATE OBJECT
 */

//############################################## FIRST WAY (OLD WAY) ################################################

person = new Object();

person.firstName='Ankit';
person.lastName='Kumar';
person.age=30;
person.height = 186;
person.getName = function(){
	return person.firstName+' '+person.lastName;
}

console.log();
console.log(person.firstName+' '+person.lastName+' has '+person.age+' years of age and height is '+person.height+' cm');
console.log('person object method call: '+person.getName());
console.log();

// NOTE: above code has  performance issue, just because javascript execute a single complex code much faster than 
//       running  multiple simple statement


//############################################### SECOND WAY ####################################################

player = {} // it is same as player = new Object();
player.name = 'Sachine Tendulkar';
player.game = 'Cricket';
player.getName = function(){
	return player.name;
}

	
console.log(player.name+' plays '+player.game);
console.log('player object method call: '+player.getName());
console.log();

// NOTE: above code also has  performance issue, just because javascript execute a single complex code much faster than 
//running multiple simple statement

//###############################################  THIRD WAY ####################################################

car = {color:"red", type:"SUV", number:"BH9K67453",ownerName:"Ankit Kumar", getName:function(){ return 'hii '}};

console.log(car.ownerName+' has '+car.color+' color car having type is '+car.type+' and number is '+car.number);
console.log('car object method call: '+car.getName());
console.log();

// NOTE: execution of above code is much faster as compare to first two example just because javascript
// execute a single complex code much faster than running multiple simple statement



//############################### FOURTH WAY: OBJECT CREATED BY CONSTRUCTOR FUNCTION ############################

function employee(name, eid, department, age){
	this.name = name; // note: it is same as name=name ==> this.name = name
	this.eid=eid;
	this.department = department;
	this.age= age;
	this.changeName = function(cName){ // there is no need to write this before changeName() function
		this.name = cName;
		
	}
}

var emp1 = new employee('Ankit', 'E5424', 'PHP',30);
var emp2 = new employee('Sumit', 'E5430', 'HTML',28);
console.log('Empoyee '+emp1.name+' has employee id '+emp1.eid+' deparment is '+emp1.department+' and age is '+emp1.age);
console.log('Empoyee '+emp2.name+' has employee id '+emp2.eid+' deparment is '+emp2.department+' and age is '+emp2.age);

//calling changeName function
emp1.changeName('Girish');
console.log('Changed info: Empoyee '+emp1.name+' has employee id '+emp1.eid+' deparment is '+emp1.department+' and age is '+emp1.age);

console.log();
// ############################### PROTOTYPE OBJECT (VERY IMPORTANT) ############################################

/** 
 * NOTE: There are several ways to add a method to an Object. One way is as shown above 'changeName'.
 *       This works but the problem with this approach is that, if you create 100 employee objects 
 *       there will be 100 copies of changeName() methods in memory. We don't want to create copies of method,
 *       instead we want all the objects to share the same method code, i.e- only one copy of function is load
 *       in memory. This can be achieved using JavaScript prototype object.
 */

// ALSO IF YOU DEFINE MEHTOD USING PROTOTYE THEN YOU CAN APPLY INHERITANCE AND METHOD OVERRIDING IN OBJECT

function student(name){
	this.name = name;
	
	// FIRST WAY: to define method, but if you create 10 object 10 copy will be created in memory
	this.getNameLower = function(){
		return this.name.toLowerCase() ;
		
	}
}


//SECOND WAY: to define method,  if you create 10 object 1 copy will be created in memory

student.prototype.getNameUpper = function(){
	return this.name.toUpperCase();
}

var st = new student('Prince kumar');

console.log('Normal Method definition: '+st.getNameLower());
console.log('Normal Method definition: '+st.getNameUpper());
console.log();

// ######################### Anonymous object definition ############################

({
	name:'Ankit Kumar',
	age: 32,
    getInfo : function(){
    	
    	console.log(this.name+ ' has age '+this.age+' years');
    }
	
}).getInfo();







