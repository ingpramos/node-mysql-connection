const mysql = require('mysql');

module.exports = () => {
  return mysql.createConnection({
    host: 'localhost',
    user: 'ingpramos',
    password: '1234',
    database: 'news_db1',
  });
}
