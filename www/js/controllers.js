angular.module('app.controllers', [])

.controller('dIVERTRIPCtrl', function($scope, $ionicPopup) {
  	$scope.salir = function() {
    	  var confirmPopup = $ionicPopup.confirm({
    	  title: 'La aplicación se cerrara.',
    	  template: ' ¿Desea continuar ?',
    	  buttons:[
    	  {text:'NO', 
        onTap:function(e){
       	return true; 
       	}
       	},
        {text: 'SI', 
        type: 'button-positive',
       	onTap: function(e){
       	ionic.Platform.exitApp();
       	return true; 
       	}
        }]});
  	};
})
   
.controller('personasCtrl', function($scope) {

})
   
.controller('patrocinadorCtrl', function($scope, $cookies, $http, $state, $ionicPopup) {

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
      }else{
       var confirmPopup = $ionicPopup.alert({
         title: 'ERROR',
         template: 'La clave o el usuario son incorrectos',
       });
    }})
    .catch(function(err) {
      console.log('Error');
      console.log(err);
    });
  }
})

.controller('historialCtrl', function($scope) {
})   
   
.controller('bienvenidoCtrl', function($scope, $ionicPopup) {
  
    	$scope.salir = function() {
    	var confirmPopup = $ionicPopup.confirm({
    	title: 'La aplicación se cerrara.',
    	template: ' ¿Desea continuar ?',
    	buttons:[
    	{text:'NO', 
        onTap:function(e){
       	return true; 
       	}
       	},
        {text: 'SI', 
        type: 'button-positive',
       	onTap: function(e){
       	ionic.Platform.exitApp();
       	return true; 
       	}
        }]});
    };
})
   
.controller('menuCtrl', function($scope, $ionicPopup) {
  
    	$scope.salir = function() {
    	var confirmPopup = $ionicPopup.confirm({
    	title: 'La aplicación se cerrara.',
    	template: ' ¿Desea continuar ?',
    	buttons:[
    	{text:'NO', 
        onTap:function(e){
       	return true; 
       	}
       	},
        {text: 'SI', 
        type: 'button-positive',
       	onTap: function(e){
       	ionic.Platform.exitApp();
       	return true; 
       	}
        }]});
    	};
})
   
.controller('eventosCtrl', function($scope) {

})
   
.controller('mapaCtrl', function($scope, $ionicLoading,$http, $state) {

  $scope.mapCreated = function(map) {
    $scope.map = map;
    $http({
      method: 'GET',
      url: 'http://localhost:8080/divertrip-backend-master/index.php',
      params: {
        r: 'LugarEmblematico/GetEventsList',
        idLugar_Emblematico: $scope.idLugar_Emblematico,
        nombre: $scope.nombre,
        description: $scope.description,
        latitude: $scope.latitude,
        longitude: $scope.longitude
      }, 
      headers: {'Content-Type': 'application/json'}
      }).success(function(response){
          var lat, longi, Titulo, myLatlng, Cuerpo, contentString, marker,infowindow;
          for(var i=response.length-1;i>= 0;i--) {
            lat = response[i].latitude;
            longi = response[i].longitude;
            console.log(lat);
            console.log(longi);
            myLatlng = new google.maps.LatLng(lat,longi);
            marker = new google.maps.Marker({
                 position: myLatlng,
                 map: map,
                 icon: {url:'img/marker.png'}
            });
            Titulo = response[i].nombre;
            Cuerpo = response[i].description; 
            contentString = 
                '<div id="content">'+
                '<div id="siteNotice"></div>'+
                '<h1 id="firstHeading" class="firstHeading">'+Titulo+'</h1>'+
                '<div id="bodyContent">'+
                '<p>'+Cuerpo+'</p>'+
                '</div>'+
                '</div>';
                attachSecretMessage(marker, contentString);
          };
      console.log(response.length);
    });
    //eventos
    $http({
      method: 'GET',
      url: 'http://localhost:8080/divertrip-backend-master/index.php',
      params: {
        r: 'Evento/GetEventsList',
        idEvento: $scope.idEvento,
        name_event: $scope.name_event,
        description_event: $scope.description_event,
        date: $scope.date,
        Categoria_idCategoria: $scope.Categoria_idCategoria,
        Patrocinador_idPatrocinador: $scope.Patrocinador_idPatrocinador,
        start_event: $scope.start_event,
        image: $scope.image,
        address: $scope.address,
        latitude: $scope.latitude,
        longitude: $scope.longitude
      }, 
      headers: {'Content-Type': 'application/json'}
      }).success(function(response){
          var lat, longi, Titulo, myLatlng, Cuerpo, contentString, marker,infowindow;
          for(var i=response.length-1;i>= 0;i--) {
            lat = response[i].latitude;
            longi = response[i].longitude;
            console.log(lat);
            console.log(longi);
            myLatlng = new google.maps.LatLng(lat,longi);
            marker = new google.maps.Marker({
                 position: myLatlng,
                 map: map,
                 icon: {url:'img/marker_evento.png'}
            });
            Titulo = response[i].name_event;
            Cuerpo = response[i].description_event; 
            contentString = 
                '<div id="content">'+
                '<div id="siteNotice"></div>'+
                '<h1 id="firstHeading" class="firstHeading">'+Titulo+'</h1>'+
                '<div id="bodyContent">'+
                '<p>'+Cuerpo+'</p>'+
                '</div>'+
                '</div>';
                attachSecretMessage(marker, contentString);
          };
      console.log(response.length);
    });
    //fin eventos

  };

    function attachSecretMessage(marker, secretMessage) {
      var infowindow = new google.maps.InfoWindow({
        content: secretMessage
      });
      marker.addListener('click', function() {
        infowindow.open(marker.get('map'), marker);
      });
    };

  $scope.centerOnMe = function () {
    console.log("Centering");
    if (!$scope.map) {
      return;
    }
    $scope.loading = $ionicLoading.show({
      content: 'Getting current location...',
      showBackdrop: false
    });
    
 
    
    navigator.geolocation.getCurrentPosition(function (pos) {
      console.log('Got pos', pos);
      $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));

      $scope.marker = new google.maps.Marker({
        position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
        map: $scope.map,
        icon: {url:'img/icono_gps.png'}
      });
//ver problema de temporalidad del marker ya que genera muchos marker
    $scope.loading.hide();
    },function (error) {
      alert('Unable to get location: ' + error.message);
    });
  };
})
//--------------------------------------- fin mapa
   
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

.controller('inicioCtrl', function($scope, $ionicPopup) {
  
    	$scope.salir = function() {
    	var confirmPopup = $ionicPopup.confirm({
    	title: 'La aplicación se cerrara.',
    	template: ' ¿Desea continuar ?',
    	buttons:[
    	{text:'NO', 
        onTap:function(e){
       	return true; 
       	}
       	},
        {text: 'SI', 
        type: 'button-positive',
       	onTap: function(e){
       	ionic.Platform.exitApp();
       	return true; 
       	}
        }]});
	};
})
   
.controller('menuPatrocinadorCtrl', function($scope, $ionicPopup) {
  
    	$scope.salir = function() {
    	var confirmPopup = $ionicPopup.confirm({
    	title: 'La aplicación se cerrara.',
    	template: ' ¿Desea continuar ?',
    	buttons:[
    	{text:'NO', 
        onTap:function(e){
       	return true; 
       	}
       	},
        {text: 'SI', 
        type: 'button-positive',
       	onTap: function(e){
       	ionic.Platform.exitApp();
       	return true; 
       	}
        }]});
	};
})
   
.controller('administrarEventosCtrl', function($http,$cookies,$scope, $state) {
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
 
