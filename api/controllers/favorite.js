const {
  getAllFavorites,
  insertFavorite,
  deleteFavoriteById,
} = require('../services/favorite');

function validateId(id) {
  if (isNaN(Number(id))) {
    throw new Error('Invalid ID. It must be a number.');
  }
}

function getFavorites(req, res) {
  try {
    const books = getAllFavorites();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

function postFavorite(req, res) {
  try {
    const id = req.params.id;
    insertFavorite(id);
    res.status(201).json({ message: 'Book added' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

function deleteFavorite(req, res) {
  try {
    validateId(req.params.id);
    deleteFavoriteById(Number(req.params.id));
    res.json({ message: 'Favorite deleted' });
  } catch (err) {
    res
      .status(err.message.includes('Invalid ID') ? 400 : 500)
      .json({ message: err.message });
  }
}

module.exports = {
  getFavorites,
  postFavorite,
  deleteFavorite,
};
