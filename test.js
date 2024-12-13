// var mysql = require('mysql');
// var express = require('express');
// var app = express(); 
// var bodyParser = require('body-parser');

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//     extended: true
// }));

// // Start the server on port 3000
// //127.0.0.1:3000
// app.listen(3000,  function () {
//     console.log('Node app is running on port 3000');
// });
// module.exports = app;



// //connect database
// var con = mysql.createConnection({
//    host     : 'localhost',
//    user     : 'root',
//    password : '',
//    database : 'rent_bike',
// });
// con.connect();

//  // default route
//  app.get('/', function (req, res) {
//     return res.send({ error: false, message: 'hello, connect successfully' })
// });

// //list user
// app.get('/api/users', function (req, res) {
//     con.query('SELECT * FROM user', function (error, results, fields) {
//         if (error) throw error;
//         return res.send(results);
//     });
// });


// // Truy xuất user với id
// app.get('/api/iduser/:id', function (req, res) {
//     let user_id = req.params.id;
//     if (!user_id) {
//      return res.status(400).send({ error: true, message: 'Please provide user_id' });
//     }
//     con.query('SELECT * FROM user where id_user=?', user_id, function (error, results, fields) {
//      if (error) throw error;
//       return res.send(results);
//     });
// });

// // Truy xuất user với email
// app.get('/api/useremail/:id', function (req, res) {
//     let email = req.params.id;
//     if (!email) {
//      return res.status(400).send({ error: true, message: 'Please provide user_id' });
//     }
//     con.query('SELECT * FROM user where email=?', email, function (error, results, fields) {
//      if (error) throw error;
//       return res.send(results);
//     });
// });
