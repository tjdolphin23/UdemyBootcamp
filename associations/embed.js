var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blogDemo");

//USER - email, name
var userSchema = new mongoose.Schema({
	email: String,
	name: String
});

var User = mongoose.model("User", userSchema);

var postSchema = new mongoose.Schema({
	title: String,
	contect: String
});

var Post = mongoose.model("Post", postSchema);


// var newUser = new User({
// 	email: "Charlie@brown.edu",
// 	name: "Charlie Brown"
// });

// newUser.save(function(err, user){
// 	if(err) {
// 		console.log(err);
// 	} else {
// 		console.log(user);
// 	}
// 

var newPost = new Post({
	title: "Love them Apples",
	content: "Apples are my favorite fruite and delicious"
});

newPost.save(function(err, user){
	if(err) {
		console.log(err);
	} else {
		console.log(post);
	}
});








