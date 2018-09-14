var cfg0 = env.site_config.database;
var connection = pkg.mysql.createConnection(cfg0);
connection.connect();
var str = "SELECT * FROM `menu`; ";

connection.query(str, function (error, results, fields) {
  connection.end();
  if (error) {
    res.send({status:'error', value:error.message});
  } else {
    res.send({status:'success', value:results});
  }
});
