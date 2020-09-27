const express = require('express');
const router = express.Router();
const User = require('../models/user.js');
// const passport = require('passport');

//
router.post('/', (req, res) => {
    User.find(req.body, (err, user) => {
        console.log('로그인 return :', user);
        if (err) {
            res.status(500).json({error: err});
        } else if(!user) {
            res.status(400).json({error: 'not found user'});
        } else {
            res.json(user);
            // res.redirect('/main');
        }
    });
});

// // 로그인 세션
// router.post('/', passport.authenticate('local',  { 
//     failureRedirect: '/',
// }),
// (req, res) => {
//   res.json(req.user);
// });

module.exports = router;