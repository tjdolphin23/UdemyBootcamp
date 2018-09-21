var express = require("express");
var mongoose = require("mongoose");
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
