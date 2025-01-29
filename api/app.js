const express = require('express');
const cors = require('cors');
const bookRoute = require('./routes/book');
const favoriteRoute = require('./routes/favorite');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/book', bookRoute);

app.use('/favorite', favoriteRoute);

const port = 8000;

app.get('/', (req, res) => {
  res.send('Hello World - by Guilherme');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
