// Creación del módulo
var principal = angular.module('principal', ['ngRoute']);

// Configuración de las rutas
principal.config(function($routeProvider) {

    $routeProvider
    .when('/index', {
      controller: "homeController",
      templateUrl : 'index.html'
        })
        .when('/Lista_liquidaciones1', {
          templateUrl : 'Lista_liquidaciones.html',
            controller  : 'c_preliquidacion'
            })
            .when('/nominas', {
              controller: "homeController",
              templateUrl : 'nominas.html'
                })
                .when('/GenerarPreliqu', {
                  controller: "homeController",
                  templateUrl : 'generar_preliquidacion.html'
                    })
                .when('/Resumen', {
                  controller: "homeController",
                  templateUrl : 'Resumen.html'
                    })

        .otherwise({
            redirectTo: '/home'
        });

});
