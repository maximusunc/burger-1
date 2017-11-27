var connection = require('./connection.js');
module.exports = function(method, name) {
	var query;
	var queryFunction = function(err,res) {
		if(err) throw err;
		console.log(res.rowsAffected);
	};
	name = name || "";
	switch(method) {
		case 'selectAll':
			query = "SELECT * FROM burgers";			
			queryFunction = function(err,res) {
				if (err) throw err;
				return res;
			};
			break;
		case 'insertOne':
			query = "INSERT INTO burgers (burger_name) VALUES =" + name;
			break;
		case 'updateOne':
			query = "UPDATE burgers SET devoured = true WHERE burger_name = "+ name;
			break;
		}
	connection.query(query,queryFunction(err,res));
	}
}