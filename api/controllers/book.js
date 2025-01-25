const {
  getAllBooks,
  getBookById,
  insertBook,
  changeBook,
  deleteBookById,
} = require('../services/book');

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

function postBook(req, res) {
  try {
    const newBook = req.body;
    insertBook({
      id: Math.floor(Math.random() * Math.pow(10, 6)).toString(),
      name: newBook.name,
    });
    res.status(201).send('Book added');
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

function patchBook(req, res) {
  try {
    const changes = { id: req.params.id, ...req.body };
    const newBook = changeBook(changes);

    if (!newBook) {
      return res.status(404).json({ message: 'Book not found' });
    }

    res.json(newBook);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

function deleteBook(req, res) {
  try {
    deleteBookById(req.params.id);
    res.json({ message: 'Book deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = {
  getBooks,
  getSpecificBook,
  postBook,
  patchBook,
  deleteBook,
};
