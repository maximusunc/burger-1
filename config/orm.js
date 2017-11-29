var connection = require('./connection.js');
module.exports = function(method, name, callback) {

	var query;
	var queryFunction = function(err,res) {
		if(err) throw err;
		callback(res);
	};
	switch(method) {
		case 'selectAll':
			query = "SELECT * FROM burgers";	
			break;
		case 'insertOne':
			query = "INSERT INTO burgers (burger_name) VALUES (" + name + ")";
			break;
		case 'updateOne':
			query = "UPDATE burgers SET devoured = true WHERE 'id' = " + name;
			break;
		}
	connection.query(query, queryFunction);
}
