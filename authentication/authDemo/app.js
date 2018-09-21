var express 				= require("express"),
	mongoose 				= require("mongoose"),
	passport				= require("passport"),
	bodyParser 				= require("body-parser"),
	User 					= require("./models/user"),
	LocalStrategy			= require("passport-local"),
	passportLocalMongoose	= require("passport-local-mongoose")

var app = express();

app.use(require("express-session")({
	secret: "My favorite dog is Duke",
	resave: false,
	saveUninitialized: false
}));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
mongoose.connect("mongodb://localhost/auth_demo_app");
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


//========================
//  ROUTES
//========================

app.get("/", function(req, res){
	res.render("home");
});

app.get("/secret", function(req, res){
	res.render("secret");
});


//Sign Up Form
app.get("/register", function(req, res){
	res.render("register");
})

//Handle user sign up
app.post("/register", function(req, res){
	req.body.username
	req.body.password
	User.register(new User({username: req.body.username}), req.body.password, function(err, user){
		if(err) {
			console.log(err);
			res.render("register");
		} 
		passport.authenticate("local")(req, res, function(){
			res.redirect("/secret");
		});
	});
})


//local port
var PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});



























