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


// ##############3  DEMO 1 ######################
loc = 'delhi'
var paraArr = [loc];

console.log('');
var queryString = "SELECT * FROM employees where location= ?";

var query1 = con.query(queryString, paraArr, function(err, result){
  // following code only display running query
  console.log('#1>. '+query1.sql);
  console.log('');

  // err parameter show erros while execution query. For demo replace table name with employees
  if(err){
    console.log(err);
    console.log('');
    return;

  }

  // echo result
  for (var i = 0; i < result.length; i++) {
  console.log(result[i].name+' --- '+result[i].location+' --- '+result[i].age);
};

console.log('');
});


// ############## DEMO 2 ######################

console.log('');

console.log('');

var name='A%';
var loc = 'noida'
var paraArr = [loc, name];
var queryString = "SELECT * FROM employees where location= ? AND name like ?";

var query = con.query(queryString, paraArr,  function(err, result){
  // following code only display running query
  console.log('#2>. '+query.sql);
  console.log('');

  // err parameter show erros while execution query. For demo replace table name with employees
  if(err){
    console.log(err);
    console.log('');
    return;

  }

  // echo result
  for (var i = 0; i < result.length; i++) {
  console.log(result[i].name+' --- '+result[i].location+' --- '+result[i].age);
};

console.log('');
});


console.log('');


// ############## CLOSE  DATABASE CONNECTION ######################


con.end(function(err) {
  // The connection is terminated gracefully
  // Ensures all previously enqueued queries are still
  // before sending a COM_QUIT packet to the MySQL server.
});
