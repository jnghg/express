const express = require('express');
const router = express.Router();

router.post('/', (req, res)=> {
    console.log('req :', req.body);
    res.json({name: '로그인함'});
});


module.exports = router;