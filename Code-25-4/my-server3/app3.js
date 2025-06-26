const express = require('express');
const app = express();

// Tell Express to use EJS as the templating engine
app.set('view engine', 'ejs');

// Enable parsing of form data
app.use(express.urlencoded({ extended: true }));

// GET: Display the form
app.get('/', (req, res) => {
  res.render('form');
});

// POST: Handle submitted data
app.post('/submit', (req, res) => {
  const name = req.body.name;
  const message = req.body.message;
  res.render('result', { name, message });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});
