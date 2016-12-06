var config = require('../config')
, nano = require('nano')(config.db_url)
, db = nano.use('units')
, faker = require('faker');


/**
 * Fetches the complete list of all units
 * @param {callback:function(err, data)} - The callback function to run
 */
 function getUnitList(callback) {
  db.list({
    include_docs: true
  }, function(err, body) {
    if (err) {
      console.log(err);
      return;
    }
    var docs = [];

    body.rows.forEach(function(row) {
      docs.push(row.doc);
    });

    callback(null, docs);
  })
}

/**
 * Fills the database with sample data
 */
 function populateDatabase() {
  console.log("Deleting the existing database (if any)");
  nano.db.destroy('units', function(){
    nano.db.create('units', function() {
      var location_variation = 0.0065;
      var sampleData = 
      [
      {
        title: "64 Wolfe Street",
        thumbnail: "images/img1.JPG",
        images: ["images/img12.JPG","images/img13.JPG","images/img14.JPG"],
        shortDescription: "January, May, or September lease start: Seeking quiet studious female students (no partying in the home) for large cute and feminine bedrooms",
        longDescription: faker.lorem.words(),
        price: faker.finance.amount(),
        priceInterval: "Monthly",
        leaseType: "Annual",
        landLordName: faker.name.findName(),
        address: faker.address.streetAddress(),
        location: {
          lat: 44.228646 + (Math.random()*location_variation),
          lng: -76.502897 + (Math.random()*location_variation)
        },
        laundry: true,
        includedUtilities: [faker.lorem.words(),faker.lorem.words()],
        isFurnished: faker.random.boolean(),
        numBedrooms: faker.random.number(),
        numBathrooms: faker.random.number(),
        hasCarParking: faker.random.boolean(),
        hasBikeParking: faker.random.boolean(),
        hasInternetIncluded: faker.random.boolean()
      },
      {
        title: "Fully Renovated 3 Bedroom House in the vicinity of McBurney Park",
        thumbnail: "images/img2.JPG" ,
        images: ["images/img22.JPG","images/img23.JPG","images/img24.JPG"],
        shortDescription: "Room for rent to a student or full time worker. Room is furnished, close to rennadale plaza, 5min to st.lawrance and 10min to queens and downtown. Internet included! Move in ready! No smoking, no…",
        longDescription: faker.lorem.words(),
        price: faker.finance.amount(),
        priceInterval: "Monthly",
        leaseType: "Annual",
        landLordName: faker.name.findName(),
        address: faker.address.streetAddress(),
        location: {
          lat: 44.228646 + (Math.random()*location_variation),
          lng: -76.502897 + (Math.random()*location_variation)
        },
        laundry: true,
        includedUtilities: [faker.lorem.words(),faker.lorem.words()],
        isFurnished: faker.random.boolean(),
        numBedrooms: faker.random.number(),
        numBathrooms: faker.random.number(),
        hasCarParking: faker.random.boolean(),
        hasBikeParking: faker.random.boolean(),
        hasInternetIncluded: faker.random.boolean()
      },
      {
        title: "Tanner Drive - 3 Bedroom Townhome for Rent",
        thumbnail: "images/img3.JPG",
        images: ["images/img32.JPG","images/img33.JPG","images/img34.JPG"],
        shortDescription: "AVAILABLE JAN 1/17 - Room rental available in a 5 bedroom home! Located on a quiet street near St. Lawrence College and Queens University, West Campus, and walking distance to main Kingston Transit…",
        longDescription: faker.lorem.words(),
        price: faker.finance.amount(),
        priceInterval: "Monthly",
        leaseType: "Annual",
        landLordName: faker.name.findName(),
        address: faker.address.streetAddress(),
        location: {
          lat: 44.228646 + (Math.random()*location_variation),
          lng: -76.502897 + (Math.random()*location_variation)
        },
        laundry: true,
        includedUtilities: [faker.lorem.words(),faker.lorem.words()],
        isFurnished: faker.random.boolean(),
        numBedrooms: faker.random.number(),
        numBathrooms: faker.random.number(),
        hasCarParking: faker.random.boolean(),
        hasBikeParking: faker.random.boolean(),
        hasInternetIncluded: faker.random.boolean()
      },
      {
        title: "ATTN Students - Close to Queens - Available May 1st - 27 Main St",
        thumbnail: "images/img4.JPG",
        images: ["images/img42.JPG","images/img43.JPG","images/img44.JPG"],
        shortDescription: "Beautiful room in a large 4 bedroom house all utilities included available immediately Bayridge area $500",
        longDescription: faker.lorem.words(),
        price: faker.finance.amount(),
        priceInterval: "Monthly",
        leaseType: "Annual",
        landLordName: faker.name.findName(),
        address: faker.address.streetAddress(),
        location: {
          lat: 44.228646 + (Math.random()*location_variation),
          lng: -76.502897 + (Math.random()*location_variation)
        },
        laundry: true,
        includedUtilities: [faker.lorem.words(),faker.lorem.words()],
        isFurnished: faker.random.boolean(),
        numBedrooms: faker.random.number(),
        numBathrooms: faker.random.number(),
        hasCarParking: faker.random.boolean(),
        hasBikeParking: faker.random.boolean(),
        hasInternetIncluded: faker.random.boolean()
      },
      {
        title: "4-Bedroom House Steps From Campus (for winter term or May 2017)",
        thumbnail: "images/img5.JPG",
        images: ["images/img52.JPG","images/img53.JPG","images/img54.JPG"],
        shortDescription: "Beautiful, Extremely clean room in Bayridge , Lincoln Dr.ive/Bayridge Drive Furnished room/non furnished, all hardwood, no carpet, all inclusive including internet.Washer /Dryer, near Bus stop.…",
        longDescription: faker.lorem.words(),
        price: faker.finance.amount(),
        priceInterval: "Monthly",
        leaseType: "Annual",
        landLordName: faker.name.findName(),
        address: faker.address.streetAddress(),
        location: {
          lat: 44.228646 + (Math.random()*location_variation),
          lng: -76.502897 + (Math.random()*location_variation)
        },
        laundry: true,
        includedUtilities: [faker.lorem.words(),faker.lorem.words()],
        isFurnished: faker.random.boolean(),
        numBedrooms: faker.random.number(),
        numBathrooms: faker.random.number(),
        hasCarParking: faker.random.boolean(),
        hasBikeParking: faker.random.boolean(),
        hasInternetIncluded: faker.random.boolean()
      }
      ];

      console.log("Populating the database with sample data.");

      sampleData.forEach(function(doc, index) {
        doc._id = index.toString();
        db.insert(doc, function(err, body) {
          if (err)
            console.log(err);
        });
      });
      console.log("Successfully populated the database");
    });
});
}

module.exports = {
  getUnitList: getUnitList,
  populateDatabase: populateDatabase
}