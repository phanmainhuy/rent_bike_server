const mysql = require('mysql');

const con = {
   // //connect database
   host     : process.env.DB_HOST,
   user     : process.env.DB_USER,
   password : process.env.DB_PASS,
   database : process.env.DB_DATABASE,
};

const connectingDB = () => {
    return mysql.createConnection(con);
}

module.exports = connectingDB