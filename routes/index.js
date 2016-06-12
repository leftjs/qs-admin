var express = require('express');
var passport = require('passport');
var Account = require('../models/account');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: "青霜科技-后台",
    user: req.user
  });
});

router.get('/login', function(req,res,next) {
  res.render('login', {
    title: "青霜科技-登录"
  })
})

router.post('/login', passport.authenticate('local', {failureRedirect: '/login'}), function(req, res) {
    res.redirect('/');
});

router.get('/register', function(req,res,next) {
  res.render('register', {
    title: "青霜科技-注册"
  })
})

router.post('/register', function(req, res) {
    Account.register(new Account({ username : req.body.username }), req.body.password, function(err, account) {
        if (err) {
            return res.render('register', { account : account });
        }

        passport.authenticate('local')(req, res, function () {
            res.redirect('/');
        });
    });
});

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

router.get('/ping', function(req, res){
    res.status(200).send("pong!");
});


module.exports = router;
