var mysql = require("mysql");

var connection;


if(process.env.burgers_db){
  connection = mysql.createConnection(process.env.burgers_db);
}
else{
  connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'n1234567', // Add your password
    database : 'burgers_db' // Add your database
  });
}


// Export the Connection
module.exports = connection;