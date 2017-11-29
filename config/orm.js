var connection = require('./connection.js');
module.exports = function(method, param, callback) {
	var query;
	var queryFunction = function(err,res) {
		if(err) throw err;
		callback(res);
	};
	switch(method) {
		case 'selectAll':
			query = "SELECT ? FROM burgers";	
			break;
		case 'insertOne':
			query = "INSERT INTO burgers (burger_name) VALUES (?)";
			break;
		case 'updateOne':
			query = "UPDATE burgers SET devoured = true WHERE burger_name = ? ";
			break;
		}
	connection.query(query, [param], queryFunction(err,res));
	}
}