angular.module('app.controllers', [])
  
.controller('dIVERTRIPCtrl', function($scope) {

})
   
.controller('personasCtrl', function($scope) {

})
   
.controller('patrocinadorCtrl', function($scope, $http, $state) {
  $scope.submit = function(form) {
    $http({
      method: 'GET',
      url: 'http://divertrip.miguelgonzaleza.com/index.php',
      params: {
        r: 'patrocinador/login',
        user_name: $scope.user_name,
        passwd: $scope.passwd,
      },
      headers: {'Content-Type': 'application/json'}
    })
    .then(function(response) {
      if(response.data != "null") {
        $state.go('inicio');
      }
    })
    .catch(function(err) {
      console.log('Error');
      console.log(err);
    });
  }
})
   
.controller('bienvenidoCtrl', function($scope) {

})
   
.controller('menuCtrl', function($scope) {

})
   
.controller('eventosCtrl', function($scope) {

})
   
.controller('mapaCtrl', function($scope) {

})
   
.controller('playCtrl', function($scope) {

})
   
.controller('preferenciasCtrl', function($scope) {
	  $scope.settings = {
    	recibirnotificaciones: true
  };

})
   
.controller('ayudaCtrl', function($scope) {

})
   
.controller('informacionCtrl', function($scope) {

})
   
.controller('contactoCtrl', function($scope) {

})

.controller('inicioCtrl', function($scope) {

})
   
.controller('menuPatrocinadorCtrl', function($scope) {

})
   
.controller('administrarEventosCtrl', function($http, $scope, $state) {
  //create event
  $scope.Evento = {};
  $scope.change_latResult = "";
  $scope.change_coords = function() {
    console.log('entre ctm');
    $scope.Evento.latitude = $scope.latitude;
    $scope.Evento.longitude = $scope.longitude;
    /*var appElement = angular(document.querySelector('input[id=latitude]'));
    appElement.attr('initial-value', '');
    appElement.attr('value', '2');*/
    console.log($scope.latitude);
    //$scope.Evento=$scope.Evento.push({latitude: 5});
  };

  $scope.submit = function() {
    $http({
      method: 'POST',
      url: 'http://localhost/tap/divertrip/index.php?r=evento/create',
      data: $scope.Evento,
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    })
    .then(function(response) {
      /*
      if(response.data.success == true) {
        $state.go('historial');
      }
      */
      console.log($scope.Evento);
      /*
        else{
          pop up mono
        }
      */
    })
    .catch(function(err) {
      console.log('Error');
      console.log(err);
      console.log($scope.Evento);
    });
  };
})

.controller('listarCategorias', function($scope, $http)
{
  $http({
      method: 'GET',
      url: 'http://divertrip.miguelgonzaleza.com/index.php',
      params: {
        r: 'categoria/getCategoriesList',
        //name_categoria: $scope.Categoria_idCategoria,
      },
      headers: {'Content-Type': 'application/json'}
    })
    .then(function(response) {
      $scope.Categoria_idCategoria = [];
      angular.forEach(response.data, function(value, key){
        $scope.Categoria_idCategoria.push(value);
      });
    })
    .catch(function(err) {
      console.log('Error');
      console.log(err);
    });

})

.controller('MapController', function($scope, $ionicLoading) {

  
})   
.controller('contrasenaCtrl', function($scope) {

})
   
.controller('historialCtrl', function($scope) {

})
   
.controller('reestablecerCtrl', function($scope) {

});
 
