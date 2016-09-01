/*var principal = angular.module('Principal', ['s_liquidacion']);

principal.controller('c_registrar', ['$scope','testRequest',c_registrar]);
function c_registrar($scope, testRequest) {
	$scope.registrar_pre={};
	$scope.getRegistrar_preli = function(){
		testRequest.Registrar_Preliqu().success(function (data){
			$scope.registrar_pre=data; // Asignaremos los datos de todos
		});
	}
}
*/

principal.controller('c_registrar', function($scope, $http, $window){
	var idNomina = localStorage.getItem("idNomina");
	$scope.lista_pre={};
	$http.get('http://localhost:8081/api/ListaPreliqu/'+ idNomina)
	 .then(function(response) {
			 $scope.lista_pre=response.data;
		 });

});
