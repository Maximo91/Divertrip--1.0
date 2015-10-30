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
      if(response != null) {
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
   
.controller('administrarEventosCtrl', function($scope) {

})
   
.controller('contrasenaCtrl', function($scope) {

})
   
.controller('historialCtrl', function($scope) {

})
   
.controller('reestablecerCtrl', function($scope) {

})
 
