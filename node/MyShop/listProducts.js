var faker = require('faker');


function store(){
	var randomName = faker.commerce.productName();
	var randomPrice = faker.commerce.price();

	for(var i = 0; i <= 10; i++) {
		console.log("==================");
		console.log("Welcome to MyStore");
		console.log("==================");
		console.log(randomName + " -  $" + randomPrice);
	}
}