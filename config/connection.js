var mysql = require("mysql");

var connection;


if(process.env.nwdehmlow){
  connection = mysql.createConnection(process.env.nwdehmlow);
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