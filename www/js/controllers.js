angular.module('app.controllers', [])

.controller('dIVERTRIPCtrl', function($scope) {

})
   
.controller('personasCtrl', function($scope) {

})
   
.controller('patrocinadorCtrl', function($scope,$cookies,$http,$state) {
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
        // Setting a cookie
        $cookies.put('idPatrocinador',response.data.idPatrocinador);
        $state.go('inicio');
      }
    })
    .catch(function(err) {
      console.log('Error');
      console.log(err);
    });
  }
})

.controller('historialCtrl', function($scope) {
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
   
.controller('administrarEventosCtrl', function($http, $cookies,$scope, $state) {
  //create event
  $scope.Evento = {};
  $scope.change_latResult = "";
  var patrocinadorCookie = $cookies.get('idPatrocinador');
  if(patrocinadorCookie){
    console.log(patrocinadorCookie);
    $scope.Evento.Patrocinador_idPatrocinador = patrocinadorCookie;
  }else{
    $state.go('patrocinador');
  }
  $scope.change_coords = function() {
    $scope.Evento.latitude = $scope.latitude;
    $scope.Evento.longitude = $scope.longitude;
  };
  $scope.convertDate = function() {
    var date = $scope.start_event;
    var year = date.getFullYear();
    var month = (date.getMonth()+1);
    var day = date.getDate();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    if(month<10){
      month = '0'+month;
    }
    if(day<10){
      day = '0'+day;
    }
    if(hour<10){
      hour = '0'+hour;
    }
    if(min<10){
      min = '0'+min;
    }
    if(sec<10){
      sec = '0'+sec;
    }
    datevalues = year + '-' + month + '-' + day + ' ' + hour + ':' + min + ':' + sec ;
    //console.log(datevalues);
    $scope.Evento.start_event = ""+datevalues+"";
   /* console.log($scope.Evento.start_event);
    console.log($scope.Evento.address);
    console.log($scope.Evento.Categoria_idCategoria);*/
  };

  $scope.submit = function() {
    $http({
      method: 'POST',
      url: 'http://192.168.0.13/tap/divertrip/index.php?r=evento/create',
      data: $scope.Evento,
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    })
    .then(function(response) {
      if(response.data.success == true) {
        $state.go('historial');
      }
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
   
.controller('reestablecerCtrl', function($scope) {

});
 
