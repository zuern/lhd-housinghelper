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
  dbService.getHouseList(function(err, houseList) {
  	if (err) {
  		res.sendStatus(500);
  	}
  	else
  	{
  		res.json(houseList);
  	}
  });  
	
});

router.get('/populate',function(req, res, next){

	dbService.populateDatabase();
	res.json({status: "Populated the db"});

});


module.exports = router;

