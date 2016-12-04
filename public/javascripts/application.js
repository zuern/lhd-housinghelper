var Application = (function(ko, $) {

    // --- Module variables ----------------------------------------------------
    var viewModel;
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
    }

    /**
     * Populate the View Model with data from the API
     */
    function loadData() {
      $.get("/getHouseList")
      .done(function(data) {
        viewModel.houseList(data);
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
        // Expose for testing
        __internal__: {}
      };
    })(ko, jQuery);