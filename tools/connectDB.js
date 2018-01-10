var mysql = require('mysql');
var fs = require('fs');

var conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: "test"
});

conn.connect();

var data = fs.readFileSync("../data/result.json").toString();
var list = JSON.parse(data);
console.log("Read local data successed,The data length " + list.length);

insertData();

function insertData() {
  list.forEach(item => {
    var insertSql = 'insert into fa_icon (name, style, url)value(?,?,?)';
    var params = [item.name, item.style, item.url];
    conn.query(insertSql, params, function (err, result) {
      if (err) {
        console.log("Erro" + err.message);
        return;
      }
    })
  });
  conn.end();
  console.log("插入完毕");
}
