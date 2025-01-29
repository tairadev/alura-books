import HTTPClient from '../helpers/HTTPClient';

function getFavorites() {
  return HTTPClient.get('/favorite');
}

async function addFavorite(id) {
  return HTTPClient.post(`/favorite/${id}`);
}

async function deleteFavorite(id) {
  return HTTPClient.delete(`/favorite/${id}`);
}

export { getFavorites, addFavorite, deleteFavorite };
