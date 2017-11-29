var express = require('express');
var expHBars = require('express-handlebars');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var routes = require("./controllers/burger_controller.js");

var PORT = process.env.PORT || 3000;
var app = express();

app.engine("handlebars", expHBars({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use("/index", routes);

app.listen(PORT, function() {
  console.log("listening on port", PORT)
});
