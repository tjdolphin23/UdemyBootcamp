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
passport.use(new LocalStrategy(User.authenticate()));


//========================
//  ROUTES
//========================

app.get("/", function(req, res){
	res.render("home");
});

app.get("/secret", isLoggedIn, function(req, res){
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


//LOG-IN ROUTES
app.get("/login", function(req, res){
	res.render("login");
});

app.post("/login", passport.authenticate("local", {
		successRedirect: "/secret",
		failureRedirect: "/login"
	}), function(req, res){

});



//LOG OUT ROUTE
app.get("/logout", function(req, res){
	req.logout();
	res.redirect("/");
});


//MIDDLEWARE FOR LOG IN
function isLoggedIn(req, res, next) {
	if(req.isAuthenticated()){
		return next();
	}
	res.redirect("/login");
};

//local port
var PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});



























