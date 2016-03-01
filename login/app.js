var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var passport = require('passport');
var flash = require('connect-flash');
var forms = require('forms');
var fields = forms.fields;
var validators = forms.validators;


// Database connection
var configDB = require('./config/database.js');
mongoose.connect(configDB.url);

// including passport

require('./config/passport.js')(passport);

// Middleware
app.use(morgan('dev'));
app.use(cookieParser());
app.use(session({'secret':'any_secret_key', 'saveUninitialized':true, 'resave':true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// Setting template engine for views
app.set('view engine', 'ejs');

// Passing data to routs
require('./app/router')(app, passport);

app.listen(port);

console.log('Server running on port ', port);
