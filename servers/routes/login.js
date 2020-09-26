const express = require('express');
const router = express.Router();
const User = require('../models/user.js');
const passport = require('passport');

// test
router.post('/test', (req, res) => {
    User.find(req.body, (err, user) => {
        console.log('로그인 return :', user);
        if (err) {
            res.status(500).json({error: err});
        } else if(!user) {
            res.status(400).json({error: 'not found user'});
        } else {
            res.json(user);
        }
    });
});

// 로그인 세션
router.post('/', passport.authenticate('local', {
    failureRedirect: '/'
}), (req, res) => {
    res.redirect('/');
});

module.exports = router;