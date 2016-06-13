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
  if (req.query.error && JSON.parse(req.query.error)) {

  }
  res.render('login', {
    title: "青霜科技-登录"
  })
})

router.post('/login', passport.authenticate('local', {failureRedirect: '/login?error=true'}), function(req, res) {
    res.redirect('/');
});

router.get('/register', function(req,res,next) {
  res.render('register', {
    title: "青霜科技-注册"
  })
})

router.post('/register', function(req, res) {
    Account.register(new Account({ email : req.body.email , name: req.body.name}), req.body.password, function(err, account) {
      console.log('err',err);
      if (!!err) {
          return res.render('register', { account : account });
      }


      res.redirect('/');

    });
});

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

router.get('/ping', function(req, res){
    res.status(200).send("pong!");
});


router.get('/auth/wechat', passport.authenticate('wechat', {

}));

router.get('/auth/wechat/callback', passport.authenticate('wechat', {
	failureRedirect: '/auth/fail',
	successReturnToOrRedirect: '/'
}));

module.exports = router;
