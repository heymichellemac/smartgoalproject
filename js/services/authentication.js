'use strict';

angular.module('smartgoal.services').service('Authentication', ['$rootScope', '$firebaseObject', '$q', '$timeout','$firebaseAuth', 'FIREBASE_URL', '$location',
	function($rootScope, $firebaseObject, $q, $timeout, $firebaseAuth, FIREBASE_URL, $location) {

	var ref = new Firebase(FIREBASE_URL);
  	var auth = $firebaseAuth(ref);

  	auth.$onAuth(function(authUser) {
  		if(authUser) {
  			var userRef = new Firebase(FIREBASE_URL + 'users/' + authUser.uid);
  			var userObj = $firebaseObject(userRef);
  			$rootScope.currentUser = userObj;
  		} else {
  			$rootScope.currentUser = null;
  			console.log($rootScope.currentUser);
  		}
  	});

  	return {
  				
		  		doLogin: function(user) {

		  			auth.$authWithPassword({
		  				email: user.email,
		  				password: user.password
		  			}).then(function(regUser) {
		  				$location.path('/smartgoal');
		  				console.log('Logging in user : ' + user.email);
		  				$rootScope.message = "Hello " + user.email + ", welcome back";
		  			}).catch(function(error) {
		  				$rootScope.message = error.message;
		  			});
		  			
		  		}, //doLogin

		  		logout: function(){
		  			return auth.$unauth();
		  			this.currentUser = null;
		  		}, //logout


		  		register: function(user){
				  	auth.$createUser({
				  		email: user.email,
						password: user.password
				  	}).then(function(regUser) {

				  		var regRef = new Firebase(FIREBASE_URL + 'users')
				  		.child(regUser.uid).set({
				  			date: Firebase.ServerValue.TIMESTAMP,
					        regUser: regUser.uid,
					        firstname: user.firstname,
					        lastname: user.lastname,
					        username: user.username,
					        email: user.email,
					        jobtitle: user.jobtitle
				  		});

				  		//logging for testing purposes
				        console.log('registering user: ' + user.email);
				        $location.path('/home');
						$rootScope.registerMessage = "Thank you for registering: " + user.username;
				  	}).catch(function(error) {
				  		$rootScope.message = error.message;
				  	});  //createUser

				} // register
 		} //end of return statement

}]);