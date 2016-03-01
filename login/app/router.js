// Importing 'user' table structure
var User = require('./models/user');

module.exports = function(app, passport){

	   // Render home page
		app.get('/', function(req, res){
			res.render('index.ejs');
		});

        // Render signup page
		app.get('/signup', function(req, res){
			res.render('signup.ejs', {message:req.flash('signupMessage')});
		});

		// Received data posted by signup page  and save it to database

		app.post('/signup', passport.authenticate('local-signup', {
			successRedirect : '/',
			failureRedirect : '/signup',
			failureFlash : true
		}));

        // Render signup page
		app.get('/login', function(req, res){
			res.render('login.ejs', {message:req.flash('loginMessage')});
		});


		// process the login form
	    app.post('/login', passport.authenticate('local-login', {
	        successRedirect : '/profile', // redirect to the secure profile section
	        failureRedirect : '/login', // redirect back to the signup page if there is an error
	        failureFlash : true // allow flash messages
	    }));

	    app.get('/profile', isLoggedIn, function(req, res) {
	        res.render('profile.ejs', {
	            user : req.user // get the user out of session and pass to template
	        });
         });

				 app.get('/myform',  function(req, res) {
	 	        res.render('myform.ejs', {
							title: "My Demo Form", //page title
							description:"This form is created for demo",
							action: "/myform", //post action for the form
							fields: [
							{name:'First name',type:'text',property:'required'},   //first field for the form
							{name:'Last name',type:'text',property:'required'},   //first field for the form
							{name:'Email',type:'text',property:'required'},   //first field for the form

							{name:'Password',type:'password',property:'required'},  //another field for the form

							{name:'Upload Image',type:'file',property:'required'},   //first field for the form

							{name:'Description',type:'textarea',property:'required', rows:5},  //another field for the form

							{name:'Choose options',type:'checkbox',property:'required',
							 options:[
												{'title':'title 1', 'value':'value 1'},
												{'title':'title 2', 'value':'value 2'},
												{'title':'title 3', 'value':'value 3'}
											]
						},   //first field for the form

						{name:'Choose radio',type:'radio',property:'required',
						 options:[
											{'title':'title 1', 'value':'value 1'},
											{'title':'title 2', 'value':'value 2'},
											{'title':'title 3', 'value':'value 3'}
										]
					},   //first field for the form

					{name:'Select options',type:'select',property:'required',
					 options:[
										{'title':'title 1', 'value':'value 1'},
										{'title':'title 2', 'value':'value 2'},
										{'title':'title 3', 'value':'value 3'}
									]
				}   //first field for the form



							]
	 	        });
	          });


						app.post('/myform',  function(req, res) {
							console.log('',req.body);
							res.send(req.body);
						});





		/*
		app.post('/signup', function(req, res){

			// Getting form data and store in variables
	        var email = req.body.email;
			var password = req.body.password;

            // save data to database
			var newUser = new User();
			newUser.local.username = email;
			newUser.local.password = password;

			newUser.save(function(err){
				if(err)
					 throw err;
			});

            // At last redirect to home page
			res.redirect('/');

		});

		*/

		// =====================================
	    // LOGOUT ==============================
	    // =====================================
	    app.get('/logout', function(req, res) {
	        req.logout();
	        res.redirect('/');
	        });
	};


	// module.exports ends

// route middleware to make sure a user is logged in
	function isLoggedIn(req, res, next) {

		// if user is authenticated in the session, carry on
		if (req.isAuthenticated())
		 return next();

		    // if they aren't redirect them to the home page
		res.redirect('/');
	}
