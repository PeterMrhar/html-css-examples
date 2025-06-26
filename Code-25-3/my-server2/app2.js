const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('hello', { title: 'My First Express Page', name: 'Peter' });
});

app.listen(3000, () => {
  console.log('Express with template running at http://localhost:3000');
});
