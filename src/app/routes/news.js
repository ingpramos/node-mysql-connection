const dbConnection = require('../../config/dbConnection');

module.exports = app => {

  const connection = dbConnection();

  app.get('/', (req, res) => {
    connection.query('SELECT * FROM news', (err, result) => {
      console.log(result);
      console.log(err);
          res.render('news/news', {
            news: result
      });
    });
  });

  app.post('/news', (req, res) => {
    console.log(req.body);
    const {title, news} = req.body;
    connection.query('INSERT INTO news SET?', {
      title: title,
      news: news
    }, (err, result) => {
      res.redirect('/');
    });
  });
}
