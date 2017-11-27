var orm = require('../config/orm.js');
var burger = {
	updateBurger: function(name) {
		orm("updateOne", name);
	}
	addBurger: function(name) {
		orm("insertOne", name);
	}
	selectAll: function() {
		orm("selectAll");
	}
}
module.exports = burger;
// * Inside your `burger` directory, create a folder named `models`.

//   * In `models`, make a `burger.js` file.

//     * Inside `burger.js`, import `orm.js` into `burger.js`

//     * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.

//     * Export at the end of the `burger.js` file.
