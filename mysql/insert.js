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

// data to be insert in database. Map it with table column and create objec to it


var employeesData ={
  name: 'Deepak Kumar',
  location: 'lucknow',
  age: 30
};

// NOTE: '?' is a place holder always used it just because it also prevents mysql injectoin

var query = con.query("INSERT INTO employees set ?", employeesData, function(err, result){
  // following code only display running query
  console.log(query.sql);
  console.log('');

  // err parameter show erros while execution query. For demo replace table name with employees
  if(err){
    console.log(err);
    console.log('');
    return;

  }

  // echo result
  console.log(result);
});


// END  DATABASE CONNECTION

con.end(function(err) {
  // The connection is terminated gracefully
  // Ensures all previously enqueued queries are still
  // before sending a COM_QUIT packet to the MySQL server.
});
