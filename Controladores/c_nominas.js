principal.controller('c_nominas', function(obtenerID, $scope, testRequest, $http, $window){

  $scope.lista_nom={};
  testRequest.Lista_Nominas().success(function (data){
  $scope.lista_nom=data; // Asignaremos los datos de todos

  });

  $scope.go = function (row) {
  var idNomina = row;
  localStorage.setItem("idNomina", idNomina);
  $window.location.href = 'Lista_Liquidaciones.html'

  };

  $scope.insertarNomina = function () {
  $window.location.href = 'agregarnomina.html'

  };

});
