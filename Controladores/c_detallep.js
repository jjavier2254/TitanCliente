principal.controller('c_detallep', function($scope, $http, $window){

/*	var idPreliquidacion = localStorage.getItem("idPreliquidacion");
	$scope.detalle_pre={};
	$http.get('http://localhost:8081/api/DetallePreliqu/'+ idPreliquidacion)
	 .then(function(response) {
			 $scope.detalle_pre=response.data;
		 });
		});
*/
$http.get('http://localhost:8081/api/detallepreliqu/DetallePreliqu')
.then(function(response) {
 $scope.data=response.data;
 });

 $scope.AtrasPreliquidacion = function () {

		 $window.location.href = 'Lista_Liquidaciones.html'
		 };
 });
