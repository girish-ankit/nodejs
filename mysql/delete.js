var mysql = require('mysql');

// connection object definition
var con = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'',
  port:3306,
  database: 'nodejs'
});

// connect to database
con.connect(function(err){
  if(err){
    console.log('Error connecting to Db');
    console.log('');
    return;
  }
  console.log('Connection established');
  console.log('');
});

//
loc = 'lucknow';
var paraArr = [loc];
var queryString = "DELETE FROM employees WHERE location = ?";

var query = con.query(queryString, paraArr, function(err, result){
  console.log(query.sql);

  if(err){
    console.log(err);
    return;
  }

  console.log('Deleted ' + result.affectedRows + ' rows');

});

// ############## CLOSE  DATABASE CONNECTION ######################


con.end(function(err) {
  // The connection is terminated gracefully
  // Ensures all previously enqueued queries are still
  // before sending a COM_QUIT packet to the MySQL server.
});
