// install Mysql + express

var mysql = require('mysql');
var conn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'password',
    database : 'example'
});

conn.connect();

conn.query()