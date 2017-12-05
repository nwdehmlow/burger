var mysql = require("mysql");

var connection;


if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
  connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'n1234567', 
    database : 'burgers_db' 
  });
}


// Export the Connection
module.exports = connection;