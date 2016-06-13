var express = require('express');

var router = express.Router();

/* GET home page. */
router.get('/agent_add', function(req, res, next) {
  res.render('agent_add', {
    title: "青霜科技-代理商添加"
  });
});




module.exports = router;
