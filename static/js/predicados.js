rulesApp.controller('predicadoController', function($scope, $http) {
  $scope.title = 'Predicados';
  $scope.message = 'Listado de Predicados de Aplicación';

  $http.get('http://localhost:8080/v1/predicado?limit=0')
  .then(function(response) {
      $scope.data = response.data;
  });
});

rulesApp.controller('agregarPredicadoController', function($scope, $http) {
  $scope.title = 'Predicados';
  $scope.message = 'Agregar Predicados de Aplicación';

  $http.get('http://localhost:8080/v1/dominio?limit=0')
  .then(function(response) {
      $scope.dominios = response.data;
  });

  $http.get('http://localhost:8080/v1/tipo_predicado/?limit=0')
  .then(function(response) {
      $scope.tipos = response.data;
  });

  $scope.add = function(){
    if($scope.predicado.name == null){
      return;
    }
    if($scope.predicado.description == null){
      return;
    }
    var data = {
        Dominio: {Id: $scope.predicado.dominio.id},
        Nombre: $scope.predicado.name,
        Descripcion: $scope.predicado.description,
        TipoPredicado: {Id: $scope.predicado.tipopredicado.id}
    };
    $http.post('http://localhost:8080/v1/predicado',data);
    window.location.href = '/listarPredicados';
  };

  $scope.cancel = function(){
    window.location.href = '/listarPredicados';
  };
});

rulesApp.controller('editarPredicadoController', function($scope, $http) {
  $scope.title = 'Predicados';
  $scope.message = 'Editar Predicados de Aplicación';

  $scope.load = function(id){
    $http.get('http://localhost:8080/v1/predicado/'+id)
    .then(function(response) {
        $scope.predicado = response.data;
    });
  };

  $http.get('http://localhost:8080/v1/dominio?limit=0')
  .then(function(response) {
      $scope.dominios = response.data;
  });

  $http.get('http://localhost:8080/v1/tipo_predicado/?limit=0')
  .then(function(response) {
      $scope.tipos = response.data;
  });

  $scope.edit = function(id){
    if($scope.predicado.Nombre == null){
      return;
    }
    if($scope.predicado.Descripcion == null){
      return;
    }
    var data = {
        Dominio: {Id: $scope.predicado.Dominio.id},
        Nombre: $scope.predicado.Nombre,
        Descripcion: $scope.predicado.Descripcion,
        TipoPredicado: {Id: $scope.predicado.TipoPredicado.id}
    };
    $http.put('http://localhost:8080/v1/predicado/'+id,data);
    window.location.href = '/listarPredicados';
  };

  $scope.cancel = function(){
    window.location.href = '/listarPredicados';
  };
});

rulesApp.controller('eliminarPredicadoController', function($scope, $http) {
  $scope.title = 'Predicados';
  $scope.message = 'Eliminar Predicados de Aplicación';

  $scope.load = function(id){
    $http.get('http://localhost:8080/v1/predicado/'+id)
    .then(function(response) {
        $scope.predicado = response.data;
    });
  };

  $http.get('http://localhost:8080/v1/dominio?limit=0')
  .then(function(response) {
      $scope.dominios = response.data;
  });

  $http.get('http://localhost:8080/v1/tipo_predicado/?limit=0')
  .then(function(response) {
      $scope.tipos = response.data;
  });

  $scope.delete = function(id){
    $http.delete('http://localhost:8080/v1/predicado/'+id);
    window.location.href = '/listarPredicados';
  };

  $scope.cancel = function(){
    window.location.href = '/listarPredicados';
  };
});
