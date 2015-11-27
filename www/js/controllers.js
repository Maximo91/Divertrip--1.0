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
   
.controller('patrocinadorCtrl', function($scope, localStorageService,
  $http, $state, $ionicPopup) {
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
        localStorageService.set('idPatrocinador',response.data.idPatrocinador);
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

.controller('historialCtrl', function($scope, localStorageService,
 $http, $state) {
  $http({
      method: 'GET',
      url: 'http://192.168.0.9/tap/divertrip/index.php',
      params: {
        r: 'evento/getEventsListByPartner',
        id_Patrocinador: localStorageService.get('idPatrocinador'),
      },
      headers: {'Content-Type': 'application/json'}
    })
    .then(function(response) {
      if(response != "null") {
        console.log("historial");
        $scope.historial = response.data;
      }
    })
    .catch(function(err) {
      console.log('Error');
      console.log(err);
    });
})   

.controller('verEventoCtrl',function($scope,$state, localStorageService,
  $http, NgMap){
  $scope.prueba = function(id){
    localStorageService.set('idEvento',id);
    $http({
      method: 'GET',
      url: 'http://192.168.0.9/tap/divertrip/index.php',
      params: {
        r: 'evento/viewEvent',
        id_Evento:id,
        id_Patrocinador: localStorageService.get('idPatrocinador'),
      },
      headers: {'Content-Type': 'application/json'}
    })
    .then(function(response) {
      if(response != "null") {
        //console.log(response.data);
        NgMap.getMap().then(function(map) {
          var marker = new google.maps.Marker({ title: "Marker: "});
          var infowindow = new google.maps.InfoWindow({content: 
            response.data.name_event});
          google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map,marker);
          });
          var lat = response.data.latitude;
          var lng = response.data.longitude;
          var loc = new google.maps.LatLng(lat, lng);
          marker.setPosition(loc);
          marker.setMap(map);
          map.setCenter(loc);
        });
      }
    })
    .catch(function(err) {
      console.log('Error');
      console.log(err);
    });
  }
})

.controller('dataCtrl',function($scope,$state, localStorageService,
  $http){
   $http({
      method: 'GET',
      url: 'http://192.168.0.9/tap/divertrip/index.php',
      params: {
        r: 'evento/viewEvent',
        id_Evento:localStorageService.get('idEvento'),
        id_Patrocinador: localStorageService.get('idPatrocinador'),
      },
      headers: {'Content-Type': 'application/json'}
    })
    .then(function(response) {
      if(response != "null") {
        console.log("historial");
        $scope.ev = response.data;
      }
    })
    .catch(function(err) {
      console.log('Error');
      console.log(err);
    });
})

.controller('eliminarEventoCtrl',function($scope,$state, localStorageService,
  $http,$ionicPopup){
  $scope.eliminar = function(){
    $http({
      method: 'GET',
      url: 'http://192.168.0.9/tap/divertrip/index.php',
      params: {
        r: 'evento/deleteEvent',
        id_Evento:localStorageService.get('idEvento'),
        id_Patrocinador: localStorageService.get('idPatrocinador'),
      },
      headers: {'Content-Type': 'application/json'}
    })
    .then(function(response) {
      console.log(response.data);
      if(response.data == '"success"') {
        var confirmPopup = $ionicPopup.alert({
          title: 'Noticia',
          template: 'Evento eliminado con exito',
        });
        $state.go('historial');   
      }
    })
    .catch(function(err) {
      console.log('Error');
      console.log(err);
    });
  }

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
   
.controller('eventosCtrl', function($scope, localStorageService, $http, $state) {
  $http({
      method: 'GET',
      url: 'http://divertrip.miguelgonzaleza.com/index.php',
      params: {
        r: 'evento/getEventsList',
      },
      headers: {'Content-Type': 'application/json'}
    })
    .then(function(response) {
      if(response != "null") {
        console.log("evento");
        $scope.evento = response.data;
      }
    })
    .catch(function(err) {
      console.log('Error');
      console.log(err);
    });
})   
   
.controller('mapaCtrl', function($scope, $ionicLoading,$http, $state) {

  $scope.mapCreated = function(map) {
    $scope.map = map;
    $http({
      method: 'GET',
      url: 'http://divertrip.miguelgonzaleza.com/index.php',
      params: {
        r: 'lugarEmblematico/getEmblematicoList',
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
      url: 'http://divertrip.miguelgonzaleza.com/index.php',
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
    $scope.loading = $ionicLoading.hide();
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
   
.controller('administrarEventosCtrl', function($http,localStorageService,
  $scope, $state, $ionicPopup) {
  //create event
  $scope.Evento = {};
  $scope.change_latResult = "";
  var patrocinadorStorage = localStorageService.get('idPatrocinador');
  $scope.Evento.Patrocinador_idPatrocinador = patrocinadorStorage;
  //}

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
      url: 'http://192.168.0.9/tap/divertrip/index.php?r=evento/create',
      data: $scope.Evento,
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    })
    .then(function(response) {
      if(response.data.success == true) {
        $state.go('historial');
      }else{
        var confirmPopup = $ionicPopup.alert({
          title: 'ERROR',
          template: 'Debe llenar todos los datos',
        });
        $state.go('adminitrarEventos');
      }
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
 
.controller('contrasenaCtrl', function($scope, localStorageService,
  $http, $state, $ionicPopup){
  $scope.submit = function(form){
    if($scope.new_password!=$scope.new_password_repeat){
      var confirmPopup = $ionicPopup.alert({
        title: 'ERROR',
        template: 'Las claves no son iguales',
      });
    }else{
      $http({
          method: 'GET',
          url: 'http://divertrip.miguelgonzaleza.com/index.php',
          params: {
            r: 'login/setNewPassword',
            id_Patrocinador: localStorageService.get('idPatrocinador'),
            passwd:$scope.actual_password,
            newpasswd:$scope.new_password,
          },
          headers: {'Content-Type': 'application/json'}
        })
        .then(function(response) {
          console.log(response);
          if(response.data == '"success"') {
            $state.go('menuPatrocinador');
          }else{
            var confirmPopup = $ionicPopup.alert({
            title: 'ERROR',
            template: 'La clave actual es incorrecta',
            });
          }
        })
      .catch(function(err) {
        console.log('Error');
        console.log(err);
      });
    }
  }
})
   
.controller('reestablecerCtrl', function($scope) {

});
 
