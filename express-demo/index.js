var express = require('express');
var app = express();

// Including custom routes module which contains routing information
var routes = require('./routes'); // in side routes folder there must be a file having name index.js

// setting template engine
app.set('view engine','ejs');

// how to set information that is availabe in all routes and all templates or global variable for templates and routes

// you can assing any type of data to myData variable like string, array, json ... etc
app.locals.myData = 'JMD'

// You can define your views folder by following code
// app.set('views', __dirname'/ankitView');

// #################  Handle request or Routing  ##################################

	// #################  First Way ####################

		app.get('/', routes.index);
		app.get('/about', routes.about);
		app.get('/who/:name?', routes.who);  // url" http://localhost:3000/who/ankit

	//  ###############  Second Way ##############
	
		app.get('/contact', function(request, response){
		// here we not need to define header. Express will take care to it as we are working on web
		//response.send('<h1>Hello jee</h1>');
		// here first agrument is template file name and second arument is data (js object, json or from database)
		response.render('default', {
			title:' Contact Us',
			className:'contact-us'		
		});
	   });

	// ###############   Third Way ################

		app.get('/who/:name?/:title?', function(request, response){
		      var name = request.params.name;
		      var title = request.params.title;
			  response.send('<h1>'+name+' has title: '+title+'</h1>');
		});

	// ###############   Fourth Way ################

		// For url that doesn't exist show 404 page
		app.get('*', function(request, response){
		       response.send('<h1>This page does not exist</h1>');
		});

// Create server to listen request

var server = app.listen(3000, function(){
	console.log('Listing on port 3000');
});