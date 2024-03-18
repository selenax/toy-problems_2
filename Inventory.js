// Challenge: Inventory
// Declare a function Inventory that, when invoked with the new keyword, returns objects that keep track of an inventory. Your Inventory function should accept two arguments: item, a string, and price, a number. The object returned should contain a property whose key matches the passed-in item argument, and is set to another object with two properties: price (which will be set to the price argument the method was called with) and quantity, which should be initially set to 1.

// Each object returned from this Inventory constructor should, via the prototype chain, have access to three methods:

// The method addItem will add additional items to the object returned from the constructor. It should also accept an item and price argument, and when invoked, should check to see if the Inventory object it is called upon has a property that matches the passed-in item name. If it does not, add one, and set it to another item object, following the same format as above. If the Inventory object does have a property with that name, increment that item's quantity property by one, and replace the price with whatever number was just passed in.

// The method deleteItem should accept a string as an argument. If a matching property exists on the Inventory object, decrement its quantity by 1 and return the string 'Deleted'. If the quantity is already 0, return the string 'Nothing to delete'.

// The method checkItem should take a string as an argument and check to see whether that string exists as a property on the Inventory object. If so, return the object for that item. If not, return the string 'Item is not in inventory'.

function Inventory(item, price) {
  //store object that keep track of inventory with this
  //item is stored as a variable key and is an object with 2 props
  	//1. price will be passed down as arg in methods
  	//2. quantity is initaize to 1
  this[item] = {'price': price, 'quantity': 1}

}

//create 3 method via prototype - 
	//1. addItem(item, price)
    //if item is not present, add item following format
    //else item is present, replace with new price passed in from arg and increment quantity by 1
Inventory.prototype.addItem = function(item, price) {
  
	if(!this[item]) {
    this[item] = {'price': price, 'quantity': 1};
  }
	else {
	  this[item].price = price;
    this[item].quantity++;
	}

	}

  //2. deleteItem(item): 
      //if quantity=0, return 'Nothing to delete'
		  //else decrement quantity by 1 and return 'Deleted'
Inventory.prototype.deleteItem = function(item) {

  if(this[item].quantity === 0) return 'Nothing to delete';
  else {
    this[item].quantity--;
    return 'Deleted';
	}

}

//3. checkItem(item): 
  //if item exists, return object of item
  //if not, return 'Item is not in inventory'
Inventory.prototype.checkItem = function(item) {

  if(this[item]) return this[item];
  else return 'Item is not in inventory';

}
  

const myInventory = new Inventory('cucumber', 2);

// Uncomment these lines to check your work!
myInventory.addItem('carrot', 1);
console.log(myInventory.checkItem('cucumber')); // Logs: { price: 2, quantity: 1 }
myInventory.addItem('cucumber', 3); 
console.log(myInventory.deleteItem('carrot')); // Logs: 'Deleted'
console.log(myInventory.deleteItem('carrot')); // Logs: 'Nothing to delete'
console.log(myInventory); // Logs: { cucumber: { price: 3, quantity: 2 }, carrot: { price: 1, quantity: 0 } }
console.log(myInventory.checkItem('radish')); // Logs: 'Item is not in inventory'
/* test cases: 
Inventory - created object has Inventory as constructor
Inventory - addItem method adds an item to created object and updates price and quantity
Inventory - deleteItem method subtracts from the quantity of an item
Inventory - checkItem method checks for an item and returns it if it exists
Inventory - all methods should be stored on the Inventory prototype rather than the object itself
*/