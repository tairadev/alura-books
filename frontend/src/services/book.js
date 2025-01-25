import HTTPClient from '../helpers/HTTPClient';

function getBooks() {
  return HTTPClient.get('/book');
}

export { getBooks };
