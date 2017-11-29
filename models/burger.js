var orm = require('../config/orm.js');
var burger = {
	updateBurger: function(name, callback) {
		orm("updateOne", name, callback);
	}
	addBurger: function(name, callback) {
		orm("insertOne", name, callback);
	}
	selectAll: function(callback) {
		orm("selectAll", "*", callback);
	}
}
module.exports = burger;
