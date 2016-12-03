// Help Node out by setting up define.
if (typeof exports === 'object' && typeof define !== 'function') {
  var define = function (factory) {
    factory(require, exports, module);
  };
}

define(function (require, exports, module) {

  var MongoClient = require('mongodb').MongoClient;
  
  function getHouseList() {
    return [
    {
      thumbnail: '',
      images: [
      '',
      '',
      ''
      ],
      shortDescription: '',
      longDescription: '',
      price: 500,
      priceInterval: 'Monthly',
      leaseType: 'Annual',
      landlordName: 'Jim Jom',
      latitude: '',
      longitude: '',
      laundry: 'On Site',
      includedUtilities: [
      'Heat',
      'Hydro'
      ],
      isFurnished: true,
      numBedrooms: 3,
      numBathrooms: 2,
      hasCarParking: false,
      hasBikeParking: true,
      hasInternetIncluded: true,
    }
    ];
  }

  function getHouse(id) {
    
  }

  module.exports = {
    getHouseList: getHouseList,
    getHouse: getHouse
  };

});