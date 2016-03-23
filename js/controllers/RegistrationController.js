angular.module('smartgoal.controllers').controller('RegistrationController', 

	function($scope, $ionicModal, $timeout, $location, $ionicLoading, Authentication) {

	// Create the login modal 
	$ionicModal.fromTemplateUrl('../templates/login.html', {
	    scope: $scope
	  }).then(function(modal) {
	    $scope.modal = modal;
	  })

	  $scope.user = {};
	  
	  // Triggered in the login modal to close it
	  $scope.closeLogin = function() {
	    $scope.modal.hide();
	  };

	  // Open the login modal
	  $scope.login = function() {
	    $scope.modal.show();
	  }; //login

	  //loout function that logs out the user
	  $scope.logout = function() {
	  	Authentication.logout();
	  	$location.path('/home');
		console.log('Logging out user : ' + $scope.user.email);
		$scope.message = "You have been logged out";
	  }; //logout

	  //login function which logs in a user
	  $scope.doLogin = function() {
	  	Authentication.doLogin($scope.user);
	  }; //doLogin 

	  //register function which registers a user
	  $scope.register = function(){
	  	Authentication.register($scope.user);
	  }; // register

});  //controller