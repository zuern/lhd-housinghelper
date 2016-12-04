var Application = (function(ko, $) {

    // --- Module variables ----------------------------------------------------
    var viewModel;
    var map;
    // --- Models --------------------------------------------------------------
    function ViewModel() {
      var self = this;

      self.houseList = ko.observable();

      return self;
    }
    // --- API functions -------------------------------------------------------
    function init() {
      registerEventHandlers();
      loadData();
      viewModel = new ViewModel();
      ko.applyBindings(viewModel);

      
    }

    function initMap() {
      // create map
      var uluru = {lat: 44.227914, lng: -76.495608};
      
      map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: uluru
      });

      var marker = new google.maps.Marker({
        position: uluru,
        map: map
      });
    }
    // --- Events --------------------------------------------------------------
    
    // --- Private functions ---------------------------------------------------
    
    /**
     * Register event handlers for the page
     */
     function registerEventHandlers() {
      $("#advanced").hide();

      $("#controls .btn#toggle").click(function(){
        $("#advanced").slideToggle(400);
      });

      $('#ex1').slider({
        formatter: function(value) {
          return 'Current value: ' + value + "m";
        }
      });
    }

    /**
     * Populate the View Model with data from the API
     */
     function loadData() {
      $.get("/getHouseList")
      .done(function(data) {
        var fixedData = data;

        fixedData.forEach(function(house) {
          house.coordinates = {
            lat: parseFloat(house.latitude),
            lng: parseFloat(house.longitude)
          };
          var marker = new google.maps.Marker({
            position: house.coordinates,
            title: house.title
          });
          marker.setMap(map);
        });

        viewModel.houseList(fixedData);
      })
      .fail(function() {
        console.log("Failed to fetch data from the API.");
      });
    }
    // --- Expose module API ---------------------------------------------------
    init();
    return {
        // Public API
        ViewModel: viewModel,
        init: init,
        initMap: initMap,
        // Expose for testing
        __internal__: {}
      };
    })(ko, jQuery);