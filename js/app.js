'use strict';

angular.module('smartgoal',
  ['ionic', 'firebase', 'smartgoal.controllers', 'smartgoal.services'])

.run(
  function($ionicPlatform, $rootScope, $state) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });

  $rootScope.$on('$stateChangeError', 
    function(event, toState, toParams, fromState, fromParams, error) {
      $state.go(error);
    });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'RegistrationController'
  })

  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html'
      }
    }
  })

    .state('app.smartgoal', {
    url: '/smartgoal',
    views: {
      'menuContent': {
        templateUrl: 'templates/smartgoals.html',
        controller: 'SmartGoalController'
      }
    }
  })

      .state('app.sgdetail', {
    url: '/smartgoal/:sgId',
    views: {
      'menuContent': {
        templateUrl: 'templates/sgdetail.html',
        controller: 'SmartGoalController'
      }
    }
  })

  .state('app.createsg', {
      url: '/createsg',
      views: {
        'menuContent': {
          templateUrl: 'templates/createsg.html',
          controller: 'SmartGoalController'
        }
      }
  })

    .state('app.register', {
      url: '/register',
      views: {
        'menuContent': {
          templateUrl: 'templates/register.html',
          controller: 'RegistrationController'
        }
      }
    })

    .state('app.profile', {
      url: '/profile',
      views: {
        'menuContent': {
          templateUrl: 'templates/profile.html'
        }
      }
    })


     .state('app.login', {
      url: '/login',
      views: {
        'menuContent': {
          templateUrl: 'templates/login.html',
          controller: 'RegistrationController'
        }
      }
    })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
})

//this contant prevents repetition of the firebase url by using the keyword FIREBASE_URL instead
.constant('FIREBASE_URL', 'https://smartgoalproject.firebaseio.com/')

angular.module('smartgoal.controllers', []);
angular.module('smartgoal.services', []);