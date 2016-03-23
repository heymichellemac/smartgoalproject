angular.module('smartgoal.controllers').controller('SmartGoalController', function($scope, $rootScope, $firebaseAuth, $firebaseArray, FIREBASE_URL, $state, $location) {

    var ref = new Firebase(FIREBASE_URL);
    var auth = $firebaseAuth(ref);

    $scope.smartgoal = {};

    //the following 2 variables control the toggle of visibility of sections within the page
    $scope.showstartCard = true;
    $scope.showsecondCard = false;

    auth.$onAuth(function(authUser) {
      if(authUser) {
        var smartGoalRef = new Firebase(FIREBASE_URL + 'users/' + $rootScope.currentUser.$id + '/smartgoals');
        var smartgoalInfo = $firebaseArray(smartGoalRef);
        $scope.smartgoals = smartgoalInfo;
        $scope.whichsmartgoal = $state.params.sgId;
        
        // this function handles the addition of a new smart goal
        $scope.addSmartGoal = function() {
            smartgoalInfo.$add({
            goaltitle:$scope.smartgoal.goaltitle,
            goalspecific:$scope.smartgoal.goalspecific,
            goalmeasurable:$scope.smartgoal.goalmeasurable,
            goalachievable:$scope.smartgoal.goalachievable,
            goalrelevant:$scope.smartgoal.goalrelevant        
          }).then(function() {
              $scope.smartgoal.goaltitle = '';
              $scope.sgcreatedMessage = "Smart Goal Created";
              console.log($scope.sgcreatedMessage);
              $location.path('app/smartgoal');
          })
        }


        //this function handles the behaviour behind updating a smart goal
        $scope.updateSmartGoal = function(key) {
          smartgoalInfo.$save(key).then(function(smartGoalRef) {
            $scope.sgeditmessage = "SG Updated";
              console.log($scope.sgcreatedMessage);
              $location.path('app/smartgoal');
          })
        }

          //this function handles the behaviour of controlling visibility of sections withing the page
         $scope.hideCard = function() {
          $scope.showstartCard = false;
          $scope.showsecondCard = true;
        };

         //handles the deletion of smart goal items on the smart goal page
          $scope.deleteSmartGoal = function(key){
            smartgoalInfo.$remove(key);
            $location.path('#/app/smartgoal');
            $scope.message = "SmartGoal Deleted";
            console.log("Deleting Smart Goal");
        }
      }

    }); 

})