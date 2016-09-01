var principal = angular.module( 'Principal' , ['ngRoute'] )


principal.config(['$routeProvider',
    function($routeProvider) {
      $routeProvider.
        when('/Empleado_esp/lista', {
          templateUrl: 'Plantillas/Listas/lst_empleados.html',

        }).
        when('/animales/ave2', {
          templateUrl: 'plantillas/ave2.html',
        }).
        when('/animales/ave3', {
          templateUrl: 'plantillas/ave3.html',
        }).
        otherwise({
          redirectTo: '/',
          templateUrl: 'Plantillas/inicio.html',
        });
    }]);


  
