exports.index = function(request, response){
	// here we not need to define header. Express will take care to it as we are working on web
	//response.send('<h1>Hello jee</h1>');

	// here first agrument is template file name and second arument is data (js object, json or from database)
	response.render('default', {
		title:' Welcome',
		className:'home',
		users: ['Ankit Kumar', 'Amrit Kaushik', 'Anup Gupta','Rajat Verma']
	});
}


exports.about = function(request, response){
	response.render('about', {
		title:' About Us',
		className:'about'
		
	});
}

exports.who = function(request, response){
      var name = request.params.name;
	 response.render('default', {
		title:' Welcome',
		name: name,
		className:'who'
		
	});
}


