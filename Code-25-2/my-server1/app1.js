const express = require('express');
const app = express();

// Home page
app.get('/', (req, res) => {
  res.send('<h1>👋 Greetings from the Express server!</h1>');
});

// Server listens on port 3000
app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});
