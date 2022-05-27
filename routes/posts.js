const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World from posts');
});

router.get('/specific', (req, res) => {
    res.send('Hello World from specific posts');
});


module.exports = router;