var express = require('express');
var app = express();

// routing creation

app.get('/', function(req, res){
	
	res.send('Kya  hall hai je ?');
	
});


app.listen(3000);