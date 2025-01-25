const fs = require('fs');

function getAllBooks() {
  const books = JSON.parse(fs.readFileSync('data/books.json', 'utf8'));
  return books;
}

function getBookById(id) {
  const books = getAllBooks();
  const book = books.find((book) => book.id === id);
  return book;
}

module.exports = {
  getAllBooks,
  getBookById,
};
