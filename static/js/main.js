// Creación del módulo
var rulesApp = angular.module('rulesApp', ['datatables']);

var basePath = 'http://localhost:8081/v1/';

rulesApp.controller('homeController', function($scope) {
  $scope.message = 'Versión 0.0.1';
});

rulesApp.controller('aboutController', function($scope) {
  $scope.message = 'Esta es la página "Acerca de"';
});

rulesApp.controller('parserMenu', function($scope, $http) {
  $scope.menu = [{"id": "1", "text": "Dominios", "url": "",
                  "subopciones": [{ "text": "Listar", "url": "/listarDominios" },
                                  { "text": "Agregar", "url": "/agregarDominios" }]
              },
              {"id": "2", "text": "Predicados", "url": "",
                  "subopciones": [{ "text": "Listar", "url": "/listarPredicados" },
                                  { "text": "Agregar", "url": "/agregarPredicados" }]
              }];

});
