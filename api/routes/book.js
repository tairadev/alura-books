const { Router } = require('express');
const { getBooks } = require('../controllers/book');

const router = Router();

router.get('/', getBooks);

router.post('/', (req, res) => {
  res.send('Post request');
});

router.patch('/', (req, res) => {
  res.send('Patch request');
});

router.put('/', (req, res) => {
  res.send('Put request');
});

router.delete('/', (req, res) => {
  res.send('Delete request');
});

module.exports = router;
