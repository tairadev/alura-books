const {
  getAllBooks,
  getBookById,
  insertBook,
  changeBook,
  deleteBookById,
} = require('../services/book');

function validateId(id) {
  if (isNaN(Number(id))) {
    throw new Error('Invalid ID. It must be a number.');
  }
}

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
    validateId(req.params.id);
    const book = getBookById(Number(req.params.id));
    if (!book) {
      res.status(404).json({ message: 'Book not found' });
    } else {
      res.json(book);
    }
  } catch (err) {
    res
      .status(err.message.includes('Invalid ID') ? 400 : 500)
      .json({ message: err.message });
  }
}

function postBook(req, res) {
  try {
    const newBook = req.body;

    if (!newBook.name) {
      return res.status(400).json({ message: 'Name is required' });
    }

    insertBook({
      id: Math.floor(Math.random() * Math.pow(10, 6)).toString(),
      name: newBook.name,
    });
    res.status(201).json({ message: 'Book added' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

function patchBook(req, res) {
  try {
    validateId(req.params.id);
    const changes = { id: Number(req.params.id), ...req.body };
    const newBook = changeBook(changes);

    if (!newBook) {
      return res.status(404).json({ message: 'Book not found' });
    }

    res.json(newBook);
  } catch (err) {
    res
      .status(err.message.includes('Invalid ID') ? 400 : 500)
      .json({ message: err.message });
  }
}

function deleteBook(req, res) {
  try {
    validateId(req.params.id);
    deleteBookById(Number(req.params.id));
    res.json({ message: 'Book deleted' });
  } catch (err) {
    res
      .status(err.message.includes('Invalid ID') ? 400 : 500)
      .json({ message: err.message });
  }
}

module.exports = {
  getBooks,
  getSpecificBook,
  postBook,
  patchBook,
  deleteBook,
};
