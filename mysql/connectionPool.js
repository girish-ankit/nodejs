var mysql = require('mysql');

// connection object definition
var pool      =    mysql.createPool({
     connectionLimit : 100, //important
     host:'localhost',
     user:'root',
     password:'',
     port:3306,
     database: 'nodejs',
     debug    :  false
 });

pool.getConnection(function(err, con){

  if(err){
    console.log(err);
    console.log('');
    return;
  }

  loc = 'delhi'
  var paraArr = [loc];
  var queryString = "SELECT * FROM employees where location= ?";

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

        // echo result
        for (var i = 0; i < result.length; i++) {
        console.log(result[i].name+' --- '+result[i].location+' --- '+result[i].age);
      };

      console.log('');


      });

      con.release();

});
