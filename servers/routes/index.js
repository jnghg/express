const express = require('express');
const router = express.Router();

router.post('/', (req, res)=>res.json({name:'뀨222', age: 32333}));
router.post('/gyu', (req, res)=>res.json({name:'뀨', age: 32}));


module.exports = router;