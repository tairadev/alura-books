const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
  try {
    // throw new Error('Error');
    res.send('Hello World - by Guilherme');
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

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
