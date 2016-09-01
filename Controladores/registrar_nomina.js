principal.controller('registrar_nomina', function($scope, $http, $window){
  $scope.lista_nom={};
	$http.get('http://localhost:8081/api/nominas/ListaNominas')
	 .then(function(response) {
			 $scope.lista_nom=response.data;
		 });
});
