var orm = require('../config/orm.js');
var burger = {
	updateOne: function(id, callback) {
		orm("updateOne", id, callback);
	},
	insertOne: function(name, callback) {
		orm("insertOne", name, callback);
	},
	selectAll: function(callback) {
		orm("selectAll", "*", callback);
	},
	deleteOne: function(id, callback) {
		orm("deleteOne", id, callback);
	}
}
module.exports = burger;
