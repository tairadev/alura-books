const { Router } = require('express');
const {
  getBooks,
  getSpecificBook,
  postBook,
  patchBook,
  deleteBook,
} = require('../controllers/book');

const router = Router();

router.get('/', getBooks);

router.get('/:id', getSpecificBook);

router.post('/', postBook);

router.patch('/:id', patchBook);

router.delete('/:id', deleteBook);

module.exports = router;
