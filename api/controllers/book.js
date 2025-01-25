const { getAllBooks, getBookById } = require('../services/book');

function getBooks(req, res) {
  try {
    const books = getAllBooks();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

function getSpecificBook(req, res) {
  try {
    const book = getBookById(req.params.id);
    if (!book) {
      res.status(404).json({ message: 'Book not found' });
    }
    res.json(book);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = {
  getBooks,
  getSpecificBook,
};
