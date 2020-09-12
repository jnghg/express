const express = require('express');
const router = express.Router();

router.post('/', (req, res)=>res.json({name:'뀨', age: 32}));
router.post('/true', (req, res)=>res.json({name:'지몬', age: 29}));



module.exports = router;