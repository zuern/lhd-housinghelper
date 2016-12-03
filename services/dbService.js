// Help Node out by setting up define.
if (typeof exports === 'object' && typeof define !== 'function') {
  var define = function (factory) {
    factory(require, exports, module);
  };
}

define(function (require, exports, module) {

});

var faker = require('faker');
var MongoClient = require('mongodb').MongoClient;
var MONGOURL = 'mongodb://localhost:27017/db';
var db;
MongoClient.connect('mongodb://localhost:27017/db', function(err,database){
    if(err) {
      console.log("Couldn't connect to the DB");
      return
    }
    else {
      db = database;
      console.log("Connected to the database");
    }
});

function populateDatabase(){

  if(!db){
    console.log("No db");
    return;
  }

var collection = db.collection('houses');
var data1 = {
        title: faker.name.findName(),
        thumbnail: faker.image.image(),
        images: [faker.image.image(),faker.image.image(),faker.image.image()],
        shortDescription: faker.lorem.words(),
        longDescription: faker.lorem.words(),
        price: faker.finance.amount(),
        priceInterval: faker.lorem.words(),
        leaseType: faker.lorem.words(),
        landLordName: faker.name.findName(),
        latitude: String(44.228646 + (Math.random()*0.0005)),
        longitude: String(-76.502897 + (Math.random()*0.0005)),
        laundry: faker.lorem.words(),
        includedUtilities: [faker.lorem.words(),faker.lorem.words()],
        isFurnished: faker.lorem.words(),
        numBedrooms: faker.random.number(),
        numBathrooms: faker.random.number(),
        hasCarParking: faker.lorem.words(),
        hasBikeParking: faker.lorem.words(),
        hasInternetIncluded: faker.lorem.words()
      }
var data2 = {
        title: faker.name.findName(),
        thumbnail: faker.image.image(),
        images: [faker.image.image(),faker.image.image(),faker.image.image()],
        shortDescription: faker.lorem.words(),
        longDescription: faker.lorem.words(),
        price: faker.finance.amount(),
        priceInterval: faker.lorem.words(),
        leaseType: faker.lorem.words(),
        landLordName: faker.name.findName(),
        latitude: String(44.228646 + (Math.random()*0.0005)),
        longitude: String(-76.502897 + (Math.random()*0.0005)),
        laundry: faker.lorem.words(),
        includedUtilities: [faker.lorem.words(),faker.lorem.words()],
        isFurnished: faker.lorem.words(),
        numBedrooms: faker.random.number(),
        numBathrooms: faker.random.number(),
        hasCarParking: faker.lorem.words(),
        hasBikeParking: faker.lorem.words(),
        hasInternetIncluded: faker.lorem.words()
      }
var data3 = {
        title: faker.name.findName(),
        thumbnail: faker.image.image(),
        images: [faker.image.image(),faker.image.image(),faker.image.image()],
        shortDescription: faker.lorem.words(),
        longDescription: faker.lorem.words(),
        price: faker.finance.amount(),
        priceInterval: faker.lorem.words(),
        leaseType: faker.lorem.words(),
        landLordName: faker.name.findName(),
        latitude: String(44.228646 + (Math.random()*0.0005)),
        longitude: String(-76.502897 + (Math.random()*0.0005)),
        laundry: faker.lorem.words(),
        includedUtilities: [faker.lorem.words(),faker.lorem.words()],
        isFurnished: faker.lorem.words(),
        numBedrooms: faker.random.number(),
        numBathrooms: faker.random.number(),
        hasCarParking: faker.lorem.words(),
        hasBikeParking: faker.lorem.words(),
        hasInternetIncluded: faker.lorem.words()
      }
var data4 = {
        title: faker.name.findName(),
        thumbnail: faker.image.image(),
        images: [faker.image.image(),faker.image.image(),faker.image.image()],
        shortDescription: faker.lorem.words(),
        longDescription: faker.lorem.words(),
        price: faker.finance.amount(),
        priceInterval: faker.lorem.words(),
        leaseType: faker.lorem.words(),
        landLordName: faker.name.findName(),
        latitude: String(44.228646 + (Math.random()*0.0005)),
        longitude: String(-76.502897 + (Math.random()*0.0005)),
        laundry: faker.lorem.words(),
        includedUtilities: [faker.lorem.words(),faker.lorem.words()],
        isFurnished: faker.lorem.words(),
        numBedrooms: faker.random.number(),
        numBathrooms: faker.random.number(),
        hasCarParking: faker.lorem.words(),
        hasBikeParking: faker.lorem.words(),
        hasInternetIncluded: faker.lorem.words()
      }
var data5 = {
        title: faker.name.findName(),
        thumbnail: faker.image.image(),
        images: [faker.image.image(),faker.image.image(),faker.image.image()],
        shortDescription: faker.lorem.words(),
        longDescription: faker.lorem.words(),
        price: faker.finance.amount(),
        priceInterval: faker.lorem.words(),
        leaseType: faker.lorem.words(),
        landLordName: faker.name.findName(),
        latitude: String(44.228646 - (Math.random()*0.0005)),
        longitude: String(-76.502897 + (Math.random()*0.0005)),
        laundry: faker.lorem.words(),
        includedUtilities: [faker.lorem.words(),faker.lorem.words()],
        isFurnished: faker.lorem.words(),
        numBedrooms: faker.random.number(),
        numBathrooms: faker.random.number(),
        hasCarParking: faker.lorem.words(),
        hasBikeParking: faker.lorem.words(),
        hasInternetIncluded: faker.lorem.words()
      }

      collection.insert(data1);
      collection.insert(data2);
      collection.insert(data3);
      collection.insert(data4);
      collection.insert(data5);


}





function getHouseList(callback) {
  db.collection('houses').find({}).toArray(function(err, docs) {
    if (err) {
      console.log("Failed to fetch house list in dbService");
      callback(err, null);
      return;
    }

    callback(null, docs);
  });
}


  function insertHouse(){




    db.collection('houses').insert();



  }



  
  function getHouse(id) {




    return db.collection('houses').find({_id:id});


  }

  module.exports = {
    getHouseList: getHouseList,
    getHouse: getHouse,
    populateDatabase: populateDatabase

  };


