var principal = angular.module('Principal', ['s_liquidacion']);

principal.controller('c_usuarios', ['$scope','testRequest',c_usuarios]);
function c_usuarios($scope, testRequest) {
	$scope.lista_empl={};
	$scope.getEmpl_Hor_Cat = function(){
		testRequest.Empleados_Horas_Cat().success(function (data){
			$scope.lista_empl=data; // Asignaremos los datos de todos
			
		});
	}
	
}