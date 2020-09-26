const express = require('express');
const router = express.Router();

router.post('/', (req, res)=>res.json({route: 'index.js'}));

module.exports = router;