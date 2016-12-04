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
        title: "64 Wolfe Street",
        thumbnail: "public/images/img1.JPG",
        images: ["public/images/img12.JPG","public/images/img13.JPG","public/images/img14.JPG"],
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
         title: "Fully Renovated 3 Bedroom House in the vicinity of McBurney Park",
        thumbnail: "public/images/img2.JPG" ,
        images: ["public/images/img22.JPG","public/images/img23.JPG","public/images/img24.JPG"],
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
        title: "Tanner Drive - 3 Bedroom Townhome for Rent",
        thumbnail: "public/images/img3.JPG",
        images: ["public/images/img32.JPG","public/images/img33.JPG","public/images/img34.JPG"],
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
        title: "ATTN Students - Close to Queens - Available May 1st - 27 Main St",
        thumbnail: "public/images/img4.JPG",
        images: ["public/images/img42.JPG","public/images/img43.JPG","public/images/img44.JPG"],
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
        title: "4-Bedroom House Steps From Campus (for winter term or May 2017)",
        thumbnail: "public/images/img5.JPG",
        images: ["public/images/img52.JPG","public/images/img53.JPG","public/images/img54.JPG"],
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



  module.exports = {
    getHouseList: getHouseList,
    populateDatabase: populateDatabase

  };


