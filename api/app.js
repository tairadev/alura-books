const express = require('express');
const bookRoute = require('./routes/book');

const app = express();

app.use(express.json());

app.use('/book', bookRoute);

const port = 8000;

app.get('/', (req, res) => {
  res.send('Hello World - by Guilherme');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
