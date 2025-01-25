function getBooks(req, res) {
  try {
    res.send('Hello World - by Guilherme');
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = {
  getBooks,
};
