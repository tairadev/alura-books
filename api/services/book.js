const fs = require('fs');

function getAllBooks(req, res) {
  const books = JSON.parse(fs.readFileSync('data/books.json', 'utf8'));
  return books;
}

module.exports = {
  getAllBooks,
};
