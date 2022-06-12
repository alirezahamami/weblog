const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(express.static(__dirname + "/views")); //use css for loading
app.use(bodyParser.urlencoded({
  extended: true
})); // use for post method on html
app.set("view engine", "ejs"); //define of EJS : Views folder :

var title = ["Day1"];
var body = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."];

app.get("/", function(req, res) {
  res.render('index', {
    titles: title,
    bodys: body
  })
})

app.get("/compose", function(req, res) {
  res.render("compose");
})

app.post("/", function(req, res) {
  title.push(req.body.Posttitle)
  body.push(req.body.Postbody)
  res.redirect("/")
})

app.listen(process.env.PORT || 3000, function() {
  console.log("the server is started at 3000.")
})
