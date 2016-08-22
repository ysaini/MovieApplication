var person = {
	firstname: "yatender",
	lastname: "saini",
	age: 32
};

function worthless(){

}

var printName = function(){
	console.log("Printing my name");
}

//console.log(worthless());
//printName();
//console.log(person);
//setTimeout(printName, 5000);

// -----------------------------------------

function placeAndOrder(orderNumber){
	console.log("Customer order : ", orderNumber);

	cookAndDeliverFood(function(){
		console.log("Delivered food order : ",orderNumber);
	})
}

function cookAndDeliverFood(callback){
	setTimeout(callback, 5000);
}

/*
placeAndOrder(1);
placeAndOrder(2);
placeAndOrder(3);
placeAndOrder(4);
placeAndOrder(5);
*/
// -----------------------------------------

var Bucky = {
	printFirstName: function(){
		console.log("My name is Bucky");
		console.log(this === Bucky);
	}	
}

Bucky.printFirstName();

function doSomethingWorthless() {
	console.log("\n I am worthless");
	console.log(this === global);	
}
doSomethingWorthless();

// -----------------------------------------
// Prototyping
// -----------------------------------------

function User(){
	this.name = "";
	this.life = 100;
	this.giveLife = function giveLife(targetPlayer){
		targetPlayer.life++;
		console.log(this.name + " gave 1 life to " + targetPlayer.name);
	}
}

var Bucky = new User();
var Wendy = new User();

Bucky.name = "Bucky";
Wendy.name = "Wendy";

Bucky.giveLife(Wendy);

console.log("Bucky life : "+Bucky.life);
console.log("Wendy life : "+Wendy.life);

User.prototype.uppercut = function uppercut(targetPlayer){
	targetPlayer.life -= 3;
	console.log(this.name + " just uppercutted " + targetPlayer.life);		
};

Wendy.uppercut(Bucky);
console.log("Bucky : "+Bucky.life);
console.log("Wendy : "+Wendy.life);







