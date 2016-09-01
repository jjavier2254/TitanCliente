angular.module('s_liquidacion', [])//Declaramos el modulo
	.factory('testRequest', function($http) { //declaramos la factory
		var path = "http://localhost:8081/api/";
		return {
			//Login
			Empleados_Horas_Cat : function(){ //Retornara la lista de posts
				global = $http.get(path+'ListaEmpleados_Horas_Cat');
				return global;
			},
			Lista_Nominas : function(){ //Retornara la lista de posts
				global = $http.get(path+'nominas/ListaNominas');
				return global;
			},
				Generar_Preliqu : function(){ //Retornara la lista de posts
				global = $http.get(path+'preliquidacion/GenerarPreliqu/');
				return global;
			},
			Detalle_Preliqu : function(){ //Retornara la lista de posts
				global = $http.get(path+'DetallePreliqu/');
				return global;
			},
			Registrar_Preliqu : function(){ //Retornara la lista de posts
				global = $http.get(path+'Registrar_Preliqu/');
				return global;
			},
			RegistrarNomina : function(){ //Retornara la lista de posts
				global = $http.get(path+'RegistrarNomina/');
				return global;
			},
			}
		}

	)
	.service('obtenerID', function () {
        var idNomina;

        return {
            getIDNomina: function () {
                return idNomina;
            },
            setIDNomina: function(valor) {
                idNomina = valor;
            }
        }
			});
