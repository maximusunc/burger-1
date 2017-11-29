var orm = require('../config/orm.js');
var burger = {
	updateOne: function(name, callback) {
		orm("updateOne", name, callback);
	},
	insertOne: function(name, callback) {
		orm("insertOne", name, callback);
	},
	selectAll: function(callback) {
		orm("selectAll", "*", callback);
	}
}
module.exports = burger;
