const fs = require('fs');
const { getAllBooks } = require('./book');

function getAllFavorites() {
  const books = JSON.parse(fs.readFileSync('data/favorites.json', 'utf8'));
  return books;
}

function deleteFavoriteById(id) {
  const currentFavorites = getAllFavorites();

  const filteredFavorites = currentFavorites.filter(
    (favorite) => favorite.id !== String(id)
  );

  fs.writeFileSync(
    'data/favorites.json',
    JSON.stringify(filteredFavorites, null, 2)
  );
}

function insertFavorite(id) {
  const books = getAllBooks();
  const favorites = getAllFavorites();

  const insertedBook = books.find((b) => b.id === id);
  const newFavorites = [...favorites, insertedBook];

  fs.writeFileSync(
    'data/favorites.json',
    JSON.stringify(newFavorites, null, 2)
  );
}

module.exports = {
  getAllFavorites,
  insertFavorite,
  deleteFavoriteById,
};
