var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/state_app");

var stateSchema = new mongoose.Schema({
	name: String,
	establish: Number,
	region: String
}); 

var State = mongoose.model("State", stateSchema);

//adding a new state to DB
// var usa = new State ({
// 	name: "California",
// 	establish: 1891,
// 	region: "West"
// });

// usa.save(function(err, state){
// 	if(err){
// 		console.log("Error, Error, Error");
// 	} else {
// 		console.log("State has been stored");
// 		console.log(state);
// 	}
// });

//retriefve all states from DB

// State.find({}, function(err, state){
// 	if(err) {
// 		console.log("Error, Error, Error");
// 		console.log(err);
// 	} else {
// 		console.log(state);
// 	}
// });

State.create({
	name: "Florida",
	establish: 1801,
	region: "Southeast"
}, function(err, state){
	if(err){
		console.log(err)
	} else {
		console.log(state);
	}
});