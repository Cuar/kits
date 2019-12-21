const mysql =require('mysql');

//创建数据库

let connection =mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password:'root',
    database: 'cuar'
});

//链接数据库
connection.connect();

let sql ='select * from students ';

connection.query(sql,function(err,results,fields){
    if(err) throw err;
    console.log(results[2]['count(*)']);
});
