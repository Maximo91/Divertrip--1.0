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
      }else{
       var confirmPopup = $ionicPopup.alert({
         title: 'ERROR',
         template: 'La clave o el usuario son incorrectos',
       });
    })
    .catch(function(err) {
      console.log('Error');
      console.log(err);
    });
  };
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
   
.controller('mapaCtrl', function($scope, $ionicLoading) {
  $scope.mapCreated = function(map) {
    $scope.map = map;
    $scope.showMarker = function () {
      var latitudes = [-33.038349,-33.032127,-33.041266,-33.042273,-33.046370,-33.033863,-33.040161,-33.050917,-33.0441033,-33.04283,-33.051472,-33.040868,-33.0398397,-33.0405977,-33.0322883];
      var longitudes = [-71.628402,-71.631190,-71.626679,-71.625468,-71.621219,-71.630002,-71.628824,-71.600727,-71.6263453,-71.60403, -71.610185, -71.626371,-71.6302477,-71.6320762,-71.6308042];
      var Titulos = ['Monumento Prat','Museo Marítimo Nacional','Paseo Gervasoni','Paseo Atquinson','Museo de Historia Natural','Ascensor Artillería','Paseo Yugolasvo','Ascensor Polanco','Ascensor Reina Victoria','Ascensor Barón','Ascensor Van Buren','Ascensor Concepción','Ascensor El Peral','Ascensor San Agustín','Paseo 21 de Mayo'];
      var Descripcion = ['El Monumento a los Héroes de Iquique, llamado inicialmente Monumento a la Marina Nacional, está ubicado en el centro de la Plaza Sotomayor, entre el Muelle Prat y el edificio de la Comandancia en Jefe de la Armada, en la ciudad de Valparaíso, Chile. Este monumento fue erigido por colecta popular en memoria de los héroes navales que combatieron en los combates de Iquique y Punta Gruesa el 21 de mayo de 1879. Fue inaugurado el 21 de mayo de 1886.',
      'El Museo Marítimo Nacional está ubicado en el edificio de la ex Escuela Naval, en el cerro Artillería de Valparaíso, Chile. Se considera el 30 de abril de 1915 como la fecha de su creación pues fue cuando se inició la actividad museística en la Armada. Está destinado a resguardar, conservar y difundir hacia la comunidad el patrimonio histórico naval y marítimo de Chile.',
      'Ubicado en el Cerro Concepción, su acceso es desde Calle Papudo hasta Pasaje Templeman,  por Calle Prat, subiendo por  el ascensor Concepción. Emplazado  en lo que fueron durante la Colonia los terrenos del Fuerte Concepción, destinado a la defensa de la bahía contra las incursiones piratas, y del que nunca se disparó un sólo tiro.',
      'En el Cerro Concepción se encuentra este mirador.  Desde él es posible contemplar todo el borde costero, los cerros y el plan de la ciudad.  Una de sus características es encontrarse permanentemente con turistas y visitantes que llegan al lugar para apreciar la hermosa vista de Valparaíso junto a su movimiento Portuario.',
      'Teléfono:  (32) 2544840|/|Horario: Martes a sábado 10:00 a 18:00 hrs | Domingo 10:00 a 14:00 hrs|/|Costo: Entrada liberada|/|Servicios: Visitas guiadas | Material didáctico | Biblioteca | Sala de lectura | Cafetería|/|Contacto: www.mhnv.cl',
      'Es el ascensor más panorámico de la ciudad. Su estación baja se ubica frente a la Plaza Wheelwright, a un costado del Edificio de la Aduana. Su estación superior se ubica en el Paseo 21 de Mayo, frente a la ex Escuela Naval, actualmente Museo Marítimo Nacional',
      'Situado en el cerro Alegre, sobre calle Prat, es accesible por el ascensor El Peral o por calle Urriola. Se conecta con el cerro Concepción por medio de la calle Montealegre. En él está el Palacio Baburizza, actualmente destinado al Museo de Bellas Artes de Valparaíso. Es uno de los primeros lugares del cerro Alegre y del cerro Concepción que es convertido en mirador.  La calle Montealegre, por allá en 1840, es una de las primeras que empieza a recibir edificaciones de la época, todas de un piso.',
      'El Ascensor Polanco es uno de los más especiales ascensores de Valparaíso, Chile. Es el único ascensor de los 15 de la ciudad que se mueve verticalmente, mientras el resto son de tipo funicular, pero son conocidos popularmente como ascensores. Dentro de las particularidades de este ascensor, se tiene que su entrada baja es la boca de un túnel de 150 m de largo que conecta el único carro (originalmente eran dos carros) que asciende verticalmente 60 m, dentro del interior del cerro y luego por una torre que ofrece una vista espectacular de la ciudad. La torre se conecta con el cerro a través de un puente de 48 m de largo.',
      'El ascensor Reina Victoria, ubicado en el cerro Alegre, es uno de los 16 que existen en la ciudad de Valparaíso, Chile Se construyó en 1902 y se inauguró en 1903. Fue declarado Monumento Histórico, del 1 de septiembre de 1998',
      'El Ascensor Barón posee un gran valor urbano al relacionar el plan con uno de los paseos miradores de mayor interés turístico en el sector oriente del anfiteatro. Este mirador históricamente formaba parte del primitivo camino a Quillota, que unía a Valparaíso con la Hacienda de las Siete Hermanas. Se ubica entre los 5 y los 35 metros sobre el nivel del mar. Tiene un largo de rieles de 75 m y un trayecto de 35 segundos',
      'El ascensor Van Buren fue inaugurado en el año 1929, con el objetivo de trasladar pacientes y funcionarios dentro del hospital Este funicular reemplazó a uno anterior, que se destruyó con el terremoto de Valparaíso de 1906.',
      'El ascensor fue inaugurado el 1 de septiembre de 1883, siendo controlado por la Compañía de Ascensores Mecánicos de Valparaíso.  Este es uno de los ascensores que sigue en permanente funcionamiento, ya que conecta la calle Prat con el sector del paseo Gervasoni, que es uno de los principales miradores a la bahía de Valparaíso. En 1998, el Consejo de Monumentos Nacionales declaró al ascensor como monumento nacional.',
      'Fue inaugurado el 7 de diciembre de 1901, siendo sus iniciadores y ejecutores principales Fernando Edwards y Juan Naylor. El primer propietario del ascensor fue la Sociedad Ascensor Cerro Alegre, pasando años después definitivamente a manos de la Municipalidad de Valparaíso. Este ascensor fue el primero de la ciudad en contar con un motor a vapor.',
      'El ascensor fue inaugurado en el año 1913 como un complemento al servicio que prestaba el ascensor Cordillera en el muy poblado Cerro Cordillera. Estaba programado que las obras de restauración de este ascensor culminaran en marzo de 2012, pero tras anunciar que se entregarían en junio del mismo año,5 finalmente se terminaron en septiembre. El 23 de septiembre de 2012 se reinauguró el ascensor San Agustín con la presencia de Sebastián Piñera, Presidente de Chile.',
      'Ubicado en el Cerro Playa Ancha, su acceso es a través del Ascensor Artillería y Plazuela Aduana, pero también se puede llegar por las Calles Carampangue o Taqueadero. Fue construido a comienzos de siglo, convirtiéndose en un centro de la vida social del Cerro de Playa Ancha.'];
       var lat, longi, Titulo, myLatlng, Cuerpo, contentString, marker,infowindow;
          for(var i=Titulos.length - 1;i>= 0 ;i--) {
            lat = latitudes[i];
            longi = longitudes[i];
            myLatlng = new google.maps.LatLng(lat,longi); 
            marker = new google.maps.Marker({
                position: myLatlng,
                map: map,
                icon: {url:'img/marker.png'}
            });
            Titulo = Titulos[i];
            Cuerpo = Descripcion[i]; 
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
      };
  };

    function attachSecretMessage(marker, secretMessage) {
      var infowindow = new google.maps.InfoWindow({
        content: secretMessage
      });
      //Definir infowindow.close();
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
   
.controller('administrarEventosCtrl', function($http, $scope, $state) {
  //create event
  $scope.submit = function(form) {
    $http({
      method: 'POST',
      url: 'http://divertrip.miguelgonzaleza.com/index.php',
      data: $scope.Evento,
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    })
    .then(function(response) {
      if(response.data.status != "error") {
        $state.go('historial');
      }
    })
    .catch(function(err) {
      console.log('Error');
      console.log(err);
    });
  }
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
   
.controller('contrasenaCtrl', function($scope) {

})
   
.controller('historialCtrl', function($scope) {

})
   
.controller('reestablecerCtrl', function($scope) {

});
 
