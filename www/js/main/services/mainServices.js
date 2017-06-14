angular.module('main.services', [])

  .service('mainService', function($http,ConfigService) {

    var getSmileys = function(mood,callback) {
      console.log("yyyyyyyyyyy",JSON.stringify(mood));

    };

    return {
      getSmileys: getSmileys
    }
  })
