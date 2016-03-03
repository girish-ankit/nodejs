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

var loc = 'noida';

var query = con.query('CALL sp_get_employee_detail(?)', loc ,function(err,rows){
  if(err) throw err;

  console.log('Data received from Db:\n');
  console.log(rows[0]);
});

// ############## CLOSE  DATABASE CONNECTION ######################


con.end(function(err) {
  // The connection is terminated gracefully
  // Ensures all previously enqueued queries are still
  // before sending a COM_QUIT packet to the MySQL server.
});
