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

function insertBook(book) {
  const books = getAllBooks();
  books.push(book);
  fs.writeFileSync('data/books.json', JSON.stringify(books, null, 2));
  return book;
}

function changeBook(changes) {
  const currentBooks = getAllBooks();
  const bookIndex = currentBooks.findIndex((book) => book.id === changes.id);
  if (bookIndex === -1) {
    return null;
  }
  const newBook = { ...currentBooks[bookIndex], ...changes };
  currentBooks[bookIndex] = newBook;
  fs.writeFileSync('data/books.json', JSON.stringify(currentBooks, null, 2));
  return newBook;
}

function deleteBookById(id) {
  const currentBooks = getAllBooks();
  const bookIndex = currentBooks.findIndex((book) => book.id === id);
  if (bookIndex === -1) {
    return null;
  }
  currentBooks.splice(bookIndex, 1);
  fs.writeFileSync('data/books.json', JSON.stringify(currentBooks, null, 2));
}

module.exports = {
  getAllBooks,
  getBookById,
  insertBook,
  changeBook,
  deleteBookById,
};
