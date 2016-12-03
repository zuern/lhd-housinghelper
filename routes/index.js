var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/details/:id', function(req, res) {
  var id = req.params["id"];
  // do stuff
  res.render('details', { title: "Details" });
});

module.exports = router;