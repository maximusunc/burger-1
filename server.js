var express = require('express');
var expHBars = require('express-handlebars');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var burgerController = require('./controllers/burger_controller.js')
var app = express();
var PORT = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.engine("handlebars", expHBars({defaultLayout: "main"}));
app.set("view engine", "handlebars");

