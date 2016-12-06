var express = require('express')
  , router = express.Router()
  , dbService = require('../services/dbService');
  

/* GET home page. */
router.get('/', function(req, res, next) { 
  res.render('index', { title: 'Express' });
});

router.get('/details/:id', function(req, res) {
  var id = req.params["id"];
  // do stuff
  res.render('details', { title: "Details" });
});

router.get('/getUnitList', function(req, res, next) {
  dbService.getUnitList(function(err, houseList) {
    if (err)
      res.sendStatus(500);
    else
      res.json(houseList);
  });
});

router.get('/populate',function(req, res, next){
  dbService.populateDatabase();
  res.json({status: "Populated the db"});
});


module.exports = router;
