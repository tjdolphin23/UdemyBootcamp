var express = require("express");
var app = express();

// "/" => "Hi there"
app.get("/", function (req, res) {
	res.send("Hi there, welcome to my assignment!");
});

// "/speak" => The ___ says ____!
app.get("/speak/:animal", function(req, res){
	var sounds = {
		pig: "oink",
		cow: "moo",
		dog: "woof woof",
		cat: "meow",
		goldfish: "....."
	}
	var animal = req.params.animal.toLowerCase();
	var sound = sounds[animal];
	res.sent("The " + animal + " says " + sound "!");
});


// "/repeat" => "repeat hello's"
app.get("/repeat/:message/:times", function(req, res) {
	var message = req.parms.message;
	var times = Number(req.params.times);
	 
	for(var i = 0; i < times; i++) {
		result += message " ";
	}
	res.send(result);
});

// "*" => catch all
app.get("*", function(req, res){
	res.send("Sorry, page not found...Waht are you doing with your life");
});


app.listen(process.env.PORT, process.env.IP, function() {
	console.log("Server has started!");
});
