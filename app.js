const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://admin-Ritik:Swiftcar@5@cluster0.tfmbi.mongodb.net/newsDB?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology: true} );
const userSchema = new mongoose.Schema({
    username:String,
    password:String,
    googleId: String
}); 
const User = new mongoose.model("User",userSchema);
app.get("/", function(req, res) {
    res.render("main");
});    
app.get("/register",function(req,res){
    res.render("register");
});
app.post("/register", function(req, res) {
    const user = new User({
        username:req.body.username
    })
    res.redirect("/");
    user.save();
});







app.listen("3000",function(){
    console.log("Server is listening at port 3000");
});