angular.module('smartgoal.controllers').controller('ProfileController', function($scope, $rootScope, $firebaseAuth, $firebaseArray, FIREBASE_URL, $state, $location) {

    var ref = new Firebase(FIREBASE_URL);
    var auth = $firebaseAuth(ref);

    $scope.user = {};

    //the following variables affect the toggling of visibility when a user clicks the edit user button and the save button
    $scope.showstartCard = true;
    $scope.showsecondCard = false;

    auth.$onAuth(function(authUser) {
      if(authUser) {
        var userRef = new Firebase(FIREBASE_URL + 'users/');
        var userInfo = $firebaseArray(userRef);
        $scope.users = userInfo;
        $scope.whichuser = $scope.currentUser.$id;
      }

      $scope.updateUser = function(key) {
          userInfo.$save(key).then(function(userRef) {
            $scope.message = "User Updated";
            console.log($scope.message);
            $location.path('app/profile');
          })
        }
    }); 

    //this function allows the update of user info.
    $scope.updateUser = function(key) {
          userInfo.$save(key).then(function(userRef) {
            $scope.message = "User Updated";
              console.log($scope.message);
              $location.path('app/home');
          })
    }
    
    //this function controls the behaviour of toggling the visibility of cards when a user edits or saves their profile
    $scope.hideCard = function() {
        $scope.showstartCard = false;
        $scope.showsecondCard = true;
    };
})