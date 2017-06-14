angular.module('main.controllers', [])

  .controller('DashCtrl', function($scope,$http,mainService,ConfigService) {
    var SmileyData = [];
    $scope.smilyesCall =function (mood) {

      var query = {
        name: mood
      };
      $http.post(ConfigService.getURL() +'/api/getSmiley',query)
        .success(function (response) {
           $scope.showmesg = response[0].name;
          console.log("mood ",JSON.stringify($scope.showmesg));
        });
    }

  });


