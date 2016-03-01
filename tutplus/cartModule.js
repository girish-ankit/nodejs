/**
 * http://usejsdoc.org/
 */

function Cart(){
	this.items=[];
	
}

Cart.prototype.addItem = function(name, price){
	this.items.push({name:name, price:price});
}

Cart.prototype.total = function(){
	return this.items.reduce(function(a,b){return a+b.price},0)
	
}

module.exports = Cart;

/**
 *  HOW TO CALL THIS MODUEL
 *  STEP 1: Go to folder C:\wamp\node\tutplus
 *  STEP 2: type 'node' text on command prompt
 *  STEP 3:TYPE FOLLOWING COMMANDS:
 *  cart = require('./cartModule');
 *  // for user 1
 *  u1 = new cart();  // this variable has same name as in require() statement
 *  u1.addItem('book', 20);
 *  u1.addItem('cap', 10); 
 *  u1.total();
 *  get items list: u1.items;
 *  
 *  
 *  // for user 2
 *  u2 = new cart(); 
 *  u2.addItem('food', 120);
 *  u2.total();
 *  get items list: u2.items;
 */  
