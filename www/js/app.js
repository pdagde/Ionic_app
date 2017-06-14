angular.module('starter', ['ionic', 'main.controllers', 'main.services','mainService','common.services'])

  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })

  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main', {
        url: '/main',
        abstract: true,
        templateUrl: 'js/main/templates/main.html'
      })
      .state('main.dash', {
        url: '/dash',
        views: {
          'main-dash': {
            templateUrl: 'js/main/templates/main-dash.html',
            controller: 'DashCtrl'
          }
        }
      })
    $urlRouterProvider.otherwise('/main/dash');

  });
