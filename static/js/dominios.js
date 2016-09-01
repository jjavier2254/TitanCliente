rulesApp.controller('dominioController', function($scope, $http) {
  $scope.title = 'Dominios';
  $scope.message = 'Listado de Dominios de Aplicación';

  $http.get('http://localhost:8080/v1/dominio?limit=0')
  .then(function(response) {
      $scope.data = response.data;
  });
});
rulesApp.controller('agregarDominioController', function($scope, $http) {
  $scope.title = 'Dominios';
  $scope.message = 'Agregar Dominio de Aplicación';

  $scope.add = function(){
    if($scope.domain.name == null){
      return;
    }
    if($scope.domain.description == null){
      return;
    }
    var data = {
        Nombre: $scope.domain.name,
        Descripcion: $scope.domain.description
    };
    $http.post('http://localhost:8080/v1/dominio',data);
    window.location.href = '/listarDominios';
  };

  $scope.cancel = function(){
    window.location.href = '/listarDominios';
  };
});

rulesApp.controller('editarDominioController', function($scope, $http) {
  $scope.title = 'Dominios';
  $scope.message = 'Editar Dominio de Aplicación';

  $scope.load = function(id){
    $http.get('http://localhost:8080/v1/dominio/'+id)
    .then(function(response) {
        $scope.domain = response.data;
    });
  };

  $scope.edit = function(id){
    if($scope.domain.Nombre == null){
      return;
    }
    if($scope.domain.Descripcion == null){
      return;
    }
    var data = {
        Nombre: $scope.domain.Nombre,
        Descripcion: $scope.domain.Descripcion
    };
    $http.put('http://localhost:8080/v1/dominio/'+id,data);
    window.location.href = '/listarDominios';
  };
  $scope.cancel = function(){
    window.location.href = '/listarDominios';
  };
});

rulesApp.controller('eliminarDominioController', function($scope, $http) {
  $scope.title = 'Dominios';
  $scope.message = 'Eliminar Dominio de Aplicación';

  $scope.load = function(id){
    $http.get('http://localhost:8080/v1/dominio/'+id)
    .then(function(response) {
        $scope.domain = response.data;
    });
  };

  $scope.delete = function(id){
    $http.delete('http://localhost:8080/v1/dominio/'+id);
    window.location.href = '/listarDominios';
  };
  $scope.cancel = function(){
    window.location.href = '/listarDominios';
  };
});
