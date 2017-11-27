var mysql = require('mysql');
module.exports = funciton() {
	var connection = mysql.createConnection({
		host: "localhost",
		port:3306,
		user:'root',
		password: 'Yourjoyisyoursorrow6392!',
		database: 'burgers_db'
	});
	connection.connect(function(err) {
	  if (err) throw err;
	  console.log("connected as id " + connection.threadId);
	  connection.end();
	});
}
