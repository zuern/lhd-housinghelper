var express = require('express')
  , router = express.Router()
  , db = require(__dirname + '/../services/db');

/* GET home page. */
router.get('/', function(req, res, next) {
  var data = db.getHouseSummary();
  res.render('index', { title: 'Local Hack Day' });
});

router.get('/dbtest', function(req, res, next) {
  res.render('db', { title: 'lol'});
});

module.exports = router;
