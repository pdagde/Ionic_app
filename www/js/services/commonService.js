/**
 * Created by pravin on 14/6/17.
 */

angular.module('common.services', [])

  .factory('Common', function ($ionicPopup, ConfigService, $http) {
    var common = {};
    common.showAlertMsg = function (title, msg) {
      var alertPopup = $ionicPopup.alert({
        title: title,
        template: msg
      });
      alertPopup.then(function () {
      });
      return common;
    };
  });

