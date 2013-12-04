(function () {

  	"use strict";

	var app = require("org/arangodb/foxx"),
	controller = new app.Controller(applicationContext);

	// RESTful API
	// defining api routes
	// ie.: http://localhost:8529/user/:id

	// User routes

	/** GET
	 *
	 *
	 */
	app.get('/user/:id', function (req, res) {
	  console.log("user get");
	});

	/** POST
	 *
	 *
	 */
	app.post('/user/save', function (req, res) {
	  console.log("user post");
	});

	/** PUT
	 *
	 *
	 */
	app.put('/user/:id/save', function (req, res) {
	  console.log("user put");
	});

	/** DELETE
	 *
	 *
	 */
	app.del('/user/:id', function (req, res) {
	  console.log("user delete");
	});

}());
