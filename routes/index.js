var express = require('express')
  , router = express.Router()
  , dbService = require('../services/dbService');
  

/* GET home page. */
router.get('/', function(req, res, next) {
  var data = db.getHouseList();
  res.render('index', { title: 'Local Hack Day' });
});

router.get('/dbtest', function(req, res, next) {
	//var houselist = db.getHouseList();
	//var houselist = dbSerivice.populateDatabase();
	//dbService.populateDatabase();

	
  		var houselist = dbService.getHouseList();
  		console.log(houselist);
  
	
  res.render('db', { title: 'lol'});
});

module.exports = router;

