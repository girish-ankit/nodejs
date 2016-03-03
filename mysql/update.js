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


loc = 'delhi';
age = 70;
var paraArr = [age,loc];

console.log('');
var queryString = "UPDATE employees SET age = ? Where location = ?";

var query = con.query(queryString, paraArr, function(err, result){
  // following code only display running query
  console.log('#1>. '+query.sql);
  console.log('');

  // err parameter show erros while execution query. For demo replace table name with employees
  if(err){
    console.log(err);
    console.log('');
    return;

  }

  console.log('Changed ' + result.changedRows + ' rows');
});

// ############## CLOSE  DATABASE CONNECTION ######################


con.end(function(err) {
  // The connection is terminated gracefully
  // Ensures all previously enqueued queries are still
  // before sending a COM_QUIT packet to the MySQL server.
});
