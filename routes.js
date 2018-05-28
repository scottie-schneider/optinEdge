const express = require('express');
const axios = require('axios');

const router = express.Router();

router.post('/', (req, res) => {
  if (req.headers['x-requested-with'] === 'XMLHttpRequest') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({message: 'Hello World!'}));
  }
})

module.exports = router;
