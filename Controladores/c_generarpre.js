principal.controller('c_generarpre', function($scope, $http, $window){
  //  $http.get('http://10.20.0.254/api/preliquidacion/GenerarPreliqu')
  $http.get('http://localhost:8081/api/preliquidacion/GenerarPreliqu')
	.then(function(response) {
	 $scope.data=response.data;
	 });
   });
