/**
 * Created by pravin on 14/6/17.
 */

var mainURL = 'http://localhost:5000';//local

angular.module('mainService', [])
  .factory('ConfigService', function () {
    var self = {};
    self.getURL = function () {
      return mainURL;
    };
    return self;
  });
