const { getAllBooks } = require('../services/book');

function getBooks(req, res) {
  try {
    const books = getAllBooks();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = {
  getBooks,
};
