const mysql = require('mysql')
const connectionConfig = {
    host: "localhost",
    port: 3306,
    user: "user",
    password: "root",
    database: "burgers_db"
};

var connection = mysql.createConnection(connectionConfig);

connection.connect(function (err) {
    if (err) {
      console.error(`error connecting: ${err.stack}`);
      return;
    }
    console.log(`connected as id  ${connection.threadId}`);
});

module.exports = connection;