var express 				= require("express"),
	mongoose 				= require("mongoose"),
	passport				= require("passport"),
	bodyParser 				= require("body-parser"),
	User 					= require("./models/user"),
	LocalStrategy			= require("passport-local"),
	passportLocalMongoose	= require("passport-local-mongoose")

var app = express();

app.set("view engine", "ejs");
mongoose.connect("mongodb://localhost/auth_demo_app");




app.get("/", function(req, res){
	res.render("home");
});

app.get("/secret", function(req, res){
	res.render("secret");
});


//local port
var PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
