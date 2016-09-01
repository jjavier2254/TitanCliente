principal.controller('c_preliquidacion', function($scope, $http, $window){

	//var idNomina = localStorage.getItem("idNomina");
	$scope.lista_pre={};
	$http.get('http://localhost:8081/api/preliquidacion/ListaPreliqu')
	 .then(function(response) {
			 $scope.lista_pre=response.data;
		 });



		 $scope.go = function (row) {
	       var idPreliquidacion = row;
	       localStorage.setItem("idPreliquidacion", idPreliquidacion);
	       $window.location.href = 'detallepreliquidacion.html'
	     };

			 $scope.insertarPreliquidacion = function () {

		 	       $window.location.href = 'registrar_preliquidacion.html'
		 	     };
					 $scope.GenerarPreliquidacion = function () {

								$window.location.href = 'generar_preliquidacion.html'
							};

						$scope.AtrasNomina = function () {

								 $window.location.href = 'nominas.html'
								 };
});
